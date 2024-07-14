import { ReactSVG } from "react-svg";
import { useDesserts } from "../contexts/DessertsContext";

export default function CartItem({ dessert }) {
  const { removeDessertFromCart } = useDesserts();
  const { name, cart, price } = dessert;

  return (
    <div className="flex items-center justify-between">
      <div>
        <p>{name}</p>
        <p>
          <span>{cart}x</span>
          <span>@${price}</span>
          <span>${cart * price}</span>
        </p>
      </div>
      <button
        aria-label="Remove from Cart"
        onClick={() => removeDessertFromCart(name)}
      >
        <ReactSVG src="images/icon-remove-item.svg" />
      </button>
    </div>
  );
}
