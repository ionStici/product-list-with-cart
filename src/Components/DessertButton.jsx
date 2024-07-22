import { useState } from "react";
import { useDesserts } from "../contexts/DessertsContext";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { ReactSVG } from "react-svg";
import { motion, AnimatePresence } from "framer-motion";

export default function DessertButton({ name, cart }) {
  const { increment, decrement } = useDesserts();
  const [plus, setPlus] = useState(cart > 0 ? true : null);

  const handleIncrement = () => {
    setPlus(true);
    increment(name);
  };
  const handleDecrement = () => {
    setPlus(false);
    decrement(name);
  };

  return (
    <>
      {cart === 0 && (
        <motion.button
          whileFocus={{
            scale: [1, 1.1, 1],
            transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
          }}
          initial={{ scale: 0.9, y: -10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleIncrement}
          className="flex size-full items-center justify-center space-x-2 rounded-full border border-rose_400 bg-white text-sm font-semibold text-rose_900 transition-colors duration-300 hover:text-red focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red/75 focus:ring-offset-2"
        >
          <ReactSVG
            src="images/icon-add-to-cart.svg"
            beforeInjection={(svg) => svg.setAttribute("aria-label", "Cart")}
          />
          <span>Add to Cart</span>
        </motion.button>
      )}

      {cart > 0 && (
        <motion.div
          initial={{ scale: 0.9, y: -10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex size-full items-center justify-between rounded-full bg-red font-semibold text-white"
        >
          <motion.button
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
            onClick={handleDecrement}
            aria-label="Remove from Cart"
            className="group flex h-full items-center justify-center rounded-full px-3 focus:outline-none"
          >
            <LuMinusCircle className="h-5 w-5 transition-colors duration-300 group-hover:fill-white group-hover:stroke-red group-focus:fill-white group-focus:stroke-red" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.p
              key={cart}
              initial={{ opacity: 0, y: plus ? 25 : -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: plus ? -25 : 25 }}
              transition={{ duration: 0.15 }}
            >
              {cart}
            </motion.p>
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
            onClick={handleIncrement}
            aria-label="Add to Cart"
            className="group flex h-full items-center justify-center rounded-full px-3 focus:outline-none"
          >
            <LuPlusCircle className="h-5 w-5 transition-colors duration-300 group-hover:fill-white group-hover:stroke-red group-focus:fill-white group-focus:stroke-red" />
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
