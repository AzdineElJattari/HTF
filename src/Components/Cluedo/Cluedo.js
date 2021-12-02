import { Switch, useHistory } from "react-router-dom";
import React, { useCallback, useState } from "react";
import CluedoActive from "./CluedoActive";
import GameOver from "./CluedoEnd";
import CluedoStart from "./CluedoStart";
import { useSettings } from "../context/useSettings";
import axios from "axios"

const Cluedo = () => {
  const { settings } = useSettings();
  const history = useHistory();
  const [gameKey, setKey] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const getGameKey = async () => {
    axios
    .get(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_URL_NEW , {
      auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
    .then((response) => {
      console.log(response)
      setKey(response);
    })
    .catch((error) => console.log(error));
};

  const handleEndGame = useCallback(() => {
    //setKey(null)
    history.goBack();
    setGameOver(!false);
    alert("Spel is stop gezet! Helaas hebt u geen moordenaar kunnen vinden!");
  }, []);

  return settings ? (
    <Switch>
      {!gameKey && <CluedoStart onStart={getGameKey} />}
      {gameOver && <GameOver outcome={gameOver} />}
      <CluedoActive
        gameKey={gameKey}
        onEndGame={handleEndGame}
        onArrest={setGameOver}
      />
    </Switch>
  ) : null;
};

export default Cluedo;
