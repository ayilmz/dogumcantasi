import Image from "next/image";
import { StyledUl } from './style'
const Header = ({header}) => {
    return (
        <div className="container-fluid p-0">
            <div className="container d-flex justify-content-between">
                <Image src="/image/dogum-cantasi-logo.svg" width={233} height={48} alt="Doğum Çantası" />
                <StyledUl>
                    {header?.map((link, index) => (
                        <li key={index}>
                            <a href={link.link}>{link.text}</a>
                        </li>
                    ))}
                </StyledUl>
            </div>
        </div>
    )
};

export default Header;