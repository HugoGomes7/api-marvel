import React from 'react';

import { Link } from 'react-router-dom';

import {
  FiHeart,
  FiUser,
  FiBookOpen,
  FiUsers,
  FiBookmark,
  FiFilm,
  FiBook,
} from 'react-icons/fi';

import MarvelLogo from '../../assets/logoAPI.png';
import { Container, DevDiv } from './styles';

const Header: React.FC = () => (

  <Container>
    <img className="logo" src={MarvelLogo} alt="logo" />

    <div>
      <Link to="/characters">
        <FiUser />
        Characters
      </Link>

      <Link to="/comics">
        <FiBookOpen />
        Comics
      </Link>

      <Link to="/creators">
        <FiUsers />
        Creators
      </Link>

      <Link to="/events">
        <FiBookmark />
        Events
      </Link>

      <Link to="/series">
        <FiFilm />
        Series
      </Link>

      <Link to="/stories">
        <FiBook />
        Stories
      </Link>

    </div>

    <DevDiv>
      <p>Development by
        <br />
        <strong>Hugo D'Lucca</strong>
      </p>
      {/* insert github */}
    </DevDiv>

  </Container >
);

export default Header;