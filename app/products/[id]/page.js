import Button from "@/component/Button";
import ProductInfo from "./components/ProductInfo";
import { get } from "@/lib/fetch";
import SizeReviewList from "./components/SizeReviewList";
import { getProduct, getSizeReviews } from "@/lib/data";

export default async function Product({ params }) {
  const { id } = await params;
  // const product = await getProduct(id);
  // const { results: sizeReviews } = await getSizeReviews(id);
  const [product, { results: sizeReviews }] = await Promise.all([getProduct(id), getSizeReviews(id)]);
  return (
    <div>
      <ProductInfo product={product} />
      {sizeReviews?.length > 0 && <SizeReviewList sizeReviews={sizeReviews} />}
    </div>
  );
}
