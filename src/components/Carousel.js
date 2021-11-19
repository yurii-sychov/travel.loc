
import slide1 from '.././images/carousel/1.jpg';
import slide2 from '.././images/carousel/2.jpg';
import slide3 from '.././images/carousel/3.jpg';

const Carousel = () => {
	return (
		<>
			<div id='carousel' className='carousel slide carousel-fade' data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button type='button' data-bs-target='#carousel' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
					<button type='button' data-bs-target='#carousel' data-bs-slide-to='1' aria-label='Slide 2'></button>
					<button type='button' data-bs-target='#carousel' data-bs-slide-to='2' aria-label='Slide 3'></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={slide1} className='d-block w-100' alt={slide1} />
					</div>
					<div className='carousel-item'>
						<img src={slide2} className='d-block w-100' alt={slide2} />
					</div>
					<div className='carousel-item'>
						<img src={slide3} className='d-block w-100' alt={slide3} />
					</div>
				</div>
			</div>
			<button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</>
	)
}

export default Carousel;