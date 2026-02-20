import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{ marginBottom: "40px" }}>
          <Link href={`/products/${product.id}`}>
            <img src={product.imgUrl} alt={product.name} width={330} height={350} />
            <div>
              <h2>{product.name}</h2>
              <div>{product.price}</div>
              <div>{product.salePrice}</div>
              <div>{product.starRating}</div>
              <div>{product.starRatingCount}</div>
              <div>{product.likeCount}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
