import React from 'react';
import styled from 'styled-components';import './App.css';
import Header from './components/Header'
import Layout from './components/LeftLayout';
import Dashboard from './components/Dashboard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
`;
const MainLayout = styled.div`
  display: flex;
  flex: 1;
`;
function App() {
  return (
    <Container>
      <MainLayout>
    <Header /><Layout />
<Dashboard/>
      </MainLayout>
    </Container>  );
}

export default App;
