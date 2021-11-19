import slide1 from './images/carousel/1.jpg';
import slide2 from './images/carousel/2.jpg';
import slide3 from './images/carousel/3.jpg';
// import './App.css';

function App() {
	return (
		<div>
			<header>
				<section className='navbar'>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<div className='container-fluid'>
							<a className='navbar-brand' href='/'>
								Navbar
							</a>
							<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
							</button>
							<div className='collapse navbar-collapse' id='navbarSupportedContent'>
								<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
									<li className='nav-item'>
										<a className='nav-link active' aria-current='page' href='/'>
											Home
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href='/'>
											Link
										</a>
									</li>
									<li className='nav-item dropdown'>
										<a className='nav-link dropdown-toggle' href='/' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
											Dropdown
										</a>
										<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
											<li>
												<a className='dropdown-item' href='/'>
													Action
												</a>
											</li>
											<li>
												<a className='dropdown-item' href='/'>
													Another action
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a className='dropdown-item' href='/'>
													Something else here
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a className='nav-link disabled' href='/' tabindex='-1' aria-disabled='true'>
											Disabled
										</a>
									</li>
								</ul>
								<form className='d-flex'>
									<input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
									<button className='btn btn-outline-success' type='submit'>
										Search
									</button>
								</form>
							</div>
						</div>
					</nav>
				</section>
				<section className='carousel'>
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
				</section>
			</header>
			<section className='content'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							{/* Button trigger modal */}
							<button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
								Launch demo modal
							</button>

							{/* Modal */}
							<div className='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
								<div className='modal-dialog modal-lg'>
									<div className='modal-content'>
										<div className='modal-header'>
											<h5 className='modal-title' id='exampleModalLabel'>
												Modal title
											</h5>
											<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
										</div>
										<div className='modal-body'>...</div>
										<div className='modal-footer'>
											<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
												Close
											</button>
											<button type='button' className='btn btn-primary'>
												Save changes
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>FOOTER</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
