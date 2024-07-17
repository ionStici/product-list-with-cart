import DessertButton from "./DessertButton";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQueries } from "../contexts/MediaQueriesContext";

export default function DessertBox({ dessert, variants }) {
  const { image, name, category, price, cart } = dessert;
  const { match768, match1052 } = useMediaQueries();

  let src = image.mobile;
  if (match768) src = image.tablet;
  if (match1052) src = image.desktop;

  return (
    <motion.div
      variants={variants}
      transition={{ type: "spring", stiffness: 250 }}
      className="mb-6 md:mb-0"
    >
      <div className="relative mb-[38px] max-h-60">
        <img
          src={src}
          alt={name}
          width={250}
          height={240}
          className="max-h-60 w-full rounded-lg object-cover"
        />

        <AnimatePresence>
          {cart > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 size-full rounded-lg border-2 border-red"
            />
          )}
        </AnimatePresence>

        <div className="absolute bottom-[-22px] left-[50%] h-[44px] w-[160px] translate-x-[-50%]">
          <DessertButton name={name} cart={cart} />
        </div>
      </div>

      <div>
        <p className="mb-1 text-sm font-normal text-rose_500">{category}</p>
        <p className="mb-1 font-semibold text-rose_900">{name}</p>
        <p className="font-semibold text-red">${price}</p>
      </div>
    </motion.div>
  );
}
