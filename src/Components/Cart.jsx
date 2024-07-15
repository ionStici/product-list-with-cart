import CartItem from "./CartItem";
import OrderModal from "./OrderModal";
import Button from "../ui/Button";
import { useDesserts } from "../contexts/DessertsContext";
import { useState } from "react";
import { ReactSVG } from "react-svg";

export default function Cart() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const { getDessertsCart } = useDesserts();
  const desserts = getDessertsCart();

  const totalInCart = desserts.reduce((acc, dessert) => {
    return acc + dessert.cart;
  }, 0);

  const totalPrice = desserts.reduce((acc, dessert) => {
    return acc + dessert.cart * dessert.price;
  }, 0);

  return (
    <div className="mt-8 rounded-xl bg-white p-6 lg:mt-0 lg:self-start">
      <h1 className="mb-6 text-2xl font-bold text-red">
        Your Cart ({totalInCart})
      </h1>

      {desserts.length === 0 && (
        <div className="py-4 text-center">
          <ReactSVG
            className="mb-4 flex justify-center"
            src="images/illustration-empty-cart.svg"
          />
          <p className="text-sm font-semibold text-rose_500">
            Your added items will appear here
          </p>
        </div>
      )}

      {desserts.length > 0 && (
        <>
          {desserts.map((dessert, i) => {
            return <CartItem key={i} dessert={dessert} />;
          })}

          <div className="my-6 flex items-center justify-between">
            <p className="text-sm">Order Total</p>
            <p className="text-2xl font-bold">${totalPrice}</p>
          </div>

          <div className="mb-6 flex h-[52px] items-center justify-center space-x-2 rounded-lg bg-rose_50 px-3">
            <ReactSVG src="images/icon-carbon-neutral.svg" />
            <p className="text-center text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <Button onClick={() => setCartIsOpen(true)}>Confirm Order</Button>

          {cartIsOpen && <OrderModal />}
        </>
      )}
    </div>
  );
}
