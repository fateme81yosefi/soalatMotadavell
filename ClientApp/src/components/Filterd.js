import React, { useContext } from "react";
import { FilterContext } from "../shared/ContextFilter";
import Question from "./home/question/Question";

export default function Filterd() {
  const [FilterId, setFilterId] = useContext(FilterContext);
  return (
    <div className="container">
      {FilterId.map((data, index) => (
        <Question question={data.Question} response={data.response} />
      ))}
    </div>
  );
}
