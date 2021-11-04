import React from 'react'

function Banner(props) {
    return (
        <>
        <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 HeaderImage">
            <p style={{height: '25%'}}></p>
	        <p className="animated fadeInDown delay-4s carousel-header">{props.title}</p> 
	        <p className="animated fadeIn delay-4s px-5 " style={{fontWeight:400,fontSize:1.4+'rem'}} > {props.punchline}
            <a   style={{color:'white',textDecoration:'none'}}>  {props.url}</a></p>
            
             <div className="product-des" 
             dangerouslySetInnerHTML={{ __html: props.details }}></div>

	       </div>
     </section>
        </>
    )
}

export default Banner
