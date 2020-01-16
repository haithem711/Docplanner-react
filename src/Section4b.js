import React from 'react';
const Section4b = (props) => {
    return(props.serviceList.map(el => (<div className= {el.translate && "translation"}>
    <div className="service">
<img className='image-ser' src={el.image} />
<h3 className="titre-ser">{el.titre}</h3>
<p className='paragraphe-ser'> {el.paragraphe}</p>
</div>
    </div>))


    )}
export default Section4b;