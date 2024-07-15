import { useDesserts } from "../contexts/DessertsContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ReactSVG } from "react-svg";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";

export default function DessertBox({ dessert }) {
  const { image, name, category, price, cart } = dessert;
  const { increment, decrement } = useDesserts();

  const match768 = useMediaQuery("min-width", "768px");
  const match1052 = useMediaQuery("min-width", "1052px");

  let src = image.mobile;
  if (match768) src = image.tablet;
  if (match1052) src = image.desktop;

  return (
    <div className="mb-6 md:mb-0">
      <div className="relative mb-[38px] max-h-60">
        <img
          src={src}
          alt={name}
          className="max-h-60 w-full rounded-lg object-cover"
        />

        {cart > 0 && (
          <div className="pointer-events-none absolute inset-0 size-full rounded-lg border-2 border-red" />
        )}

        <div className="absolute bottom-[-22px] left-[50%] h-[44px] w-[160px] translate-x-[-50%]">
          {cart === 0 && (
            <button
              onClick={() => increment(name)}
              className="flex size-full items-center justify-center space-x-2 rounded-full border border-rose_400 bg-white text-sm font-semibold text-rose_900 transition-colors duration-300 hover:text-red"
            >
              <ReactSVG src="images/icon-add-to-cart.svg" />
              <span>Add to Cart</span>
            </button>
          )}

          {cart > 0 && (
            <div className="flex size-full items-center justify-between rounded-full bg-red font-semibold text-white">
              <button
                onClick={() => decrement(name)}
                aria-label="Remove from Cart"
                className="group flex h-full items-center justify-center px-3"
              >
                <LuMinusCircle className="h-5 w-5 transition-colors duration-300 group-hover:fill-white group-hover:stroke-red" />
              </button>
              <p>{cart}</p>
              <button
                onClick={() => increment(name)}
                aria-label="Add to Cart"
                className="group flex h-full items-center justify-center px-3"
              >
                <LuPlusCircle className="h-5 w-5 transition-colors duration-300 group-hover:fill-white group-hover:stroke-red" />
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
