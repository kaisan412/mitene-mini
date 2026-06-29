//責務: 写真カードの内容を担当するコンポーネント

import "./PhotoCard.css"

type PhotoCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

function PhotoCard({ title, description, imageUrl }: PhotoCardProps) {
  return (
    <div className="photo-card">
      <img 
        src={imageUrl}
        alt={title}
        className="photo-card__image"
      />
      <h2 className="photo-card__title">{title}</h2>
      <p className="photo-card__description">{description}</p>
    </div>
  );
}

export default PhotoCard;