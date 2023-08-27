import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Home/feature.css'

function Feature() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Best Science Fiction Movies: Top 5 Films Most Recommended By Fans</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <a href='https://studyfinds.org/best-science-fiction-movies/' variant="dark">Click to read Article</a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Feature;

