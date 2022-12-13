import React, { useState } from 'react';
import Display from './Display';

  
function Form() {
  const initialFormData = Object.freeze({
        name: "",
        comments: ""
      });
  const [formData, updateFormData] = React.useState(initialFormData);
  const [Data, updateData] = React.useState([]);

    
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    let username=formData.name;
    let usercomments=formData.comments;
    updateData([...Data,{username,usercomments}])
    console.log(Data);
    // ... submit to API or something
  };
 
  
  return (
         <div className='cont'>
        <div className='box1'>
    <div className='boxin1'>
        <h3> Share your Experience </h3>
    <form onSubmit={handleSubmit}>
      <label>Name</label><br/>
      <input type="text" name="name" onChange={handleChange} /><br/>
      <label>Comments</label><br/>
      <textarea name="comments" onChange={handleChange} /><br/>
      <button type="submit"> Post </button>
      </form>
      </div>
      </div>
      <div className='box2'>
      <Display dataList={Data} />
     </div>
    </div>
  );
}
  
export default Form;
