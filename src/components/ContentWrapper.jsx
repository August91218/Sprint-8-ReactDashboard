import Topbar from "./Topbar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import LastMovie from "./LastMovie";
function ContentWrapper(props) {
  // const idParam = props.match.params.id
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}

      <div id="content">

        {/* Topbar */}
        <Topbar />
        {/* End of Topbar */}
        {/* Content Row Top */}
        <ContentRowTop />
        {/*End Content Row Top*/}

        <div className="row">
          <LastMovie/>
        </div>
      </div>
      {/* End of MainContent */}
      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </div>
  )

}

export default ContentWrapper;