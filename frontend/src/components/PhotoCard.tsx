//責務: 写真カードの内容を担当するコンポーネント

import "./PhotoCard.css";

type PhotoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

function PhotoCard({
  title,
  description,
  imageUrl,
  createdAt,
}: PhotoCardProps) {
  return (
    <div className="photo-card">
      <img src={imageUrl} alt={title} className="photo-card__image" />
      <h2 className="photo-card__title">{title}</h2>
      <p className="photo-card__description">{description}</p>
      <p className="photo-card__date">
        {new Date(createdAt).toLocaleString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}

export default PhotoCard;
