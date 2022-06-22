import { StyledButton, StyledTabs } from './style'
import ProductCard from "../ProductCard";
import Image from "next/image";
const Products = ({bagTypes, highlights}) => {
    return (
        <div className="col-12 col-md-6">
            <div className="container d-flex justify-content-between">
                <StyledTabs>
                    {bagTypes?.map((type, index) => (
                        <StyledButton popular={type.popular} key={index}>
                            <span>{type.name}</span>
                            <span>{type.price}</span>
                        </StyledButton>
                    ))}
                </StyledTabs>
            </div>
            <div className="container">
                {bagTypes?.map((type, index) => (
                    <ul key={index}>
                        {type.products?.map((product, index) => (
                            <ProductCard product={product}  key={index} />
                        ))}
                    </ul>
                ))}
                {highlights?.map((highlight, index) => (
                    <ul key={index}>
                        <li>
                            <p>{highlight.title}</p>
                            <p>{highlight.price}</p>
                            <Image src={highlight.image} width={84} height={84} alt="Doğum Çantası" />
                        </li>
                    </ul>
                ))}

            </div>
        </div>
    )
};

export default Products;