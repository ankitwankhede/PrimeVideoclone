import { useEffect, useState } from "react";
import { API, API_KEY } from "../constant/contant";
import Media from "./Media";
import { useNavigate } from "react-router-dom";

export default function Genre(props) {
  // https://developer.themoviedb.org/reference/discover-movie
  const [medias, setMedias] = useState({});
  const navigate = useNavigate();
  const detail = props.detail;

  function showDetail(event) {
    // console.log(`event  - ${event.target.alt}`);
    navigate(`/media/${event.target.alt}`);
  }

  useEffect(() => {
    fetch(
      `${API}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${detail.id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setMedias(res));
  }, []);

  return (
    <div>
      <h4 style={{ display: "inline-block", marginRight: 10 }}>
        {detail.name}
      </h4>
      <button>See More &#8811;</button>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
          gap: 5,
          overflowY: "scroll",
        }}
        onClick={showDetail}
      >
        {Object.keys(medias).length > 0
          ? medias.results.map((media) => <Media data={media} />)
          : null}
      </ul>
    </div>
  );
}
