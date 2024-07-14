import { ReactSVG } from "react-svg";
import { useDesserts } from "../contexts/DessertsContext";

export default function CartItem({ dessert }) {
  const { removeDessertFromCart } = useDesserts();
  const { name, cart, price } = dessert;

  return (
    <div className="mb-[16px] flex items-center justify-between border-b border-rose_100 pb-[16px]">
      <div className="mr-[12px] font-semibold">
        <p className="mb-[8px]">{name}</p>
        <p className="flex gap-[8px] text-rose_500">
          <span className="inline-block w-[21px] text-red">{cart}x</span>
          <span className="font-normal">@${price}</span>
          <span>${cart * price}</span>
        </p>
      </div>

      <button
        aria-label="Remove from Cart"
        onClick={() => removeDessertFromCart(name)}
        className="group rounded-[50%] border border-rose_400 p-[3px] transition-colors hover:border-rose_900"
      >
        <ReactSVG
          className="text-rose_400 transition-colors group-hover:text-rose_900"
          src="images/icon-remove-item.svg"
        />
      </button>
    </div>
  );
}
