import { IMAGE_PATH } from "../constant/contant";

export default function Media(props) {
  // https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
  const media = props.data;
  // console.log(`media  - ${JSON.stringify(media)}`);
  return (
    <li
      style={{
        width: 250,
      }}
    >
      <img
        alt={`${media.id}`}
        style={{ borderRadius: 10 }}
        src={`${IMAGE_PATH}/w200${media.poster_path}`}
      />
      {/* <span>{media.original_title}</span> */}
    </li>
  );
}
