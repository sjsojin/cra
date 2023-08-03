import "../style.css";

function ShoppingItem({ data }) {
  return (
    <div className="itemContainer">
      <img className="itemImage" src={data.image} alt="" />
      <div className="itemContentContainer">
        <p>{data.star}</p>
        <p>
          {data.company} | {data.title}
        </p>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export default ShoppingItem;
