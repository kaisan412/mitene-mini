type PhotoCardProps = {
    title: string;
    description: string;
};

function PhotoCard({ title, description }: PhotoCardProps) {
  return (
    <div
        style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            width: "300px",
            backgroundColor: "#fff",
        }}
    >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  );
}

export default PhotoCard;