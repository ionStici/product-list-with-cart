import { useDesserts } from "../contexts/DessertsContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ReactSVG } from "react-svg";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";

export default function Dessert({ dessert }) {
  const { image, name, category, price, cart } = dessert;
  const { increment, decrement } = useDesserts();

  const match768 = useMediaQuery("min-width", "768px");
  const match1100 = useMediaQuery("min-width", "1100px");

  let src = image.mobile;
  if (match768) src = image.tablet;
  if (match1100) src = image.desktop;

  return (
    <div className="mb-6 md:mb-0">
      <div className="relative mb-[38px] max-h-60">
        <img src={src} alt={name} className="max-h-60 w-full rounded-lg" />

        <div className="absolute bottom-[-22px] left-[50%] h-[44px] w-[160px] translate-x-[-50%]">
          {cart === 0 && (
            <button
              onClick={() => increment(name)}
              className="flex size-full items-center justify-center space-x-2 rounded-full border border-rose_400 bg-white text-sm font-semibold text-rose_900 transition-colors hover:text-red"
            >
              <ReactSVG src="images/icon-add-to-cart.svg" />
              <span>Add to Cart</span>
            </button>
          )}

          {cart > 0 && (
            <div className="text-md flex size-full items-center justify-between rounded-full bg-red font-semibold text-white">
              <button
                onClick={() => decrement(name)}
                aria-label="Remove from Cart"
                className="group flex h-full items-center justify-center px-[12px]"
              >
                <LuMinusCircle className="h-[20px] w-[20px] transition-colors group-hover:fill-white group-hover:stroke-red" />
              </button>
              <p>{cart}</p>
              <button
                onClick={() => increment(name)}
                aria-label="Add to Cart"
                className="group flex h-full items-center justify-center px-[12px]"
              >
                <LuPlusCircle className="h-[20px] w-[20px] transition-colors group-hover:fill-white group-hover:stroke-red" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="mb-1 text-sm font-normal text-rose_500">{category}</p>
        <p className="mb-1 font-semibold text-rose_900">{name}</p>
        <p className="font-semibold text-red">${price}</p>
      </div>
    </div>
  );
}
