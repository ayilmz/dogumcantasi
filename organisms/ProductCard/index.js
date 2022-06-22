import Image from "next/image";

const ProductCard = ({product}) => {
    return (
        <li>
            <Image src={product.image} width={106} height={106} alt={product.title} />
            <p>{product.title}</p>
        </li>
    )
}

export default ProductCard;