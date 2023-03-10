// SlackContact.js
import React, { useState } from 'react';

import { Container, TextInput, TextArea, Button } from "nes-react";

/** helpers */
import fetchSlack from '../../utils/fetchSlack';

export const SlackContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const webhookURL = '<YOUR WEBHOOK URL>';
  const myData = {
    "text": `Name: ${name} \n${email} \n${message}`
  }

  const handleClick = () => {
    fetchSlack(webhookURL, myData)
      .then(response => console.log(response))
      .then(data=>{
        return data;
      })
      .catch(err => {
        console.error('There was an ERROR!!!',err)
      });
  }


  return (
    <Container title="Contact My Slackbot" className='slack-contact'>
          <TextInput
            label="Name"
            placeholder="Input Name"
            value={name}
            onChange={e => {setName(e.target.value)}}
          />
          <TextInput
            label="Email"
            placeholder="Input Email"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
          />
          <TextArea
            label="Message"
            placeholder="Start Writing"
            value={message}
            onChange={e => {setMessage(e.target.value)}}
          />
          <Button onClick={handleClick} success>SEND IT!</Button>
    </Container>
  );
};

export default SlackContact
;