import { useDesserts } from "../contexts/DessertsContext";
import DessertBox from "./DessertBox";

export default function Desserts() {
  const { desserts } = useDesserts();

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-rose_900">Desserts</h1>
      <div className="md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        {desserts.map((dessert, i) => (
          <DessertBox key={i} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}
