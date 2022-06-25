import Header from "../organisms/Header";
import Products from "../organisms/Products";
import Video from "../organisms/Video";
import {homepage} from "../enums";

export default function Home({bagTypes, highlights, videos, header}) {
  return (
      <div>
          <Header header={header} />
          <div className="container d-none">
              <div className="row">
                  <Products bagTypes={bagTypes} highlights={highlights} />
                  <div className="col-12 col-md-6">
                      {homepage.VIDEO_TITLE}
                      <Video videos={videos} />
                  </div>
              </div>
          </div>
      </div>

  )
}
export async function getServerSideProps(ctx) {
  const res = await fetch(`http://www.flashtr.com/dogum-cantasi/data.json`)
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
