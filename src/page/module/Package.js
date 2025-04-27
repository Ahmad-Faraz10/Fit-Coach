import {
  Card,
  CardHeader,
  Button,
  CardBody,
  VStack,
  Image,
} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
const Package = () => {
  return (
    <>
      <div className="_bgImg mb-5  rounded-lg mt-5 mb-5">
        <div className="_BGlayer mt-5">
          <div className="container" style={{ marginTop: "" }}>
            <div class="row">
              <div className=" mx-auto ">
                <h2 className="text-title text-center mb-5">Package Offer</h2>
              </div>
            </div>
            <div class="row">
              {" "}
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div className="spcard">
                  <Card>
                    <CardHeader className="d-flex justify-content-center align-items-center">
                      <Image
                        src="../product/package2.jpg"
                        alt="..."
                        borderRadius="lg"
                        width="300px" // Sets width to 300px
                        height="300px"
                      />
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center align-items-center">
                      <VStack spacing={0} align="center">
                        <h3 className="text-title">20 day Package</h3>
                        <p className="package_text">
                          Herbal Life product including Life time consultation
                        </p>
                        <p className="text-title ">5555$</p>
                        <a
                          href="tel:+91-8423288288"
                          className="mb-0 text-dark opacity8 small topindex"
                          data-aos="fade-up"
                          data-aos-duration="500"
                        >
                          <Button
                            colorPalette="teal"
                            variant="outline"
                            className="buyhere"
                          >
                            Buy Here
                            <RiArrowRightLine />
                          </Button>
                        </a>
                      </VStack>
                    </CardBody>
                  </Card>
                </div>
              </div>{" "}
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div className="spcard">
                  <Card>
                    <CardHeader className="d-flex justify-content-center align-items-center">
                      <Image
                        src="../product/package1.jpg"
                        alt="..."
                        borderRadius="lg"
                        width="300px" // Sets width to 300px
                        height="300px"
                      />
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center align-items-center">
                      <VStack spacing={0} align="center">
                        <h3 className="text-title">30 day Package</h3>
                        <p className="package_text">
                          Herbal Life product including Life time consultation
                        </p>
                        <p className="text-title ">7799$</p>
                        <a
                          href="tel:+91-8423288288"
                          className="mb-0 text-dark opacity8 small topindex"
                          data-aos="fade-up"
                          data-aos-duration="500"
                        >
                          <Button
                            colorPalette="teal"
                            variant="outline"
                            className="buyhere"
                          >
                            Buy Here
                            <RiArrowRightLine />
                          </Button>
                        </a>
                      </VStack>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div className="spcard">
                  <Card>
                    <CardHeader className="d-flex justify-content-center align-items-center">
                      <Image
                        src="../img/cleanser.jpg"
                        alt="..."
                        borderRadius="lg"
                        width="300px" // Sets width to 300px
                        height="300px"
                      />
                    </CardHeader>
                    <CardBody className="d-flex justify-content-center align-items-center">
                      <VStack spacing={0} align="center">
                        <h3 className="text-title">40 day Package</h3>
                        <p className="package_text">
                          Herbal Life product for a whole day including Life
                          time consultation
                        </p>
                        <p className="text-title ">9999$</p>
                        <a
                          href="tel:+91-8423288288"
                          className="mb-0 text-dark opacity8 small topindex"
                          data-aos="fade-up"
                          data-aos-duration="500"
                        >
                          <Button
                            colorPalette="teal"
                            variant="outline"
                            className="buyhere"
                          >
                            Buy Here
                            <RiArrowRightLine />
                          </Button>
                        </a>
                      </VStack>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Package;
