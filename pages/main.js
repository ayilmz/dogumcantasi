import Header from "../organisms/Header";
import Products from "../organisms/Products";
import Video from "../organisms/Video";
import Form from "../organisms/Form";

export default function Home({bagTypes, highlights, videos, header}) {
  return (
      <div>
          <Header header={header} />
          <div className="container">
              <div className="row">
                  <Products bagTypes={bagTypes} highlights={highlights} />
                  <div  className="col-12 col-md-5">
                      <Video videos={videos} />
                      <Form />
                  </div>
              </div>
          </div>
      </div>

  )
}
export async function getServerSideProps(ctx) {
  const res = await fetch(`https://dogumcantasi.vercel.app/api/data.json`)
  const { bagTypes, highlights, videos, header } = await res.json()

  return {
    props: {
        header: header || null,
        bagTypes: bagTypes || null,
        highlights: highlights || null,
        videos: videos || null,
    }
  }
}
