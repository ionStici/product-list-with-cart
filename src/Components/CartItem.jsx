import { ReactSVG } from "react-svg";
import { useDesserts } from "../contexts/DessertsContext";
import { motion } from "framer-motion";

export default function CartItem({ dessert }) {
  const { removeDessertFromCart } = useDesserts();
  const { name, cart, price } = dessert;

  return (
    <motion.div
      layout
      className="mb-4 flex items-center justify-between border-b border-rose_100 pb-4"
    >
      <div className="mr-3 font-semibold">
        <p className="mb-2">{name}</p>
        <p className="flex gap-2 text-rose_500">
          <span className="inline-block w-[21px] text-red">{cart}x</span>
          <span className="font-normal">@${price}</span>
          <span>${cart * price}</span>
        </p>
      </div>

      <button
        aria-label="Remove from Cart"
        onClick={() => removeDessertFromCart(name)}
        className="group rounded-[50%] border border-rose_400 p-[3px] transition-colors duration-300 hover:border-rose_900 focus:outline-none focus:ring-2 focus:ring-red/75 focus:ring-offset-[3px]"
      >
        <ReactSVG
          className="text-rose_400 transition-colors duration-300 group-hover:text-rose_900"
          src="images/icon-remove-item.svg"
        />
      </button>
    </motion.div>
  );
}
