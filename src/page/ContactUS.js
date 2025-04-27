import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Card, CardBody, IconButton, Image, Stack } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 mt-1-9 map_contactus ">
        <iframe
          title="map of"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2226410314897!2d80.95751301151734!3d26.89642836069185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957c35c236c7b%3A0x5e75822f874482fd!2sFitCoach%20Abdulhaq%20%22Herba%20Nutrition%20Center%22%20%7C%20Nutrition%20Club%20%7C%20Fitness%20Centre%20%7C%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1740664124537!5m2!1sen!2sin"
          //  style="border:0;"
          height={400}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="col-lg-12 col-md-12 col-sm-12"
        ></iframe>
      </div>
      <div className="row contact_container ">
        <section className="pt-0">
          <div className="container ">
            <div className="row align-items-center ">
              <div className="col-lg-12 mt-3 mb-5  " data--delay="200ms">
                <div className="pe-lg-5">
                  <div className="top_title  text-center mb-3">
                    <h2 data-aos="fade-up">
                      <span>Visit Us</span>
                    </h2>
                  </div>
                  <div
                    className="lead text-center mcontact_us"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <p>
                      {" "}
                      Visit our Website or simply send us an email anytime you
                      want. If you have any questions, please feel free to
                      contact us.
                    </p>
                  </div>
                </div>
              </div>

              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  data-aos="fade-up"
                  data-aos-duration="500"
                  objectFit="cover"
                  maxW={{ base: "70%", sm: "200px", lg: "400px" }}
                  src="/img/lucknow.jpg"
                  alt="..."
                  // height="140px"
                  // width="140px"
                />

                <Stack className="container _BGlayer">
                  <CardBody>
                    <h4
                      className="text-title"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      Fit Coach Lucknow Office
                    </h4>

                    <p
                      className="mb-0 text-dark opacity8 small"
                      data-aos="fade-up"
                      data-aos-duration="600"
                    >
                      3/64, Lohiya Nagar Rd Sector 3, Vikas Nagar, Lucknow Uttar
                      Pradesh 226022
                    </p>
                    <IconButton
                      variant="inline"
                      colorScheme="#056894"
                      aria-label="Send email"
                      fontSize="20px"
                      icon={<EmailIcon color="#276331" />}
                      data-aos="fade-up"
                      data-aos-duration="500"
                    />
                    <a
                      data-aos="fade-up"
                      data-aos-duration="500"
                      href="mailto:abdul080991@gmai.com"
                      className="mb-0 text-dark opacity8 small topindex"
                    >
                      abdul080991@gmai.com
                    </a>
                    <br />
                    <IconButton
                      variant="inline"
                      colorScheme="#056894"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<PhoneIcon color="#276331" />}
                      data-aos="fade-up"
                      data-aos-duration="500"
                    />
                    <a
                      href="tel:+91-8423288288"
                      className="mb-0 text-dark opacity8 small topindex"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      +91-8423288288
                    </a>
                  </CardBody>
                </Stack>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactUs;
