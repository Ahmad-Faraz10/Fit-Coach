import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import productdata from "./product.json";
const Product = () => {
  return (
    <div>
      <section className="mb-5">
        <div className="container ">
          <div className="col-md-12 mt-5  ">
            <SimpleGrid
              spacing={90}
              className="product_card"
              templateColumns="repeat(auto-fill, minmax(295px, 1fr))"
              //columns={{ base: 1, md: 2, lg: 3 }}
            >
              {productdata &&
                productdata.map((data, index) => (
                  <Card
                    data-aos="fade-up"
                    data-aos-duration="200"
                    borderTop="8px"
                    borderColor="#276331"
                    borderLeft="1px"
                    borderRight="1px"
                    className="card-transform"
                  >
                    <CardHeader className=" pt-4 d-flex justify-content-center align-items-center">
                      <Image
                        src={data.image}
                        alt="..."
                        borderRadius="lg"
                        maxWidth="295px"
                        maxHeight="205px"
                      />
                    </CardHeader>
                    <CardBody
                      style={{
                        border: "0",
                        borderTopLeftRadius: "10%",
                        borderTopRightRadius: "10%",
                        filter: "brightness(1.6)",
                      }}
                      className=""
                    >
                      <h5 size="md" className="mb-3 text-title">
                        {data.title}
                      </h5>
                      <p className="text_w">{data.weight}</p>
                      <p>
                        <span className="text-price">{data.price}</span>{" "}
                        {data.data1}
                      </p>

                      <CardFooter className="p-0  ">
                        <Link to={"/"} className="link text-center ">
                          View Details <ArrowForwardIcon />
                        </Link>
                      </CardFooter>
                    </CardBody>
                  </Card>
                ))}
            </SimpleGrid>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Product;
