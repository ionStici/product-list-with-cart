import { useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { ReactSVG } from "react-svg";

export default function Box({ dessert }) {
  const { image, name, category, price } = dessert;

  const [inCart, setInCart] = useState(0);

  const match768 = useMediaQuery("min-width", "768px");
  const match1100 = useMediaQuery("min-width", "1100px");

  let src = image.mobile;
  if (match768) src = image.tablet;
  if (match1100) src = image.desktop;

  return (
    <div className="mb-6">
      <div className="relative">
        <img src={src} alt={name} className="mb-[38px] w-full rounded-lg" />

        <div className="absolute bottom-[-22px] left-[50%] h-[44px] w-[160px] translate-x-[-50%]">
          <button className="border-rose_400 text-rose_900 hover:text-red flex size-full items-center justify-center space-x-2 rounded-full border bg-white text-sm font-semibold transition-colors">
            <ReactSVG src="images/icon-add-to-cart.svg" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div>
        <p className="text-rose_500 mb-1 text-sm font-normal">{category}</p>
        <p className="text-rose_900 mb-1 font-semibold">{name}</p>
        <p className="text-red font-semibold">${price}</p>
      </div>
    </div>
  );
}
