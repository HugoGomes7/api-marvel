import styled from 'styled-components';

export const Container = styled.header`
  background: #ec1d24;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }

  .logo {
    margin-left: 10px;
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
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 10px;
 
  a {
    background: transparent;
    width: 80px;
  }




`