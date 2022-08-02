import "./Card.css";

const Card = (item) => {
  console.log(item.item);
  return (
    <article className="card-container">
      <div className="img-container">
        <img src={require("../../assets/iconUser.png")} />
      </div>
      <p className="email">{item.item.email}</p>
      <p className="name">
        <strong>{item.item.name}</strong>
      </p>
      <p className="gender">{item.item.gender}</p>
      <p className="status">
        <strong>{item.item.status}</strong>
      </p>
    </article>
  );
};

export default Card;
