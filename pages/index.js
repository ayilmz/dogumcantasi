import Image from "next/image";
import Link from 'next/link'
import { useForm } from "react-hook-form";

export default function RequestForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <Link href="/" className="d-inline-flex">
                    <Image src="/image/dogum-cantasi-logo-white.svg" width={298} height={61} alt="Doğum Çantası" />
                </Link>
            </div>
            <div className="col-6">
                <p>40 Hafta’ya kadar yanınızda olacak</p>
                <p>Hamilelik Kitapçığı</p>
                <ul>
                    <li>
                        <p>Anne Adı Soyadı</p>
                        <input type="text" placeholder="" {...register("Anne Adı Soyadı", {required: true, maxLength: 80})} />
                    </li>
                    <li>
                        <p>Gebelik Durumu</p>
                        <div>
                            <input type="text" placeholder="" {...register("Gebelik Durumu", {required: true, maxLength: 80})} />
                            <select {...register("Anne Bedeni", { required: true })}>
                                <option value="S">Aylık</option>
                                <option value="M">Haftalık</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <p>En Fazla Destek Almak İstediğiniz Konu</p>
                        <div>
                            <input type="text" placeholder="" {...register("Gebelik Durumu", {required: true, maxLength: 80})} />
                            <select {...register("Anne Bedeni", { required: true })}>
                                <option value="S">Hastana Çıkışı</option>
                                <option value="M">Haftalık</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <p>Telefon</p>
                        <input type="text" placeholder="" {...register("Anne Adı Soyadı", {required: true, maxLength: 80})} />
                    </li>
                    <li>
                        <p>E-Posta Adresi</p>
                        <input type="text" placeholder="" {...register("Anne Adı Soyadı", {required: true, maxLength: 80})} />
                    </li>
                    <li>
                        <p>Adres</p>
                        <input type="text" placeholder="" {...register("Anne Adı Soyadı", {required: true, maxLength: 80})} />
                    </li>
                </ul>
                <ul>
                    <li className="d-flex">
                        <input {...register("Kisisel Verilerim", {required: true})} type="checkbox" value="Yes"
                               id="kisisel"/>
                        <label htmlFor="kisisel">
                            Kişisel verilerimin <Link href="#">kullanım koşullarında</Link> belirtilen amaçlar için
                            işlenmesine onay veriyorum.
                        </label>
                    </li>
                    <li>
                        <input type="submit" value="Devam Et"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
