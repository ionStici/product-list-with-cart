import { useEffect } from "react";
import { useDesserts } from "../contexts/DessertsContext";
import { createPortal } from "react-dom";
import { ReactSVG } from "react-svg";
import Button from "../ui/Button";

export default function OrderModal({ setCartIsOpen }) {
  const { getDessertsCart, clearCart } = useDesserts({ setCartIsOpen });
  const desserts = getDessertsCart();

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");
    return () => document.documentElement.classList.remove("no-scroll");
  }, []);

  const handleCloseModal = ({ target }) => {
    if (target.dataset.type !== "outside") return;
    setCartIsOpen(false);
  };

  const handleNewOrder = () => {
    setCartIsOpen(false);
    clearCart();
  };

  return createPortal(
    <div
      onClick={handleCloseModal}
      data-type="outside"
      className="hide-scrollbar fixed inset-0 h-dvh place-content-center overflow-scroll bg-rose_900/50 py-[95px] backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[450px] rounded-[12px] bg-white px-6 pb-6 pt-10 md:max-w-[688px] md:p-10 lg:max-w-[592px]">
        <ReactSVG className="pb-6" src="images/icon-order-confirmed.svg" />

        <h2 className="pb-2 text-4xl font-bold leading-[45px]">
          Order Confirmed
        </h2>
        <p className="font-base pb-8 text-rose_500">
          We hope you enjoy your food!
        </p>

        <div className="mb-8 rounded-lg bg-rose_50 p-6">
          <div>
            {desserts.map(({ image, name, cart, price }, i) => {
              return (
                <div
                  className="mb-4 flex items-center border-b border-rose_100 pb-4 text-sm font-semibold last:mb-6 last:pb-6"
                  key={i}
                >
                  <div className="mr-4 h-12 w-12 shrink-0">
                    <img
                      className="size-full rounded-[4px]"
                      src={image?.thumbnail}
                      alt=""
                    />
                  </div>

                  <div className="mr-4 min-w-0">
                    <p className="mb-2 truncate">{name}</p>
                    <p className="space-x-2">
                      <span className="text-red">{cart}x</span>
                      <span className="font-normal text-rose_500">
                        @${price}
                      </span>
                    </p>
                  </div>

                  <p className="ml-auto text-base">${cart * price}</p>
                </div>
              );
            })}
          </div>

          <p className="flex items-center justify-between">
            <span className="text-sm">Order Total</span>
            <span className="text-2xl font-bold">$46.50</span>
          </p>
        </div>

        <Button onClick={handleNewOrder}>Start New Order</Button>
      </div>
    </div>,
    document.body,
  );
}
