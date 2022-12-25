import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  // Test update các thứ
  return (
    <div className="header">
      <div className="container">
        <div className="header-main flex-b-c">
          <div className="left flex-a-c">
            <a href="/" className="header-logo">
              <img src={logo} alt="logo" />
            </a>
            <div className="header-search">
              <form>
                <div className="input-search">
                  <input
                    type="text"
                    placeholder="V.d: tên phim, tên diễn viên..."
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </form>

              <p>Công cụ tìm kiếm phim.</p>
            </div>
          </div>

          <div className="right">
            <a href="/">
              <i class="fa-solid fa-right-to-bracket"></i>
              Login
            </a>
            <a href="/">
              <i class="fa-solid fa-users"></i>
              Sign up
            </a>
            <a href="/">
              <i class="fa-regular fa-bookmark"></i>
              Bookmark
            </a>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <div className="container">
          <ul className="header-list flex-a-c">
            <li className="header-item">
              <a href="/" className="header-link">Trang chu</a>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">The loai</a>

              <ul className="header-list-child span-1">
                {[...Array(15)].map((x, i) => (
                  <li key={i} className="header-list-child-item">
                    <a href="/">Cổ trang - Thần thoại</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">Quốc gia</a>

              <ul className="header-list-child span-2">
                {[...Array(11)].map((x, i) => (
                  <li key={i} className="header-list-child-item">
                    <a href="/">Việt Nam</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="header-item">
              <a href="/" className="header-link">Phim mới</a>

              <ul className="header-list-child span-3">
                {[...Array(7)].map((x, i) => (
                  <li key={i} className="header-list-child-item">
                    <a href="/">2020</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="header-item" >
              <a href="/" className="header-link">Phim bo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
