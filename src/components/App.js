import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';

function App() {
  const bodyStyle = {
    backgroundColor: 'black',
    color: 'limegreen',
    textAlign: 'center',
    minHeight: '300vh'
  }

  return (
    <Container fluid style={bodyStyle}>
      <Header />
      <KegControl />
      <Footer />
    </Container>
  )
}

export default App;
