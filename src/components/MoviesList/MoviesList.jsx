import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ forRender, endpoint }) => {
    const location = useLocation();
    
  return (
    <ul>
      {forRender &&
        forRender
          .filter(el => {
            if (!el.title) {
              return (el.title = el.name);
            } else {
              return el.title;
            }
          })
          .map(el => (
            <li key={el.id}>
              <Link to={`${endpoint}${el.id}`} state={location}>
                {el.title}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default MoviesList;
