import React from "react";
import { useParams } from "react-router-dom";
import ListaPosts  from "../Components/ListaPosts";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategoria;
