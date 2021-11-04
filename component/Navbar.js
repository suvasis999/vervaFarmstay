import React, { useState, Fragment,useEffect  } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {fetchApiProduct} from '../config/AppService';
import {localhost} from '../config/localhost';

import { NextPage, GetStaticProps } from 'next';
  const Navbar= (props) =>{
    const [menu, updateMenu] = React.useState([]); 
 
    React.useEffect(function effectFunction() {
        async function fetchMenu() {
            const url = `${localhost}api/web_page/allPage`;
            
            const res = await fetch(url, {
            method: 'GET',
           
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0",
                
            }
            }).then(resp => resp.json())
            .then(Response => {
               // console.log(Response);
                if(Response.status==true){
                    updateMenu(Response.data.web_page); 
                }
                else{
                    console.log("data not found");
                }
                
            })
            }
           
            fetchMenu();
    }, []);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(true);
        }
    };
    if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarColor);
    }
    return (
        
        <>
        <Script  src="js/jquery.min.js"></Script>
<Script src="js/bootstrap.bundle.min.js"></Script>
<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>

<Script src='https://kit.fontawesome.com/a076d05399.js'></Script>

<nav  className={colorChange ? 'navbar colorChange navbar-expand-lg fixed-top  pe-sm-5 ps-sm-5 ' : 'navbar navbar-expand-lg fixed-top  pe-sm-5 ps-sm-5 '} >

<img id="logo" className={colorChange ?'logoSmall':'logoBig'} src="/images/LogoSample.png" />
<Link href="/">
<a className="navbar-brand" href="#">VERVE FARMSTAY</a>
</Link>
<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
    </button>
  <div className="collapse navbar-collapse  flex-grow-1 justify-content-end" id="navbar">
      <ul className="navbar-nav ml-auto pe-sm-5">
          {menu.map((item,index) =>
          
            <li key={index.toString()} className="nav-item dropdown">
            {item.menu.length>1?
             <Link href="/">
                <a  className="nav-link" href="#"  data-toggle={item.menu.length>1? "dropdown":""}>
                {item.pageName}
                </a>
              </Link>:
              <Link href={"/pages/" + item.pageSlug}>
                <a  className="nav-link"   data-toggle={item.menu.length>1? "dropdown":""}>
                {item.pageName}
                </a>
              </Link>
               
             }
              {item.menu.length>1?
              <ul className="dropdown-menu " >
                {item.menu.map((itemSubmenu,indexSubmenu) =>
                 <li key={indexSubmenu.toString()}><Link href={"/page/" + itemSubmenu.menuSlog+"/"+itemSubmenu.menuId}>
                    <a className="dropdown-item" >{itemSubmenu.menuName}</a></Link></li>
                )}
                </ul>:''}
            </li>
          )}
         
         

          
      </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;