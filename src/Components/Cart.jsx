import CartItem from "./CartItem";
import { ReactSVG } from "react-svg";
import { useDesserts } from "../contexts/DessertsContext";

export default function Cart() {
  const { dessertsInCart } = useDesserts();
  const desserts = dessertsInCart();

  const totalInCart = desserts.reduce((acc, dessert) => {
    return acc + dessert.cart;
  }, 0);

  const totalPrice = desserts.reduce((acc, dessert) => {
    return acc + dessert.cart * dessert.price;
  }, 0);

  return (
    <div className="bg-white">
      <h1>Your Cart ({totalInCart})</h1>

      {desserts.length === 0 && (
        <div>
          <ReactSVG src="images/illustration-empty-cart.svg" />
          <p>Your added items will appear here</p>
        </div>
      )}

      {desserts.length > 0 && (
        <>
          {desserts.map((dessert, i) => {
            return <CartItem key={i} dessert={dessert} />;
          })}

          <div>
            <p>Order Total</p>
            <p>${totalPrice}</p>
          </div>

          <div>
            <ReactSVG src="images/icon-carbon-neutral.svg" />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>

          <button>Confirm Order</button>
        </>
      )}
    </div>
  );
}
