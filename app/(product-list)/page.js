import { get } from "@/lib/fetch";
import ProductList from "./components/ProductList";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const { results: products } = await getProducts();
  return (
    <div>
      <h1>홈페이지</h1>
      <ProductList products={products} />
    </div>
  );
}
