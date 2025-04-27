import { Container, Row, Col } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row no-gutters>
        <Col xs={12} sm={6} md={3}>
          <ul>
            <li className="heading">Fit Coach</li>
            <li>Herbal Life</li>
            <li>3/64, Lohiya Nagar Rd</li>
            <li>Sector 3, Vikas Nagar, Lucknow</li>
            <li>Uttar Pradesh 226022</li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a href="abdul080991@gmai.com">abdul080991@gmai.com</a>
            </li>
          </ul>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <ul>
            <li className="heading">Fit Coach</li>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/Product">Product</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
            <li>
              <a href="/About">About Us</a>
            </li>
          </ul>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <ul>
            <li className="heading">Socialize</li>
            <i class=" fa fa-facebook"></i>

            <i className=" fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-linkedin"></i>
          </ul>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <li className="heading">Search</li>
          {/* <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="fas fa-search" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup> */}
        </Col>
      </Row>

      <Row>
        <Col className="text-center text-muted bottom">©2025 Fit Coach</Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
