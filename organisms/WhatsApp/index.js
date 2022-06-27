import Image from "next/image";
import {StyledWhatsApp} from './style'
const WhatsApp = () => {
    return (
        <StyledWhatsApp href="#">
            <Image src="/image/whatsapp.svg" width={163} height={52} alt="WhatsApp" />
        </StyledWhatsApp>
    )
}

export default WhatsApp;