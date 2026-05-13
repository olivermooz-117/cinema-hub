import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem', height: '100%' }} className="mb-4">
      <Card.Img 
        variant="top" 
        src={movie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster'} 
        alt={movie.title}
        style={{ height: '450px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.year} • {movie.rating} ⭐
        </Card.Text>
        <Card.Text className="text-muted">
          {movie.description?.substring(0, 100)}...
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;