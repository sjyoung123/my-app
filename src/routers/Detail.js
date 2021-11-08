import styles from "./Detail.module.css";
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
    <div className={styles.detail__container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.detail__container}>
          <img
            src={movieDetail.large_cover_image}
            alt={movieDetail.title_long}
          />
          <div className={styles.container__explain}>
            <h1>{movieDetail.title_long}</h1>
            <div>
              <span className={styles.container__description}>
                {movieDetail.description_full}
              </span>
            </div>
            <div className={styles.rating__div}>
              <span>Rating: {movieDetail.rating}/10</span>
            </div>
            <div className={styles.runtime__div}>
              <span>Run-time: {movieDetail.runtime}min.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
