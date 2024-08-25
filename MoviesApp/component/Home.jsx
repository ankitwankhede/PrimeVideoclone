import { useEffect, useState } from "react";
import { API, API_KEY } from "../constant/contant";
import Genre from "./Genre";

export default function Home() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(`${API}/genre/movie/list?language=en`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGenres(res.genres);
        // console.log(` --  - ${JSON.stringify(res)}`);
      })
      .catch((err) => {
        console.log(`error`);
      });
  }, []);
  return (
    <div>
      {genres.map((genre) => (
        <Genre detail={genre} />
      ))}
    </div>
  );
}
