import React from 'react';


let countries=['Poland', 'Turkey', 'Spain', 'Italy', 'Czech Republic', 'Mexico', 'Colombia', 'Brazil', 'Argentina', 'and Chile']

const Footer = () =>{
    return (
   <div className="piedspage">
    <hr className="ligne"/>
    <p> We are leaders in 10 countries:
        {countries.map(el => (
            <a className="footer-a" href="#">{el}<span style={{color: 'grey'}}>, </span></a>
        ))
    }
    </p>   
    <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser. </p>
    <p>www.docplanner.com © 2019</p>
   </div>
       ) }
export default Footer;

