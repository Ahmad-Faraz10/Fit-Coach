import { TypeAnimation } from "react-type-animation";
import { StarIcon } from "@chakra-ui/icons";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <div className="pe-2 mt-5">
              <div className="mx-auto">
                <h2 className="text-title benefit">Inspiring beter lives</h2>
              </div>
              <br />
              <p className="lead" data-aos="fade-up" data-aos-duration="600">
                <StarIcon style={{ color: "#276331" }} /> We are a global health
                and wellness community born to support you in living your best
                life. For over 40 years and in more than 90 countries, we’ve
                empowered millions of people to make real changes to their lives
                with our science-backed products, the support of a coach – what
                we call a Herbalife Independent Associate – and the opportunity
                to build a business. And we’re just getting started.
              </p>
              <p className="lead" data-aos="fade-up" data-aos-duration="600">
                <StarIcon style={{ color: "#276331" }} /> &nbsp;To us, the best
                lives are balanced lives. Through our Herbalife Independent
                Associates, who foster community, personal growth and business
                opportunities to help you thrive, we offer a wide range of
                products designed to help you meet your nutritional needs and
                reach your goals. You bring the will to get started, and we’ll
                help you every step of the way.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 mt-5 mb-5">
            <img
              src="/img/shake1.webp"
              // height="300px"
              // width="300px"
              className="benefit"
              alt="..."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="pe-2 mt-5">
              <div className="mx-auto">
                <h2 className="text-title benefit">Our personal approach</h2>
              </div>
              <br />
              <p className="lead" data-aos="fade-up" data-aos-duration="600">
                <StarIcon style={{ color: "#276331" }} /> Our science-backed
                nutrition products are offered exclusively through our network
                of Herbalife Independent Associates. As global ambassadors of
                our brand, these dedicated entrepreneurs support their customers
                through a passion for well-being and nutrition and by sharing
                their own wellness journeys
              </p>
              <p className="lead" data-aos="fade-up" data-aos-duration="600">
                <StarIcon style={{ color: "#276331" }} /> &nbsp; Herbalife’s
                team of experts supports our Herbalife Independent Associates
                with programmes, product guidance and other informational
                materials to help their customers. Herbalife Independent
                Associates also have a supportive community of fellow Associates
                to help them reach their customers.​
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="background_about ">
        <div className="container ">
          <div className="mx-auto">
            <h2 className="text-title benefit mb-5">2023 at a Glance</h2>
          </div>
          <div className=" row">
            <div className="card _BGlayer col-lg-3 col-md-6 col-sm-6">
              <h1 className="text-title">​​$8.6B​ ​</h1>
              <p className="about_text3">
                Suggested retail with $5.1 billion net sales worldwide
              </p>
            </div>
            <div className="card  col-lg-3 col-md-6 col-sm-6">
              <h1 className="text-title">​​2M+​ ​</h1>
              <p className="about_text3">
                ​​Distributors across 90+ countries​
              </p>
            </div>
            <div className="card  col-lg-3 col-md-6 col-sm-6">
              <h1 className="text-title">​​300+​ ​</h1>
              <p className="about_text3">
                ​​Staff scientists and Ph.D.s in 19 active labs worldwide​
              </p>
            </div>
            <div className="card back_card col-lg-3 col-md-6 col-sm-6">
              <h1 className="text-title   ">​​4.6M+ ​</h1>
              <p className="about_text3">
                Formula 1 shakes consumed daily worldwide​
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
