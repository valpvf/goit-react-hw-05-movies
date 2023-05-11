import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB"
              width={154} height={20}
      />
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'movies'}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
