import React from "react";
import "./index.css";
// import logo from "../../assets/photos/dukkanLogo.png";
// import searchLogo from "../../assets/icons/searchIcon.svg";

const Header = () => {
  return (
    <div className="header-section">
      <div className="site-header ">
        <div className="container">
          <div className="header     flex items-center justify-between">
            {/* <img src={logo} alt="" className="w-20 h-20" /> */}
            <div className="header-title">
              <a href="#"> Dukkan Market</a>
            </div>

            <div className="flex items-center justify-center relative">
              <form className="form" action="">
                <input type="text" placeholder="Qidirish" className="input" />
                <button>Найти</button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </form>
            </div>
            <div className="flex items-center justify-between">
              <ul className="flex gap-7">
                <li>
                  <a href="">Biz haqimizda</a>
                </li>
                <li>
                  <a href="mailto:t.me/Dusmukhamedov">Aloqa</a>
                </li>
                <li>
                  <a href="">Narxlar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
