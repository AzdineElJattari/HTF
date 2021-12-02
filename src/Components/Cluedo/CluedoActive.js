import React, { useState } from "react";
import Log from "./Log";
import Button from "../Button";
import { Mansion } from "./Mansion";
import Notebook from "../Notebook/Notebook";
import { MakeSuggestionForm } from "../Forms/MakeSuggestionForm";
import { MakeArrestForm } from "../Forms/MakeArrestForm";
import { useHistory } from "react-router-dom";


const CluedoActive = ({ gameKey, onEndGame, onArrest }) => {
  const [log, setLog] = useState([]);
  const [room, setRoom] = useState(null);
  const [isArrest, setIsArrest] = useState(false);
  const history = useHistory();

  const winGame = () => {
    history.goBack();
    alert("Game won!")
  }

  return (
    <div className="file full">
      {room && (
        <MakeSuggestionForm
          gameKey={gameKey}
          selectedRoom={room}
          onSuggestion={() => setRoom(null)}
        />
      )}
      {isArrest && <MakeArrestForm gameKey={gameKey} onArrest={onArrest} />}
      {!room && !isArrest && (
        <div>
          <h2>Welkom bij het Cluedo spel!</h2>
          <Mansion onSelectRoom={setRoom} />
          <div className="cluedo-btn-box">
            <Button value="Maak arrestatie" onClick={() => setIsArrest(true)} />
            <Button value="Spel Stoppen" onClick={onEndGame} />
            <Button value="Spel automatisch winnen" onClick={winGame} />
          </div>
        </div>
      )}
      <Log logEntries={log} />
      <Notebook />
    </div>
  );
};

export default CluedoActive;
