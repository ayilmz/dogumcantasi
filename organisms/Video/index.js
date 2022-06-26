import {homepage} from "../../enums";
import {StyledVideoContainer, StyledVideoTitle, StyledVideoTitleContainer, StyledYoutubePlay} from "./style";
import Image from "next/image";

const Products = ({videos}) => {
    return (
        <StyledVideoContainer className="col-12 col-md-5">
            <StyledVideoTitleContainer>
                <StyledVideoTitle>
                    {homepage.VIDEO_TITLE}
                </StyledVideoTitle>
                <StyledYoutubePlay>
                    <Image src="/image/youtube-icon.svg" width={30} height={20} alt="Youtube Play" />
                    <span>Ferzan Ebe</span>
                </StyledYoutubePlay>
            </StyledVideoTitleContainer>

            <ul className="d-flex justify-content-between d-none">
                {videos?.map((video, index) => (
                    <li key={index}>
                        <p>{video.title}</p>
                    </li>
                ))}
            </ul>
        </StyledVideoContainer>
    )
};

export default Products;