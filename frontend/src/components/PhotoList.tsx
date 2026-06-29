//責務: 写真の並びを担当するコンポーネント

import PhotoCard from "./PhotoCard";

type Photo = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

type PhotoListProps = {
  photos: Photo[];
};

function PhotoList({ photos }: PhotoListProps) {
  return (
    <>    
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          description={photo.description}
          imageUrl={photo.image_url}
        />
      ))}
    </>
  );
}

export default PhotoList;