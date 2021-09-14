
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Script from 'next/script'
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
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

        {/*<nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <a href="#" className="navbar-brand">DemoTech</a>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>*/}

<nav  className={colorChange ? 'navbar colorChange navbar-expand-lg fixed-top  pe-sm-5 ps-sm-5 ' : 'navbar navbar-expand-lg fixed-top  pe-sm-5 ps-sm-5 '} >

<img id="logo" className={colorChange ?'logoSmall':'logoBig'} src="images/LogoSample.png" />
<Link href="/">
<a className="navbar-brand" >VERVE FARMSTAY</a>
</Link>
<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
    </button>
  <div className="collapse navbar-collapse  flex-grow-1 justify-content-end" id="navbar">
      <ul className="navbar-nav ml-auto pe-sm-5">
          
          <li className="nav-item dropdown">
          <Link href="/">

              <a  className="nav-link" href="#"  data-toggle="dropdown">Home</a>
              </Link>
              <ul className="dropdown-menu">
                  <li><Link href="/">
<a className="dropdown-item" >Home</a></Link></li>
                  <li><Link href="/Belief">
<a className="dropdown-item" >Our Belief & Vision</a></Link></li>
                  <li><Link href="/Mission"><a className="dropdown-item">Our Mission</a>
                  </Link></li>
                  <li>
                  <Link href="/Background">
                  <a className="dropdown-item" >Our Background</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/Team">
                  <a className="dropdown-item" >Our Team</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/Project">
                  <a className="dropdown-item" href="index.php#Whatwedo">Our Project</a>
                  </Link>
                  </li>
                  
              </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href="/">
              <a  className="nav-link"  data-toggle="dropdown">WHAT WE DO</a>
              </Link>
              <ul className="dropdown-menu">
                  <li>
                  <Link href="/Seedlings">
                  <a className="dropdown-item" >Seedlings </a></Link></li>
                  
                  <li>
                  <Link href="/Greenhouse ">
                  <a className="dropdown-item" >Greenhouse </a>
                  </Link>
                  </li>
                  {/*<li id="subdropdown" className="dropdown">
                  <Link href="/Projects">
                      <a className="dropdown-item"  data-toggle="dropdown">Projects</a>
                      </Link>
                      <ul className="dropdown-menu">
                          <li>
                          <Link href="/Greenhouse">
                          <a className="dropdown-item" href="features.php#Greenhouse">Greenhouse</a>
                          </Link>
                          </li>
                          <li>
                          <Link href="/Farmstay">
                          <a className="dropdown-item" >Farmstay</a>
                          </Link>
                          </li>
                          
                      </ul>
                  </li>*/}
                  
                  
              </ul>
          </li>

          <li className="nav-item dropdown">
          <Link href="/blog">
              <a className="nav-link">BLOGS</a>
              </Link>
              
          </li>
          <li className="nav-item dropdown">
          <Link href="/news">
              <a className="nav-link">NEWS</a>
              </Link>
              
          </li>
          <li className="nav-item dropdown">
          <Link href="/Faq">
              <a className="nav-link">FAQs</a>
              </Link>
              
          </li>

          <li className="nav-item dropdown">
          <Link href="/contactus">
              <a className="nav-link" >Contact Us</a>
              </Link>
          </li>
      </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;
