const Aboutclub = () => {
  return (
    <>
      <div className=" about_container  ">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <p className="about_title">About Us</p>
            <h1 className=" about_title_h2 text-title benefit">
              Welcome to Fit Coach Abdul Haque
            </h1>
            <p className="about_text">
              We measure our impact by the empowerment of the people and
              communities we serve. From our employees and Herbalife Independent
              Associates to our suppliers and consumers, we are creating
              diverse, fair and equitable opportunities to help people reach
              their full potential and live their best lives.
            </p>
            <p className="about_text2">
              Our doctors, trainers, dietitians and advisory board members
              include more than 300 internationally recognized experts and key
              opinion leaders. With specializations in nutrition, fitness and
              public health, they guide research that drives product innovation.
              They educate and train our Herbalife Independent Associates who
              then guide and support their customers to achieve their goals and
              live their best lives.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img
              height={400}
              className="imgabout1"
              max-width={600}
              src="../product/about.webp"
              alt="slider1"
            />
          </div>
        </div>
      </div>

      <div className=" about_container aboutpadd ">
        <div className="row aboutpadd">
          <div className="col-lg-6 col-md-6 col-sm-12  imgabout_container ">
            <img
              className="imgabout"
              width={600}
              src="../nourish.webp"
              alt="slider1"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12   ">
            <h1 className="about_title_h2 text-title benefit">Our Experts</h1>

            <p className="about_text2">
              Our doctors, trainers, dietitians and advisory board members
              include more than 300 internationally recognized experts and key
              opinion leaders. With specializations in nutrition, fitness and
              public health, they guide research that drives product innovation.
              They educate and train our Herbalife Independent Associates who
              then guide and support their customers to achieve their goals and
              live their best lives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutclub;
