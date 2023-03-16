import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";
export default function App2() {
  let { id } = useParams();

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      axios.get(baseURL + id).then((response) => {
        console.log("postData", response.data);
        setPost(response.data);
      });
    }
  }, [id]);

  if (!post) return null;

  return <div>TEST</div>;
}
