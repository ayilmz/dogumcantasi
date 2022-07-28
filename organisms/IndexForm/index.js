import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from 'next/link'
import {InputText, InputSelect, InputCheckbox, InputSubmit} from "../../ui/form-elements";
import {StyledContainer, StyledTitle, StyledSubTitle} from "./style";
import PromotionInformation from "../PromotionInformation";
import ThumbnailContainer from "../ThumbnailContainer";

const Form = ({isMobile}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
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
                                <InputText placeHolder="" name="Anne Adı Soyadı" register={{...register("Anne Adı Soyadı", {required: true, maxLength: 80})}} />
                            </li>
                            <li>
                                <div className="row d-flex align-items-end">
                                    <div className="col-6">
                                        <InputText placeholder="" name="Gebelik Durumu" {...register("Gebelik Durumu", {required: true, maxLength: 80})} />
                                    </div>
                                    <div className="col-6">
                                        <InputSelect register={{...register("Anne Bedeni", { required: true })}}>
                                            <option value="S">Aylık</option>
                                            <option value="M">Haftalık</option>
                                        </InputSelect>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <InputSelect name="En Fazla Destek Almak İstediğiniz Konu" register={{...register("Anne Bedeni", { required: true })}}>
                                    <option value="S">Hastana Çıkışı</option>
                                    <option value="M">Haftalık</option>
                                </InputSelect>
                            </li>
                            <li>
                                <InputText placeHolder="" name="Telefon" register={{...register("Telefon", {required: true, maxLength: 80})}} />
                            </li>
                            <li>
                                <InputText placeHolder="" name="E-Posta Adresi" register={{...register("E-Posta Adresi", {required: true, maxLength: 80})}} />
                            </li>
                            <li>
                                <InputText placeHolder="" name="Adres" register={{...register("Adres", {required: true, maxLength: 80})}} />
                            </li>
                        </ul>
                        <ul>
                            <li className="d-flex">
                                <InputCheckbox register={{...register("Kisisel Verilerim", {required: true})}}  value="Yes" id="kisisel">
                                    Kişisel verilerimin <Link href="#">kullanım koşullarında</Link> belirtilen amaçlar için
                                    işlenmesine onay veriyorum.
                                </InputCheckbox>
                            </li>
                            <li>
                                <InputSubmit type="submit" value="Devam Et"/>
                            </li>
                        </ul>
                    </form>

                </StyledContainer>
            </div>    
        </div>
        


    )
}

export default Form;