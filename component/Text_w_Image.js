import React from 'react';

function Text_w_Image(props) {
    return (
        
        
        <>
           <section className="homesec pt-5" id="Belief">
		<div className="container-fluid py-lg-5">
			<div className="row px-xl-5">
			{props.leftImage==true?
				<>
				<div className="col-lg-5 col-md-5 col-12 text-center">
					<img src={props.image} style={{width: 320+'px'}} className="card-img"/>
				</div>
				<div className="col-lg-7 col-md-7 col-12 my-auto">
					<h3 className="animated fadeInUp display-4 text-secondary ">{props.titile}</h3>
					<p>{props.Details}
					</p>
				</div></>:
				<>
				<div className="col-lg-7 col-md-7 col-12 my-auto text-end">
					<h3 className="animated fadeInUp display-4 text-secondary ">{props.titile}</h3>
					{props.Details}
				
					
				</div>
				<div className="col-lg-5 col-md-5 col-12 text-center">
					<img src={props.image} style={{width: 320+'px'}} className="card-img"/>
				</div>
				</>
			}
			</div>
			{props.hr==true?
			<div className="row pt-xl-5">
				<hr style={{height:1.4+'px',width:'50%',backgroundColor: '#020202',margin: 0 + ' auto'}}/>			
			</div>:''}


		</div>
	</section> 
        </>
        
    )
}

export default Text_w_Image
