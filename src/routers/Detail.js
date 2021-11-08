import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  console.log(movieDetail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movieDetail.title_long}</h1>
          <img
            src={movieDetail.large_cover_image}
            alt={movieDetail.title_long}
          />
          <div>
            <span>{movieDetail.description_full}</span>
          </div>
          <div>
            <span>Rating: {movieDetail.rating}</span>
          </div>
          <div>
            <span>Run-time: {movieDetail.runtime}min.</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
