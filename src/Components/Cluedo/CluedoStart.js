import React from "react";
import {useSettings} from "../context/useSettings";
import Button from "../Button";
import { Grid, GridColumn, Image } from 'semantic-ui-react'

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();

  const startGame = () => {
    onStart();
  };

  return (
    <div className={"file full"}>
      <h2>Welkom bij het Cluedo spel!</h2>
      <div style={{ display: "flex", justifyContent: "end", width: "25%", marginLeft: "30%", marginTop: "5%" }}>
      <Image src='https://cdn.pixabay.com/photo/2020/01/23/09/22/detective-4787272_1280.png' fluid rounded />
      </div>
      <Button style={{marginTop: "5%"}} onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
