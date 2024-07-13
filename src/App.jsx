import Box from "./Box";
import { data } from "./data";

export default function App() {
  return (
    <main className="p-6">
      <h1 className="text-rose_900 pb-8 text-4xl font-bold">Desserts</h1>

      {data.map((dessert, i) => {
        return <Box key={i} dessert={dessert} />;
      })}
    </main>
  );
}
