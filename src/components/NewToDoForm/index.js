import React, { Component } from 'react';

const NewToDoForm = ({onChange, draft, onSubmit}) => (
    <div>
      <input type='text' onChange={onChange} value={draft}></input>
      <button onClick={onSubmit}>Add</button>
    </div>
  )

export default NewToDoForm