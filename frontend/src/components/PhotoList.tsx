//責務: 写真の並びを担当するコンポーネント

import PhotoCard from "./PhotoCard";
import "./PhotoList.css";

type Photo = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
};

type PhotoListProps = {
  photos: Photo[];
};

function PhotoList({ photos }: PhotoListProps) {
  return (
    <section className="photo-list">    
      <h2 className="photo-list__title">写真一覧</h2>

      <div className="photo-list__items">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          description={photo.description}
          imageUrl={photo.image_url}
          createdAt={photo.created_at}
        />
      ))}
      </div>
    </section>
  );
}

export default PhotoList;