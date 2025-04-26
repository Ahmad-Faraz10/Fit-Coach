import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Autoplay } from "swiper/modules";
const Pillar = () => {
    const slide_img = [
        "/img/cleanser.jpg",
        "/img/lucknow.jpg",
        "/img/cleanser.jpg",
        "/img/lucknow.jpg", 
        "/img/cleanser.jpg",
        "/img/lucknow.jpg",
      ];
  return(
  <div>
    <div className="pt-1 ">
          <div className="container ">
            <div className="row mt-n1-9 mt-5 mb-5">
              <div className="col-lg-12 col-md-12 mt-1-9 ">
                <div className="top_title mb-3">
                  <h2 data-aos="fade-up" data-aos-duration="500" className="text-title benefit">
                    <span>Pillars of Health</span>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p
                      className="lead"
                      data-aos="fade-up"
                      data-aos-duration="600"
                    >
                      We Work On
                    </p>
                    <hr />
                  </div>
                </div>
                <br />
                <Swiper
                  // slidesPerView={4}
                  loop={true}
                  grabCursor={true}
                  spaceBetween={30}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    600: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },

                    992: {
                      slidesPerView: 2,
                    },

                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper p-4"
                >
                  {slide_img.map((image, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <img src={image} className="img" alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
  </div>
  );
};
export default Pillar;
