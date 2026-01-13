import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">SK Children Foundation</h5>
            <p className="small">
              Empowering underprivileged children through free education, nutrition & love since 2016
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6>Contact</h6>
            <address className="small">
              Babewala Park, B-1 Block,<br />
              Janakpuri, New Delhi - 110058<br />
              <i className="bi bi-telephone-fill me-2"></i>+91 99998 00689<br />
              <i className="bi bi-telephone-fill me-2"></i>+91 98712 85350
            </address>
          </Col>

          <Col md={4}>
            <h6>Follow Us</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="https://instagram.com/skchildrenfoundation" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com/@skchildrenfoundation" className="text-white">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 opacity-25" />

        <div className="text-center small">
          © {new Date().getFullYear()} SK Children Foundation • Made with ❤️ for children
        </div>
      </Container>
    </footer>
  );
}