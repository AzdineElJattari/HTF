import React from "react";
import { CluesContext } from "../Main";
import { Icon, Menu, Table } from 'semantic-ui-react'

const Clues = () => {
  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <CluesContext.Consumer>
        {value =>
        <div className="parent-container">
          <div className="clue-weapon-container" style={{marginBottom: "5%"}}>
          <h3>Weapons</h3>
<Table celled>
<Table.Header>
<Table.Row>
<Table.HeaderCell>Titel</Table.HeaderCell>
<Table.HeaderCell>Kleur</Table.HeaderCell>
<Table.HeaderCell>Descriptie</Table.HeaderCell>
<Table.HeaderCell>Foto</Table.HeaderCell>

</Table.Row>
</Table.Header>

<Table.Body>
{value.map((clue) => {
if(clue.type === "weapon") {
return <Table.Row key={clue.id}>
<Table.Cell>{clue.title}</Table.Cell>
<Table.Cell>{clue.color}</Table.Cell>
<Table.Cell>{clue.description}</Table.Cell>
<Table.Cell>{clue.image}</Table.Cell>
</Table.Row>    
}
return true;
})}
</Table.Body>
</Table>
          </div>
          <div className="clue-room-container" style={{marginBottom: "5%"}}>
          <h3>Rooms</h3>
<Table celled>
<Table.Header>
<Table.Row>
<Table.HeaderCell>Titel</Table.HeaderCell>
<Table.HeaderCell>Kleur</Table.HeaderCell>
<Table.HeaderCell>Descriptie</Table.HeaderCell>
<Table.HeaderCell>Foto</Table.HeaderCell>

</Table.Row>
</Table.Header>

<Table.Body>
{value.map((clue) => {
if(clue.type === "room") {
return <Table.Row key={clue.id}>
<Table.Cell>{clue.title}</Table.Cell>
<Table.Cell>{clue.color}</Table.Cell>
<Table.Cell>{clue.description}</Table.Cell>
<Table.Cell>{clue.image}</Table.Cell>
</Table.Row>    
}
return true;
})}
</Table.Body>
</Table>
          </div>
          <div className="clue-suspect-container">
          <h3>Suspects</h3>
<Table celled>
<Table.Header>
<Table.Row>
<Table.HeaderCell>Titel</Table.HeaderCell>
<Table.HeaderCell>Kleur</Table.HeaderCell>
<Table.HeaderCell>Descriptie</Table.HeaderCell>
<Table.HeaderCell>Foto</Table.HeaderCell>

</Table.Row>
</Table.Header>

<Table.Body>
{value.map((clue) => {
if(clue.type === "suspect") {
return <Table.Row key={clue.id}>
<Table.Cell>{clue.title}</Table.Cell>
<Table.Cell>{clue.color}</Table.Cell>
<Table.Cell>{clue.description}</Table.Cell>
<Table.Cell>{clue.image}</Table.Cell>
</Table.Row>    
}
return true;
})}
</Table.Body>
</Table>
          </div>
        </div> 
}
      </CluesContext.Consumer>
    </div>
  );
};

export default Clues;
