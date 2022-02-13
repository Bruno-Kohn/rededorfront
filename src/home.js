import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [searchCep, setSearchCep] = useState('');
  const [infos, setInfos] = useState('');

  function searchCepRequest() {
    const req = axios.post('http://localhost:4000/search', { cep: searchCep });
    req.then((resp) => setInfos(resp.data));
    req.catch((error) => console.log(error));
  }

  return (
    <Container>
      <SearchBar
        type='number'
        placeholder='Input your CEP code here (ex: 12345000)'
        onChange={(e) => setSearchCep(e.target.value)}
      ></SearchBar>
      <CepButton onClick={() => searchCepRequest()}>Send</CepButton>
      <Card>
        {infos === '' ? (
          <h1>Enter a CEP code above for more information</h1>
        ) : infos.status === 200 ? (
          <>
            <h1>CEP code: {infos.code}</h1>
            <h1>State: {infos.state}</h1>
            <h1>City: {infos.city}</h1>
            <h1>District: {infos.district}</h1>
            <h1>Address: {infos.address}</h1>
          </>
        ) : (
          <h1>Please, type a valid CEP code</h1>
        )}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(1, 174, 165);
  background: linear-gradient(
    90deg,
    rgba(1, 174, 165, 0.5) 0%,
    rgba(247, 53, 19, 0.5) 50%,
    rgba(83, 45, 12, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const SearchBar = styled.input`
  width: 480px;
  height: 40px;
  border-radius: 8px;
  border: none;
  padding-left: 20px;
`;

const CepButton = styled.button`
  width: 500px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
`;

const Card = styled.div`
  width: 500px;
  min-height: 150px;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  background: RGBA(10, 192, 163, 0.36);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px;
    font-size: 18px;
  }
`;
