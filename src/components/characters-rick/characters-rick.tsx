import React from "react";
import { CharacterRick } from "./characters-rick.vm";
import { Link, generatePath } from "react-router-dom";

interface Props {
  characters: CharacterRick[];
}

export const RickTable: React.FC<Props> = (props) => {
  const { characters } = props;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          {characters?.map((character) => {
            return (
              <tr key={character.id}>
                <td>
                  <span>{character.id}</span>
                </td>
                <td>
                  <Link
                    to={generatePath("/rickmorty/character/:id", {
                      id: character.id.toString(),
                    })}
                  >
                    <img src={character.image} style={{ width: "5rem" }} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
