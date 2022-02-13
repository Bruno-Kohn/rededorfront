import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <SearchBar
        type='text'
        placeholder='Input your CEP code here (ex: 12345000)'
        //onChange={(e) => setSearchCards(e.target.value)}
      ></SearchBar>
      <CepButton>Send</CepButton>
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
    rgba(247, 53, 119, 0.5) 50%,
    rgba(83, 45, 129, 0.5) 100%
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
