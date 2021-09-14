import Link from 'next/link'
import Navbar from '../component/Navbar';
import { Footer } from '../component/Footer';
export default function Error() {
  return <>
  <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar/>
      <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 HeaderImage" style={{height: 20+'vh'}}>
            <p style={{height: '25%'}}></p>
	        <h3 className="animated fadeInUp display-4 text-secondary text-white"></h3>
            
	       </div>
     </section>
  <div className="page-wrap d-flex flex-row align-items-center" style={{marginTop:30+'px'}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">Blogs</span>
                <div className="mb-4 lead">Coming Soon...</div>
                <Link href="/">
       <a  className="btn btn-link">Back to Home</a>
                </Link>
            </div>
        </div>
    </div>
</div>
<section className="homesec " id="Whoweare">
		<div className="container-fluid py-lg-5">
			</div></section>
     
      <Footer/>
</div>
    
  </>
}