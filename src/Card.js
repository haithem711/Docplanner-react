import React from 'react'


  
  const Card = (props) => {
    return(
      
        props.actorsList.map(el => (
      <div className={el.btn ? "card green-card" : "card blue-card"}>
        <p className='paragraphe1'> {el.paragraphe}</p>
          <h1 className="titre1">{el.titre}</h1>
          {el.btn && <select className='button-patients'>
          <option>CHOOSE COUNTRY</option>
            <option>Tunisia</option>
            <option>france</option>
            <option>Turkey</option>
          </select>}
          <img className='image' src={el.image} />
         
      </div>
        ))
      
    

    )
  }
  
  
export default Card;