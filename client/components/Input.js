import React, { useState } from 'react';

const Input = props => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.target.value);
  }

  const sendMessage = e => {
    e.preventDefault();
    props.sendMessage(message);
    setMessage('');
  }

  return (
    <form
      className='type'
      onSubmit={sendMessage}
    >
      <input
        type='text'
        name='guess'
        value={message}
        placeholder="message"
        onChange={handleChange}
      />
      <button
        type='submit'
      >
        Send
      </button>
    </form>
  )
}

export default Input;