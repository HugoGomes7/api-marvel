/* eslint-disable jsx-a11y/anchor-is-valid */
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

import MarvelLogo from '../../assets/Marvel_Logo.png';

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
      <a href="https://github.com/HugoGomes7">
        <img src="https://avatars.githubusercontent.com/u/65207104?v=4" alt="Hugo D'Lucca" />
      </a>
    </DevDiv>

  </Container >
);

export default Header;