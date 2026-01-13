import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white text-center py-5 py-md-5 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 end-0 bottom-0 opacity-25"
             style={{background: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat"}}></div>
        
        <Container className="position-relative">
          <h1 className="display-4 fw-bold mb-4">Changing Lives, One Child at a Time</h1>
          <p className="lead mb-4">Free Quality Education • Nutrition • Holistic Development</p>
          <p className="fs-5 mb-5">Impacting 1000+ children • 150,000+ lives touched • 1000+ volunteers</p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button as={Link} to="/activities" variant="light" size="lg" className="px-5">
              Explore Our Work
            </Button>
            <Button href="https://rzp.io/l/skcfdonate" target="_blank" variant="warning" size="lg" className="px-5">
              Donate Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Impact Cards */}
      <Container className="py-5">
        <Row className="g-4 text-center">
          <Col md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-5">
                <div className="display-4 text-primary fw-bold mb-3">1000+</div>
                <h5>Children Educated</h5>
                <p className="text-muted">Every single day</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-5">
                <div className="display-4 text-primary fw-bold mb-3">150K+</div>
                <h5>Lives Impacted</h5>
                <p className="text-muted">Across 10+ states</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="p-5">
                <div className="display-4 text-primary fw-bold mb-3">1000+</div>
                <h5>Volunteers</h5>
                <p className="text-muted">1.4 Million+ hours contributed</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Quick Links / Call to Action */}
      <div className="bg-light py-5 text-center">
        <Container>
          <h3 className="mb-4">Be the Change</h3>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <Button variant="outline-primary" size="lg">Volunteer With Us</Button>
            <Button variant="primary" size="lg">Sponsor a Child</Button>
            <Button variant="outline-success" size="lg">Corporate Partnership</Button>
          </div>
        </Container>
      </div>
    </>
  );
}