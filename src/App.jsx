import Cart from "./Components/Cart";
import Desserts from "./Components/Desserts";

export default function App() {
  return (
    <main className="mx-auto max-w-[500px] p-6 md:max-w-[880px] md:p-10">
      <h1 className="mb-8 text-4xl font-bold text-rose_900">Desserts</h1>

      <div>
        <Desserts />
        <Cart />
      </div>
    </main>
  );
}
