import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Desserts />
      <Cart />
    </Layout>
  );
}
