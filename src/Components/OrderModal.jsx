import { useEffect } from "react";
import { useDesserts } from "../contexts/DessertsContext";
import { createPortal } from "react-dom";
import { ReactSVG } from "react-svg";
import Button from "../ui/Button";
import ItemModal from "./ItemModal";
import { motion } from "framer-motion";

export default function OrderModal({ setCartIsOpen }) {
  const { getDessertsCart, clearCart } = useDesserts({ setCartIsOpen });
  const desserts = getDessertsCart();

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");
    return () => document.documentElement.classList.remove("no-scroll");
  }, []);

  const totalPrice = desserts.reduce((acc, { cart, price }) => {
    return acc + cart * price;
  }, 0);

  const handleCloseModal = ({ target }) => {
    if (target.dataset.type !== "outside") return;
    setCartIsOpen(false);
  };

  const handleNewOrder = () => {
    setCartIsOpen(false);
    clearCart();
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleCloseModal}
      data-type="outside"
      className="hide-scrollbar fixed inset-0 z-20 h-dvh place-content-center overflow-scroll bg-rose_900/50 backdrop-blur-sm md:px-[95px]"
    >
      <div data-type="outside" aria-hidden="true" className="h-[95px] w-full" />

      <motion.div
        initial={{ y: -75, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -75, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="mx-auto max-w-[450px] rounded-[12px] bg-white px-6 pb-6 pt-10 md:max-w-[688px] md:p-10 lg:max-w-[592px]"
      >
        <div className="mb-6 h-12 w-12">
          <ReactSVG src="images/icon-order-confirmed.svg" />
        </div>

        <h2 className="pb-2 text-4xl font-bold leading-[45px]">
          Order Confirmed
        </h2>
        <p className="font-base pb-8 text-rose_500">
          We hope you enjoy your food!
        </p>

        <div className="mb-8 rounded-lg bg-rose_50 p-6">
          <div>
            {desserts.map((dessert, i) => {
              return <ItemModal key={i} dessert={dessert} />;
            })}
          </div>

          <p className="flex items-center justify-between">
            <span className="text-sm">Order Total</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </p>
        </div>

        <Button onClick={handleNewOrder}>Start New Order</Button>
      </motion.div>

      <div data-type="outside" aria-hidden="true" className="h-[95px] w-full" />
    </motion.div>,
    document.body,
  );
}
