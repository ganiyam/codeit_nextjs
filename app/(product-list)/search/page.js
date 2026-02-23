import { getProducts } from "@/lib/data";
import ProductList from "../components/ProductList";

export default async function Search({ searchParams }) {
  const { q } = await searchParams;
  const { results: products } = await getProducts(q);
  return (
    <div>
      <div>검색어 : {q}</div>
      <ProductList products={products} />
    </div>
  );
}
