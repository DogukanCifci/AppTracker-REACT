import React from "react";
import { FaTrash } from "react-icons/fa";
const GorevleriGoster = ({ görevler, setGörevler }) => {
  return (
    <div className="container">
      {görevler.map((görev) => {
        const { text, day, id, bittiMi } = görev;
        return (
          <div key={id} className={bittiMi ? "trueStil" : "falseStil"}>
            <h3>
              {text} <FaTrash className="thrash" />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
