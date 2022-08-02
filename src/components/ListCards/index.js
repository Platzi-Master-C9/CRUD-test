import Card from "../Card";
import "./ListCards.css";

const ListCards = ({ value }) => {
  const aux = value.data;
  return (
    <div className="list-cards">
      {aux.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListCards;
