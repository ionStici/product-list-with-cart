import Dessert from "./Components/Dessert";
import Cart from "./Components/Cart";
import { useDesserts } from "./contexts/DessertsContext";

export default function App() {
  const { desserts } = useDesserts();

  return (
    <main className="mx-auto max-w-[500px] p-6 md:max-w-[880px] md:p-10">
      <h1 className="mb-8 text-4xl font-bold text-rose_900">Desserts</h1>

      <div className="md:grid md:grid-cols-3 md:gap-x-[24px] md:gap-y-[32px]">
        {desserts.map((dessert, i) => (
          <Dessert key={i} dessert={dessert} />
        ))}
      </div>

      <Cart />
    </main>
  );
}
