import Image from "next/image";
import Link from 'next/link'
import IndexForm from "../organisms/IndexForm"

export default function RequestForm() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 mt-5">
                <Link href="/" className="d-inline-flex">
                    <Image src="/image/dogum-cantasi-logo-white.svg" width={298} height={61} alt="Doğum Çantası" />
                </Link>
            </div>
            <IndexForm />
        </div>
    </div>
  )
}
