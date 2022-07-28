import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from 'next/link'
import {formElements} from "../../enums"
import {
    StyledContainer,
    StyledTitle,
    StyledSubTitle,
    StyledInputText,
    StyledInputTitle,
    StyledInputSelect,
    StyledInputSubmit,
    StyledErrorMessage
} from "./style";
import PromotionInformation from "../PromotionInformation";
import ThumbnailContainer from "../ThumbnailContainer";

const Form = ({isMobile}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div className="col-12 col-md-5 mt-5">
                <div className="row">
                    <div className="col-12">
                        <Link href="/" className="d-inline-flex">
                            <Image src="/image/dogum-cantasi-logo-white.svg" width={298} height={61} alt="Doğum Çantası" />
                        </Link>
                    </div>

                    <div className="col-12 mt-3">
                        <ThumbnailContainer isMobile={isMobile} />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-7">
                <StyledContainer>
                    <PromotionInformation />
                    <StyledTitle>40 Hafta’ya kadar yanınızda olacak</StyledTitle>
                    <StyledSubTitle>Hamilelik Kitapçığı</StyledSubTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ul>
                            <li>
                                <StyledInputTitle>{formElements.MOTHER_NAME_SURNAME.title}</StyledInputTitle>
                                {errors[formElements.MOTHER_NAME_SURNAME.name] && (
                                    <StyledErrorMessage>{errors.motherNameSurname?.message}</StyledErrorMessage>
                                )}
                                <StyledInputText {...register(formElements.MOTHER_NAME_SURNAME.name, {required: formElements.MOTHER_NAME_SURNAME.errorMessage, maxLength: 80})}/>
                            </li>


                            <li>
                                <div className="row d-flex align-items-end">
                                    <div className="col-12">
                                        <StyledInputTitle>{formElements.TOTAL_MONTH.title}</StyledInputTitle>
                                        {errors[formElements.TOTAL_MONTH.name] && (
                                            <StyledErrorMessage>{errors.totalMonth?.message}</StyledErrorMessage>
                                        )}
                                    </div>
                                    <div className="col-6">
                                        <StyledInputText {...register(formElements.TOTAL_MONTH.name, {required: formElements.TOTAL_MONTH.errorMessage, maxLength: 80})}/>
                                    </div>
                                    <div className="col-6">
                                        <StyledInputSelect type="select" {...register("Anne Bedeni", { required: true })}>
                                            <option value="S">Aylık</option>
                                            <option value="M">Haftalık</option>
                                        </StyledInputSelect>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <StyledInputTitle>En Fazla Destek Almak İstediğiniz Konu</StyledInputTitle>
                                <StyledInputSelect type="select" {...register("supportTopic", {required: "Email Address is required"})}>
                                    <option value="S">Hastana Çıkışı</option>
                                    <option value="M">Haftalık</option>
                                </StyledInputSelect>
                                {errors.supportTopic?.message}
                            </li>
                            <li>
                                <StyledInputTitle>Telefon</StyledInputTitle>
                                {errors.phone && (
                                    <StyledErrorMessage>{errors.phone?.message}</StyledErrorMessage>
                                )}
                                <StyledInputText {...register("phone", {required: "Telefon numaranızı giriniz ", maxLength: 80})}/>
                            </li>
                            <li>
                                <StyledInputTitle>E-Posta Adresi</StyledInputTitle>
                                {errors.mail && (
                                    <StyledErrorMessage>{errors.mail?.message}</StyledErrorMessage>
                                )}
                                <StyledInputText {...register("mail", {required: "E-mail adresinizi giriniz", maxLength: 80})}/>
                            </li>
                            <li>
                                <StyledInputTitle>Adres</StyledInputTitle>
                                {errors.address && (
                                    <StyledErrorMessage>{errors.address?.message}</StyledErrorMessage>
                                )}
                                <StyledInputText {...register("address", {required: "Adresinizi Giriniz", maxLength: 80})}/>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <StyledInputSubmit type="submit" value="Devam Et"/>
                            </li>
                        </ul>
                    </form>

                </StyledContainer>
            </div>    
        </div>
        


    )
}

export default Form;