// src/App.jsx - SIMPLE TEST VERSION
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dnbOE6h8jRRQJ.jpg"
    },
    {
      id: 2,
      title: "Kung Fu Panda 4",
      image: "https://image.tmdb.org/t/p/w500/kDp1v12n2FJtv5AcfOdJJuGBAkL.jpg",
    },
    {
      id: 3,
      title: "Ghostbusters: Frozen Empire",
      image: "https://image.tmdb.org/t/p/w500/5i6DfZp7z2jJ0r5LevvYc4jZgB.jpg",
    }
  ];

  return (
    <>
      <NavigationBar />
      <Container className="my-5">
        <h1 className="text-center mb-4">Now Showing</h1>
        <Row>
          {movies.map(movie => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;