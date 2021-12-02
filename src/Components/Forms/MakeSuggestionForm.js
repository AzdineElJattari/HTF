import React from "react";
import { useSettings } from "../context/useSettings";
import { Button, Form } from 'semantic-ui-react'

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();

  return (
    <div>
      <h2>Maak een suggestie</h2>
      <Form>
    <Form.Field>
      <label>Kamer</label>
      <input placeholder='Room' />
    </Form.Field>
    <Form.Field>
      <label>Wapen</label>
      <input placeholder='Weapon' />
    </Form.Field>
    <Form.Field>
      <label>Verdachte</label>
      <input placeholder='Verdachte' />
    </Form.Field>

    <Button color="black" type='submit'>Arrestatie starten!</Button>
  </Form>
    </div>
  );
};
