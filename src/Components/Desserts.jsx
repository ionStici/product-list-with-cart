import { useDesserts } from "../contexts/DessertsContext";
import DessertBox from "./DessertBox";

export default function Desserts() {
  const { desserts } = useDesserts();

  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-[24px] md:gap-y-[32px]">
      {desserts.map((dessert, i) => (
        <DessertBox key={i} dessert={dessert} />
      ))}
    </div>
  );
}
