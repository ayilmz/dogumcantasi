import Image from "next/image";
import { StyledProduct } from "./style"

const ProductCard = ({product}) => {
    return (
        <StyledProduct>
            <Image src={product.image} width={106} height={106} alt={product.title} />
            <p>{product.title}</p>
        </StyledProduct>
    )
}

export default ProductCard;