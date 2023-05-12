import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const params = useParams();
  return <p>MovieDetails - {params.moviesId}</p>;
};

export default MovieDetails;
