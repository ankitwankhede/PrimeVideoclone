import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, API_KEY, IMAGE_PATH } from "../constant/contant";

export default function MediaDetail() {
  const [media, setMedia] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API}/movie/${id}?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => setMedia(res));
  }, []);
  return (
    <>
      <img
        alt={media.original_title}
        src={`${IMAGE_PATH}/w1280${media.backdrop_path}`}
      />
      <h1>{media.original_title}</h1>
      <p>{media.overview}</p>

      {/* <span>{JSON.stringify(media)}</span> */}
    </>
  );
}
