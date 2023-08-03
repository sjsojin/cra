import { SHOPPING_ITEMS } from "../../constents/shopping/shoppingconstent";
import ShoppingItem from "./ShoppingItem";
import "./style.css";

function Shopping() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="itemScrollContainer">
          {SHOPPING_ITEMS.map((item) => (
            <ShoppingItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
