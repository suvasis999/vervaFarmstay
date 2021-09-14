import React from 'react'

function Content_red_gd(props) {
    return (
       
        <section className="homesec" id="Background">
		<div className="container-fluid py-lg-5" id="Agriback" 
        style={{color:props.textColor,
        
        background:props.bgImage=='NO'?'backgroundColor:#ffffff' : 'linear-gradient(to bottom, rgba(84,26,14, .80) 30%, rgba(0,0,0, .80) 80%),url('+props.bgImage+') no-repeat'
        }}>
			<div className="row px-lg-5">
				<div className="col-lg-2 col-md-2 col-12 text-center my-auto"></div>
				<div className="col-lg-8 col-md-8 col-12 py-lg-5 my-auto">
					<h3 className="animated fadeInDown display-4">{props.title}</h3>
					{props.Details}
				</div>
				<div className="col-lg-2 col-md-2 col-12 text-center my-auto">
				</div>

		</div></div>
	</section>
        
    )
}

export default Content_red_gd
