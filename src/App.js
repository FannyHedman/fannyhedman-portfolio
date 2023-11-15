import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';

import HomePage from '../src/pages/homePage';

const dropDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`;

const Container = styled.div`
  animation: ${dropDownAnimation} 3s linear;
`;

function App() {
  return (
    <div className="App">
      <Container></Container>
      <HomePage/>
    </div>
  );
}

export default App;
