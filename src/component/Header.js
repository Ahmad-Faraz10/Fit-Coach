import React from "react";

const Header = () => {
  return (
    <>
      <div className="header_sticky">
        <div className=" row ">
          <div className="col-lg-3 col-sm-12 col-md-12">
            {" "}
            <img
              height={50}
              width={150}
              src="../img/hl.webp"
              alt="Logo"
              className="header-logo"
            />
          </div>
          <div className="col-lg-9 col-sm-12 col-md-12 header-titles">
            <div className="header-div">
              <a href="/">Home</a>
            </div>
            <div className="header-div">
              <a href="/Product">Product</a>
            </div>
            <div className="header-div">
              <a href="/Contact">Contact Us</a>
            </div>
            <div className="header-div">
              <a href="/About">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
