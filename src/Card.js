import "./Card.css";

function Card({ spriteName, seed }) {
  const capitalizedName =
    spriteName.charAt(0).toUpperCase() + spriteName.slice(1);

  return (
    <div className="card">
      <div className="image">
        <img
          alt="Sprite"
          src={`https://avatars.dicebear.com/api/${spriteName}/${seed}.svg`}
        ></img>
      </div>

      <div className="info">
        <h2>{capitalizedName}</h2>
        <button>Select</button>
      </div>
    </div>
  );
}

export default Card;
