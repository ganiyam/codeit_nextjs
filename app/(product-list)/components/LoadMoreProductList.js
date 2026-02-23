"use client";

import { useState } from "react";
import ProductList from "./ProductList";

export default function LoadMoreProductList({
  initialProducts = [],
  initialNext = null,
}) {
  const [products, setProducts] = useState(initialProducts);
  const [next, setNext] = useState(initialNext);

  const handleLoadMore = () => {};

  return (
    <div>
      <ProductList products={products} />
      {next && (
        <button style={{ marginTop: "20px" }} onClick={handleLoadMore}>
          상품 더 보기
        </button>
      )}
    </div>
  );
}
