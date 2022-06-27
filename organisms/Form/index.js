import { useForm } from "react-hook-form";
import WhatsApp from "../WhatsApp";
import {StyledForm, StyledFormContainer, StyledProgress} from "./style"

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
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
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <ul className="form-elements">
                            <li>
                                <p>Anne Adı Soyadı</p>
                                <input type="text" placeholder="" {...register("Anne Adı Soyadı", {required: true, maxLength: 80})} />
                            </li>
                            <li>
                                <p>Anne Bedeni</p>
                                <select {...register("Anne Bedeni", { required: true })}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </li>
                            <li>
                                <p>Terlik Numarası</p>
                                <select {...register("Terlik Numarası", { required: true })}>
                                    <option value="32">32</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                </select>
                            </li>
                            <li>
                                <p>Renk Seçimi</p>
                                <select {...register("Renk Seçimi", { required: true })}>
                                    <option value="Pudra Pembe">Pudra Pembe</option>
                                    <option value="Mor">Mor</option>
                                    <option value="Lila">Lila</option>
                                    <option value="Kırmızı">Kırmızı</option>
                                </select>
                            </li>
                        </ul>
                        <ul className="form-submit">
                            <li className="d-flex">
                                <input {...register("Kisisel Verilerim", { required: true })} type="checkbox" value="Yes" id="kisisel" />
                                <label for="kisisel">
                                    Kişisel verilerimin <a href="#">kullanım koşullarında</a> belirtilen amaçlar için işlenmesine onay veriyorum.
                                </label>
                            </li>
                            <li>
                                <input type="submit" value="Devam Et"/>
                            </li>
                        </ul>
                    </StyledForm>
                    <WhatsApp />
                </StyledFormContainer>
            </div>
        </div>
    )
}

export default Form;