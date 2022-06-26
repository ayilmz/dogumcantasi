import {homepage} from "../../enums";
import {
    StyledVideoContainer, StyledVideoItem,
    StyledVideos,
    StyledVideoTitle,
    StyledVideoTitleContainer,
    StyledYoutubePlay
} from "./style";
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

            <StyledVideos>
                {videos?.map((video, index) => (
                    <li key={index}>
                        <StyledVideoItem>
                            <Image src="/image/video-play.svg" width={48} height={48} alt="Youtube Play" />
                        </StyledVideoItem>
                        <p>{video.title}</p>
                    </li>
                ))}
            </StyledVideos>
        </StyledVideoContainer>
    )
};

export default Products;