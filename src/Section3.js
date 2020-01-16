import React from 'react';
const Section3 = (props) => {
    return (<li>
      <a  className="lien" href={props.data.link} >
      <svg  xmlns={props.data.source} width="180" height="20" viewBox="0 0 200 32">
          <path d={props.data.vector}/>
      </svg>
      </a>
      </li>
  
      )}



export default Section3;