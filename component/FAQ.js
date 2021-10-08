import React from 'react'

function FAQ ({faq, index, toggleFAQ,isOpenSt}) {
	return (
		<div
			className={"faq " + (isOpenSt  ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.faqtitle} 
			</div>
			<div className="faq-answer">
				{faq.faqdtls}
			</div>
		</div>
	)
}

export default FAQ