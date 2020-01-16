import React from 'react';
import Menu from './Menu.js';
let items= [ { 
    text:'About us',
    link:'#',
    active:true 
    } ,
    {
      text:'Career',
     link:'#',
     active:false
     } ,
    { 
    text:'Departments',
    link:'#',
    active:false ,
    submenu:['Marketing & PR','Customer uccess & sales','IT,Product,Design & UX','Finance & Administration','HR & more']
    } 
    ]

const Navbar = () => {return <div className="navbar">
<img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
  alt="Docplanner Group" width="268px"></img>
<ul className="App">
  {
    items.map(el => <Menu data={el} />)
  }
</ul>
</div>}


export default Navbar;