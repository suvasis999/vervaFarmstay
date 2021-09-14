import Link from 'next/link';
export const Footer = () => {
    return (
        <>
           	<footer className="bg-dark text-white ">
		<div className="container-fluid px-lg-5 footerLink">
			<div className="p-5" >
				<div className="row" style={{lineHeight:20+'px',fontSize: .8+'rem', fontWeight: 300}}>
					<div className="col-12 text-center" >
                    <Link href="/">
						<a className="text-white" 
                        style={{lineHeight:30+'px',fontSize: 1+'rem', fontWeight: 400,letterSpacing: 3+'px'}}>HOME</a>
                        </Link>
					</div>
					<div className="col-12 text-center" >
                   
                    <Link href="/Belief"> 
						<a className="text-white px-3" >Our Belief & Vision</a></Link>|
                        <Link href="/mission">
						<a className="text-white px-3" >Our Mission</a></Link>|
                        <Link href="/background">
						<a className="text-white px-3" >Our Background</a></Link>|
                        <Link href="/Whoweare">
						<a className="text-white px-3" >Who We Are</a></Link>|
                        <Link href="/Whatwedo">
						<a className="text-white px-3" >What We Do</a></Link>|
                        <Link href="/Whoweseek">
						<a className="text-white px-3" >Who We Seek</a></Link>|
                        <Link href="/http://www.verveconsult.com">
						<a className="text-white px-3" >www.verveconsult.com</a></Link>
                        

					</div>
				</div>
				<div className="row pt-3" style={{lineHeight:20+'px',fontSize: .8+'rem', fontWeight: 300}}>
					<div className="col-12 text-center" >
                    <Link href="/">
						<a className="text-white"  style={{lineHeight:30+'px',fontSize: 1+'rem',
                         fontWeight: 400,letterSpacing: 3+'px'}}>FEATURES</a></Link>
					</div>
					<div className="col-12 text-center" >
                    <Link href="/Locations">
						<a className="text-white px-3" >Locations</a></Link>|
                        <Link href="/financials">
						<a className="text-white px-3" >Financials</a></Link>|
                        <Link href="/Projects">
						<a className="text-white px-3" >Projects</a></Link>|
                        <Link href="/Vendors">
						<a className="text-white px-3">Vendors</a></Link>

					</div>
				</div>
				<div className="row pt-3" style={{lineHeight:20+'px',fontSize: .8+'rem', fontWeight: 300}}>
					<div className="col-12 text-center" >
                    <Link href="/faq">
						<a className="text-white px-3"  style={{lineHeight:30+'px',fontSize: 1+'rem',
                         fontWeight: 400,letterSpacing: 3+'px'}}>FAQ</a></Link>|
                         <Link href="/contactus">
						<a className="text-white px-3" 
                        style={{lineHeight:40+'px',fontSize: 1+'rem', fontWeight: 400,letterSpacing: 3+'px',
                         color: 'yellow' }}>Contact Us</a></Link>
					</div>
				</div>
			</div>
		</div>
		<div className="my-auto" style={{backgroundColor: 'black'}}>
			<p className="text-light text-center py-5">Copyright protected by Verve Farmstay, 2021</p>
		</div>
	</footer>

 
        </>
    )
}
