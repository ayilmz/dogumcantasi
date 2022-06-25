import Image from "next/image";
import {StyledHamburgerMenu, StyledHeaderContainer, StyledUl} from './style'
const Header = ({header}) => {
    return (
        <StyledHeaderContainer className="container-fluid">
            <div className="container d-flex justify-content-between align-content-center">
                <a href="/" className="d-inline-flex">
                    <Image src="/image/dogum-cantasi-logo.svg" width={233} height={48} alt="Doğum Çantası" />
                </a>
                <StyledUl>
                    {header?.map((link, index) => (
                        <li key={index}>
                            <a href={link.link}>{link.text}</a>
                        </li>
                    ))}
                    <StyledHamburgerMenu>
                        <Image src="/icon/hamburger-menu.svg" width={34} height={19} alt="Doğum Çantası" />
                        <span>Menü</span>
                    </StyledHamburgerMenu>
                </StyledUl>
            </div>
        </StyledHeaderContainer>
    )
};

export default Header;