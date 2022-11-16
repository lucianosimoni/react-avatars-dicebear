import "./Card.css";

function Card({ spriteName, seed }) {
  return (
    <div className="card">
      <div className="image">
        <img
          alt="Sprite"
          src={`https://avatars.dicebear.com/api/${spriteName}/${seed}.svg`}
        ></img>
      </div>
    </div>
  );
}

export default Card;
