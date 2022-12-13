import React, { useState } from 'react';
import Form from './Form';
// import jsonData from './data.json';
  
function Display({dataList}) {
    return(
        <>
        {
            dataList.map((item,ind) => {
              return(
                <>
                <tr key={ind}  style={{ color:'black',fontWeight:'bold'}}><td>{item.username}</td></tr>
                <tr key={ind}><td>{item.usercomments}</td></tr>
                </>
              )
            }
         )
          }
          </>
    )
        }
export default Display;
