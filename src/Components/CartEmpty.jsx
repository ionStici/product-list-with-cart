import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

export default function CartEmpty() {
  return (
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
  );
}
