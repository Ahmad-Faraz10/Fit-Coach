import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const Homeslide = () => {
  return (
    <section className="bg_color">
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        className="bg-danger"
      >
        <SwiperSlide>
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 sider_text_bg ">
              <div className="sider_container ">
                <h1 className="text-title">
                  Herbal Life fit coach
                  <span className="text-subtitle">
                    {" "}
                    Lose Weight Gain Energy and Feel Great
                  </span>
                </h1>
                <p className="display-17 display-sm-11 display-md-9 display-lg-8 subtext display-xl-4 mb-10  ">
                  Lorem ipsum imgabout1 imgabout1
                </p>
                <Link to="/" className="learnMore_btn     me-2 my-1 my-sm-0  ">
                  <span> Explore More</span>
                </Link>

                <Link
                  to="/About"
                  className=" learnMore_btn    ml-3 my-1 my-sm-0  "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  sider_img_container"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row text_container">
            <div className="col-lg-6 col-md-12 col-sm-12  sider_img_container"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 sider_text_bg ">
              <div className="sider_container ">
                <h1 className="text-title">
                  Herbal Life fit coach
                  <span className="text-subtitle">
                    {" "}
                    Lose Weight Gain Energy and Feel Great
                  </span>
                </h1>
                <p className="display-17 display-sm-11 display-md-9 display-lg-8 subtext display-xl-4 mb-10  ">
                  Lorem ipsum imgabout1 imgabout1
                </p>
                <Link to="/" className="learnMore_btn     me-2 my-1 my-sm-0  ">
                  <span> Explore More</span>
                </Link>

                <Link
                  to="/About"
                  className=" learnMore_btn    ml-3 my-1 my-sm-0  "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row text_container">
            <div className="col-lg-6 col-md-12 col-sm-12 sider_text_bg ">
              <div className="sider_container ">
                <h1 className="text-title">
                  Herbal Life fit coach
                  <span className="text-subtitle">
                    {" "}
                    Lose Weight Gain Energy and Feel Great
                  </span>
                </h1>
                <p className="display-17 display-sm-11 display-md-9 display-lg-8 subtext display-xl-4 mb-10  ">
                  Lorem ipsum imgabout1 imgabout1
                </p>
                <Link to="/" className="learnMore_btn     me-2 my-1 my-sm-0  ">
                  <span> Explore More</span>
                </Link>

                <Link
                  to="/About"
                  className=" learnMore_btn    ml-3 my-1 my-sm-0  "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  sider_cleanser_container"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Homeslide;
