import { useDesserts } from "../contexts/DessertsContext";
import DessertBox from "./DessertBox";
import { motion } from "framer-motion";

export default function Desserts() {
  const { desserts } = useDesserts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.055 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: [1.05, 1] },
  };

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-rose_900">Desserts</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8"
      >
        {desserts.map((dessert, i) => (
          <DessertBox key={i} dessert={dessert} variants={itemVariants} />
        ))}
      </motion.div>
    </div>
  );
}
