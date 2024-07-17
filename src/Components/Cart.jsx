import CartItem from "./CartItem";
import OrderModal from "./OrderModal";
import Button from "../ui/Button";
import { useDesserts } from "../contexts/DessertsContext";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="relative">
      <motion.h2
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 250 }}
        className="absolute left-6 top-6 z-10 mb-6 text-2xl font-bold text-red"
      >
        Your Cart ({totalInCart})
      </motion.h2>

      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          layout: { delay: 0 },
          delay: 0.75,
          type: "spring",
          stiffness: 250,
        }}
        className="mt-8 rounded-xl bg-white p-6 pt-[80px] lg:mt-0 lg:self-start"
      >
        <AnimatePresence mode="wait">
          {desserts.length === 0 && (
            <motion.div
              key="empty"
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 250, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="py-4 text-center"
            >
              <ReactSVG
                className="mb-4 flex justify-center"
                src="images/illustration-empty-cart.svg"
              />
              <p className="text-sm font-semibold text-rose_500">
                Your added items will appear here
              </p>
            </motion.div>
          )}

          {desserts.length > 0 && (
            <motion.div
              key="cart"
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 250, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
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
                  This is a{" "}
                  <span className="font-semibold">carbon-neutral</span> delivery
                </p>
              </div>

              <Button onClick={() => setCartIsOpen(true)}>Confirm Order</Button>

              <AnimatePresence>
                {cartIsOpen && <OrderModal setCartIsOpen={setCartIsOpen} />}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
