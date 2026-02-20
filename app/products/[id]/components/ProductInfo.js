export default function ProductInfo({ product }) {
  return (
    <div>
      <img src={product.imgUrl} alt={product.name} width={660} height={700} />
      <h1>{product.name} </h1>
      <p>
        {product.brand} / {product.productCode}
      </p>
      <p>
        {product.price} {product.salePrice}
      </p>
      <p>포인트 적립 {product.point}</p>
      <p>
        구매후기 {product.starRating} {product.starRatingCount}
      </p>
      <p>좋아요 {product.likeCount}</p>
    </div>
  );
}
