import IndexForm from "../organisms/IndexForm";

import {getPageProps} from "../utils";

export default function RequestForm({isMobile}) {
  return (
    <div className="container">
        <IndexForm isMobile={isMobile}/>
    </div>
  )
}


export async function getServerSideProps(ctx) {
    const pageProps = getPageProps(ctx);

    console.log("pageProps", pageProps)
    return {
        props: {
            ...pageProps
        }
    }
}