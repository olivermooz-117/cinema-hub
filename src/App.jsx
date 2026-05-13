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
    { id: 1, title: "Dune: Part Two", year: 2024, rating: 8.5, posterUrl: "https://via.placeholder.com/300x450" },
    { id: 2, title: "Kung Fu Panda 4", year: 2024, rating: 7.2, posterUrl: "https://via.placeholder.com/300x450" },
    { id: 3, title: "Ghostbusters: Frozen Empire", year: 2024, rating: 6.8, posterUrl: "https://via.placeholder.com/300x450" },
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