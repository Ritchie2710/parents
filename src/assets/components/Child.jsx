import panda from "../download.jpeg";
import { useState } from "react";

export default function Child(props) {
  console.log(useState(0));

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>{props.name} is the child</p>
      <img src={panda} onClick={handleLikes} />
      <span>❤️ {likes}</span>
    </div>
  );
}
