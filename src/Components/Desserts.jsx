import { useDesserts } from "../contexts/DessertsContext";
import DessertBox from "./DessertBox";

export default function Desserts() {
  const { desserts } = useDesserts();

  return (
    <div>
      <h1 className="mb-[32px] text-4xl font-bold text-rose_900">Desserts</h1>
      <div className="md:grid md:grid-cols-3 md:gap-x-[24px] md:gap-y-[32px]">
        {desserts.map((dessert, i) => (
          <DessertBox key={i} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}
