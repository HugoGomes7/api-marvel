import styled from 'styled-components';

interface ThumbnailDTO {
  thumbnail: {
    path: string;
    extension: string;
  }
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow:2px 2px 10px 1px rgba(0,0,0,0.3);

  img {
  width: 100%;
  max-height: auto;
  }

`;

export const ButtonMore = styled.div`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow:2px 2px 10px 1px rgba(0,0,0,0.3);
  margin: 20px 100px;
  padding: 0 50px;
  border-radius: 5px;
  transition: background 0.3s;


  &:hover{
    background: #ec1d24;
  }
`;
