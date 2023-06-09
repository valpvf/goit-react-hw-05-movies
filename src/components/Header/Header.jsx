import { ListStyled, NavLinkStyled, NavStyled } from './Header.styled';

const Header = () => {
  return (
    <NavStyled>
      <ListStyled>
        <li>
          <NavLinkStyled to={'/'}>Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to={'/movies'}>Movies</NavLinkStyled>
        </li>
      </ListStyled>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="TMDB"
        width={154}
        height={20}
      />
    </NavStyled>
  );
};

export default Header;
