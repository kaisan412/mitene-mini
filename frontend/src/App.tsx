import { useEffect, useState } from "react";
import PhotoCard from "./components/PhotoCard";

//型定義
type Photo = {
  id: number;
  title: string;
  description: string;
};

function App() {
  //useStateでphotosという箱を用意し、初期値は空の配列
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/photos")
      //FastAPIからのレスポンスをJSON形式に変換
      .then((response) => response.json())
      //取得したデータをphotosに格納
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>みてねミニ</h1>
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          description={photo.description}
        />
      ))}
    </div>
  );
}

export default App;
