import React from 'react';

const Section6 = (props)=>{
    return(props.data.map(el=> (
    <div className="bloc-country">
    <img className='image-country'src={el.image}></img>
    <div className='d'>
    <h4 className="name-country">{el.titre}</h4>
    <button className='button-country'>{el.button}</button>
    </div>


    </div>))
    )}


export default Section6;