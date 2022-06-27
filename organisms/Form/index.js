import {StyledFormContainer, StyledProgress} from "./style"

const Form = () => {
    return (
        <div className="row">
            <div className="col-12">
                <StyledFormContainer>
                    <StyledProgress>
                        <li>
                            <span>1</span>
                            Anne
                        </li>
                        <li>
                            <span>2</span>
                            Teslimat
                        </li>
                        <li>
                            <span>3</span>
                            Ödeme
                        </li>
                    </StyledProgress>
                </StyledFormContainer>
            </div>
        </div>
    )
}

export default Form;