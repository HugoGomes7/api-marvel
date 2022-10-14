import React from 'react';

import {
  FiHeart,
  FiUser,
  FiBookOpen,
  FiUsers,
  FiBookmark,
  FiFilm,
  FiBook,
  FiGithub,
} from 'react-icons/fi';

import MarvelLogo from '../../assets/logoAPI.png';
import { Container, DevDiv } from './styles';

const Header: React.FC = () => (

  <Container>

    <img className="logo" src={MarvelLogo} alt="logo" />

    <div>
      <a href="#">
        <FiUser />
        Characters
      </a>

      <a href="#">
        <FiBookOpen />
        Comics
      </a>

      <a href="#">
        <FiUsers />
        Creators
      </a>

      <a href="#">
        <FiBookmark />
        Events
      </a>

      <a href="#">
        <FiFilm />
        Series
      </a>

      <a href="#">
        <FiBook />
        Stories
      </a>
    </div>

    <DevDiv>
      <p>Development by
        <br />
        <strong>Hugo D'Lucca</strong>
      </p>
    </DevDiv>

  </Container >
);

export default Header;