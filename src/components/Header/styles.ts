import styled from 'styled-components';

export const Container = styled.header`
  background: #ec1d24;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
      height: 60px;
      margin-right: 5px;
      margin-left: 15px;
    }

  div {
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #000;
    background: #fefefe;
    height: 40px;
    margin: 15px;
    padding: 10px 10px;
    border-radius: 5px;
    font-weight: 700;
  }
`;

export const DevDiv = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  letter-spacing: .1rem;
  color: #f1f1f1; 
 
  a {
    background: transparent;
    width: 80px;
  }

  img {
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.3);
  }

`;