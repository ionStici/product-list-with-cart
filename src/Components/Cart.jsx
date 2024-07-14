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
    <div className="mt-[32px] rounded-[12px] bg-white p-[24px]">
      <h1 className="mb-[24px] text-2xl font-bold text-red">
        Your Cart ({totalInCart})
      </h1>

      {desserts.length === 0 && (
        <div className="py-[16px] text-center">
          <ReactSVG
            className="mb-[16px] flex justify-center"
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

          <div className="my-[24px] flex items-center justify-between">
            <p className="text-sm">Order Total</p>
            <p className="text-2xl font-bold">${totalPrice}</p>
          </div>

          <div className="mb-[24px] flex h-[52px] items-center justify-center space-x-[8px] rounded-[8px] bg-rose_50 px-[12px]">
            <ReactSVG src="images/icon-carbon-neutral.svg" />
            <p className="text-center text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <button className="text-md h-[52px] w-full rounded-full bg-red font-semibold text-white transition-all hover:brightness-75">
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
