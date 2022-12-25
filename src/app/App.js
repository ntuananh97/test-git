import "../assets/styles/reset.css";
import "../assets/styles/bootstrap-grid.min.css";
import "../assets/styles/base.css";
import "../assets/styles/global.scss";
import movieImage from "../assets/images/one piece.jpg";
import Footer from "./componentWeb/Footer";
import Header from "./componentWeb/Header";

function App() {
  console.log("test")
  return (
    <div>
      <Header />

      <div className="main">
        <div className="container">
          <div className="hot-movie">
            <h1 className="title-section">Phim hot</h1>

            <div className="hot-movie-content">
              {[...Array(5)].map((x, i) => (
                <a href="/" className="movie-box" key={i}>
                  <div className="movie-box__img">
                    <img src={movieImage} alt="movie" className="img-objc" />
                  </div>

                  <div className="movie-sub">Tập 11 vietsub</div>
                  <h2 className="movie-box-title">One Piece</h2>
                  <i className="icon-play"></i>
                </a>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="main-left col-12 col-lg-9">
              <div className="cate-movie">
                <div className="cate-movie__heading flex">
                  <h2 className="tab-movie active">Phim bộ mới cập nhật</h2>
                  <h2 className="tab-movie">
                    Phim lẻ mới cập nhật
                  </h2>
                  <h2 className="tab-movie">
                    Phim đã hoàn thành
                  </h2>
                </div>

                <div className="cate-movie__main">
                  <div className="row gx-5 row-grid">
                    {[...Array(5)].map((x, i) => (
                      <div className="col-12 col-lg-3 col-grid" key={i}>
                        <a href="/" className="movie-box movie-special" >
                          <div className="movie-box__img">
                            <img
                              src={movieImage}
                              alt="movie"
                              className="img-objc"
                            />
                          </div>

                          <div className="movie-sub">Tập 11 vietsub</div>
                          <h2 className="movie-box-title">
                            <a href="/">One Piece</a>
                          </h2>
                          <i className="icon-play"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cate-movie cate-movie__hot">
                <div className="cate-movie__heading flex">
                  <h2 className="tab-movie active">Được yêu thích</h2>
                </div>

                <div className="cate-movie__main">
                  <div className="row gx-5 row-grid">
                    {[...Array(5)].map((x, i) => (
                      <div className="col-12 col-lg-3 col-grid" key={i}>
                        <a href="/" className="movie-box movie-special" >
                          <div className="movie-box__img">
                            <img
                              src={movieImage}
                              alt="movie"
                              className="img-objc"
                            />
                          </div>

                          <div className="movie-sub">Tập 11 vietsub</div>
                          <h2 className="movie-box-title">
                            <a href="/">One Piece</a>
                          </h2>
                          <i className="icon-play"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right col-12 col-lg-3">
              <div className="incoming-movie">Phim sap chieu</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
