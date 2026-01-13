import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

export default function Activities() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 fw-bold">Our Activities & Programs</h1>

      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Education (Offline + Online)</Accordion.Header>
          <Accordion.Body>
            • Daily classes for classes I-XII<br />
            • Maths, Science, English, Social Science, Hindi<br />
            • Free Online Assistance across India<br />
            • Virtual PTMs & doubt sessions
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Nutrition & Clothing Support</Accordion.Header>
          <Accordion.Body>
            • Regular nutritious meals<br />
            • Festival sweets & special gifts<br />
            • Clothing distribution drives<br />
            • Winter wear campaigns
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Holistic Development & Life Skills</Accordion.Header>
          <Accordion.Body>
            • Yoga & mindfulness sessions<br />
            • Gender equality & life skills workshops<br />
            • Competitions, art & craft<br />
            • Career guidance & confidence building
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Events Gallery - you can make it carousel later */}
      <h3 className="mb-4">Recent Events & Celebrations</h3>
      <Row className="g-4">
        {[
          { title: "Diwali Celebration 2025", desc: "200+ children, cultural performances" },
          { title: "78th Independence Day", desc: "Flag hoisting + special guests" },
          { title: "International Yoga Day", desc: "Mass yoga session with kids" },
          { title: "Pride Month Awareness", desc: "Inclusive workshop for children" }
        ].map((event, i) => (
          <Col md={6} lg={3} key={i}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text className="text-muted">{event.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}