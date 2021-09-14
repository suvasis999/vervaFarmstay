import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter  } from '@fortawesome/free-brands-svg-icons'
function OurTeam(props) {
    return (
        <>
        <section className="homesec pt-5" id="Whoweare">
		<div className="container-fluid py-lg-5">
			<div className="row px-lg-5">
				<div className="col-lg-3 col-md-3 col-12 py-lg-5 my-auto ">
                </div>
				<div className="col-lg-4 col-md-4 col-12 py-lg-5 my-auto ">
					<h3 className="animated fadeInUp display-4 text-secondary">{props.titile}</h3>
                    <div className="text-end">
						<ul className="list-group people">

                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Debasish Mahapatro,
                        <span className="desn">Founder Director</span><a href="https://www.linkedin.com/in/debasish-mahapatro-06a644/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i></a></li>
                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Makrand Dekhane, <span className="desn">Additional Director</span><a href="https://www.linkedin.com/in/makranddekhane/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i>
                        </a></li>
                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Allan Dias, <span className="desn">Additional Director</span><a href="https://www.linkedin.com/in/allan-dias-1b807117/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i>
                        </a></li>
                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Ashok Hegde, <span className="desn">KK Agro (Partner Advisor)</span><a href="https://www.linkedin.com/in/vjvignesh/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i>
                        </a></li>
                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Vignesh V. J., <span className="desn">(COO)</span><a href="https://www.linkedin.com/in/vjvignesh/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i>
                        </a></li>
                        <li className="list-group-item">&#9679;&nbsp;&nbsp;Rohit Vyas, <span className="desn">(Farm Manager)</span><a href="https://www.linkedin.com/in/rohit-vyas-9022b0a4/">
                        <i className=" p-2 ml-2" style={{backgroundColor: 'blue',color: 'white' ,borderRadius: 5+'px',marginLeft:10+'px'}}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </i>
                        </a></li>

	 
						</ul>
					</div>
                </div>
				<div className="col-lg-5 col-md-5 col-12 text-center">
					<img src={props.Image} style={{width: 320+'px'}} className="card-img"/>
				</div>
			</div></div></section>
        </>
    )
}

export default OurTeam
