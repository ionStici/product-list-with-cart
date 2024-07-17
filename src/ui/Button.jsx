import { motion } from "framer-motion";

export default function Button({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500 }}
      onClick={onClick}
      className="text-md h-[52px] w-full rounded-full bg-red font-semibold text-white"
    >
      {children}
    </motion.button>
  );
}
