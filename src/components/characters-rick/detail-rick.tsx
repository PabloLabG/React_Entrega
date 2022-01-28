import React, { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacter } from "../../api/rick/api-rick";
import { mapRickMortyCharacterToResultVM } from "./characters-rick.mappers";
import { CharacterRick } from "./characters-rick.vm";

export const DetailRickPage: React.FC = () => {
  const { id } = useParams();

  const [character, setCharacter] = React.useState<CharacterRick>();

  React.useEffect(() => {
    getCharacter(`${id}`).then((data) => {
      let detail: CharacterRick = null;

      if (data) {
        detail = mapRickMortyCharacterToResultVM(data);
      }

      setCharacter(detail);
    });
  }, []);

  const flexContainer: CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#bbdefb",
    height: "100%",
    padding: "15px",
    gap: "5px",
  };

  const flexFoto: CSSProperties = {
    flexGrow: "0",
    flexShrink: "1",
    flexBasis: "300px",
  };

  const flexContainerRow: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    height: "100vh",
    width: "100vw",
  };
  const flexContainerRowDiv: CSSProperties = {
    order: "0",
    flex: "0 1 auto",
    alignSelf: "auto",
    height: "auto",

    width: "100%",
  };

  return (
    <>
      <h2>Hello from Detail Rick page</h2>

      <div style={flexContainer}>
        <div style={flexFoto}>
          <img src={character?.image} />
        </div>
        <div style={flexContainerRow}>
          <div style={flexContainerRowDiv}>Name: {character?.name}</div>
          <div style={flexContainerRowDiv}>Species: {character?.species}</div>
          <div style={flexContainerRowDiv}>Status: {character?.status}</div>
          <div style={flexContainerRowDiv}>
            Created: {character?.created.toISOString()}
          </div>
          <Link to="/rickmorty">Back to list page</Link>
        </div>
      </div>
    </>
  );
};
