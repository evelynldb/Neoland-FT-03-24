/* eslint-disable react/prop-types */
import { Figure } from "../components";
import "./Characters.css";

export const Characters = ({ data }) => {
  return (
    <div id="characterPage">
      {data.map(
        (item) =>
          item.status === "Alive" && (
            <Figure
              src={item.image}
              name={item.name}
              status={item.status}
              origin={item.origin.name}
              key={item.id}
            />
          )
      )}
    </div>
  );
};
