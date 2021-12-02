import React from "react";
import { useSettings } from "../context/useSettings";
import { Button, Checkbox, Form } from 'semantic-ui-react'

export const MakeArrestForm = ({ gameKey, onArrest }) => {
  const { settings } = useSettings();

  return (
    <div>
      <h2>Maak een arrestatie</h2>
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
