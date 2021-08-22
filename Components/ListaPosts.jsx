import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

const ListaPosts = ({ url }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    busca(url, setPost);
  }, [url]);

  return (
    <section className="posts container">
      {post.map((post) => (
        <Link
          className={`cartao-post cartao-post--${post.categoria}`}
          key={post.id}
          to={`/posts/${post.id}`}
        >
          <article>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
export default ListaPosts;
