import styled from 'styled-components';

interface ThumbnailDate {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.main`                                                                    
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const urlImg = (props: ThumbnailDate) => `${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.div`
  background: #f00;
  width: 300px;
  height: 450px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);

  h2, p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    width: 100%;
    height: 400px;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;

    transition: all 0.8s;
  }

  &:hover {
    div#img{
      height: 100px;
    }
  }

`;
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

export const ButtonMore = styled.div`
  background-color:  #f00;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 50px;

  &:hover {
    padding: 10px;
  }



`;