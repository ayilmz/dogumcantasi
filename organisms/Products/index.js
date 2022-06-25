import { StyledButton, StyledTabs, StyledProductTabContainer, StyledPopularIcon } from './style'
import ProductCard from "../ProductCard";
import Image from "next/image";
const Products = ({bagTypes, highlights}) => {
    return (
        <div className="col-12 col-md-7">
            <div className="container d-flex justify-content-between">
                <StyledTabs>
                    {bagTypes?.map((type, index) => (
                        <StyledButton key={index} className={type.popular ? 'popular' : ''}>
                            {type.popular && (
                                <StyledPopularIcon>
                                    <Image src="/image/popular-icon.svg" width={75} height={23} alt="Popüler Ürün" />
                                </StyledPopularIcon>
                            )}

                            <p className="title">{type.name}</p>
                            <p className="price">{type.price}</p>
                        </StyledButton>
                    ))}
                </StyledTabs>
            </div>
            <StyledProductTabContainer className="container">
                {bagTypes?.map((type, index) => (
                    <ul key={index} className="p-0">
                        {type.products?.map((product, index) => (
                            <ProductCard product={product}  key={index} />
                        ))}
                    </ul>
                ))}
                {highlights?.map((highlight, index) => (
                    <ul key={index} className="d-none">
                        <li>
                            <p>{highlight.title}</p>
                            <p>{highlight.price}</p>
                            <Image src={highlight.image} width={84} height={84} alt="Doğum Çantası" />
                        </li>
                    </ul>
                ))}

            </StyledProductTabContainer>
        </div>
    )
};

export default Products;