import React, { useState } from 'react';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) { //if scrolled above 300px our button will be visible.
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
				in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);
	return (
		<>
			<div className='btnScrollToTop' id='scrollTop'>
				<button onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} title="Go to top" id='btnScrollToTop'>
					<i className='material-icons'>arrow_upward</i>
				</button>
			</div>
		</>
	);
}
export default ScrollToTop;
