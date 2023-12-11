import React from 'react';

const PrimaryNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4" aria-label="Offcanvas navbar large">
		<div className="container">
			<div className="offcanvas offcanvas-start" tabIndex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
				<div className="offcanvas-header pb-1">
					<a href="./index.html"><img src="./assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template"/></a>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<div className="d-block d-lg-none mb-4">
						<form action="#">
							<div className="input-group">
								<input className="form-control rounded" type="search" placeholder="Search for products"/>
								<span className="input-group-append">
									<button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
											<circle cx="11" cy="11" r="8"></circle>
											<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
										</svg>
									</button>
								</span>
							</div>
						</form>
						<div className="mt-2">
							<button type="button" className="btn btn-outline-gray-400 text-muted w-100" data-bs-toggle="modal" data-bs-target="#locationModal">
								<i className="feather-icon icon-map-pin me-2"></i>
								Pick Location
							</button>
						</div>
					</div>
					<div className="d-block d-lg-none mb-4">
						<a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
							<span className="me-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
									<rect x="3" y="3" width="7" height="7"></rect>
									<rect x="14" y="3" width="7" height="7"></rect>
									<rect x="14" y="14" width="7" height="7"></rect>
									<rect x="3" y="14" width="7" height="7"></rect>
								</svg>
							</span>
							All Departments
						</a>
						<div className="collapse mt-2" id="collapseExample">
							<div className="card card-body">
								<ul className="mb-0 list-unstyled">
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Dairy, Bread &amp; Eggs</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Snacks &amp; Munchies</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Fruits &amp; Vegetables</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Cold Drinks &amp; Juices</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Breakfast &amp; Instant Food</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Bakery &amp; Biscuits</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Chicken, Meat &amp; Fish</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="dropdown me-3 d-none d-lg-block">
						<button className="btn btn-primary px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							<span className="me-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
									<rect x="3" y="3" width="7" height="7"></rect>
									<rect x="14" y="3" width="7" height="7"></rect>
									<rect x="14" y="14" width="7" height="7"></rect>
									<rect x="3" y="14" width="7" height="7"></rect>
								</svg>
							</span>
							All Departments
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Dairy, Bread &amp; Eggs</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Snacks &amp; Munchies</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Fruits &amp; Vegetables</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Cold Drinks &amp; Juices</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Breakfast &amp; Instant Food</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Bakery &amp; Biscuits</a></li>
							<li><a className="dropdown-item" href="./pages/shop-grid.html">Chicken, Meat &amp; Fish</a></li>
						</ul>
					</div>
					<div>
						<ul className="navbar-nav align-items-center">
							<li className="nav-item dropdown w-100 w-lg-auto">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="./index.html">Home 1</a></li>
									<li><a className="dropdown-item" href="./pages/index-2.html">Home 2</a></li>
									<li><a className="dropdown-item" href="./pages/index-3.html">Home 3</a></li>
									<li><a className="dropdown-item" href="./pages/index-4.html">Home 4</a></li>
									<li>
										<a className="dropdown-item" href="./pages/index-5.html">Home 5</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown w-100 w-lg-auto">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="./pages/shop-grid.html">Shop Grid - Filter</a></li>
									<li><a className="dropdown-item" href="./pages/shop-grid-3-column.html">Shop Grid - 3 column</a></li>
									<li><a className="dropdown-item" href="./pages/shop-list.html">Shop List - Filter</a></li>
									<li><a className="dropdown-item" href="./pages/shop-filter.html">Shop - Filter</a></li>
									<li><a className="dropdown-item" href="./pages/shop-fullwidth.html">Shop Wide</a></li>
									<li><a className="dropdown-item" href="./pages/shop-single.html">Shop Single</a></li>
									<li><a className="dropdown-item" href="./pages/shop-single-2.html">Shop Single v2</a></li>
									<li><a className="dropdown-item" href="./pages/shop-wishlist.html">Shop Wishlist</a></li>
									<li><a className="dropdown-item" href="./pages/shop-cart.html">Shop Cart</a></li>
									<li><a className="dropdown-item" href="./pages/shop-checkout.html">Shop Checkout</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown w-100 w-lg-auto">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Stores</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="./pages/store-list.html">Store List</a></li>
									<li><a className="dropdown-item" href="./pages/store-grid.html">Store Grid</a></li>
									<li><a className="dropdown-item" href="./pages/store-single.html">Store Single</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mega menu</a>
								<div className="dropdown-menu pb-0">
									<div className="row p-2 p-lg-4">
										<div className="col-lg-3 col-12 mb-4 mb-lg-0">
											<h6 className="text-primary ps-3">Dairy, Bread &amp; Eggs</h6>
											<a className="dropdown-item" href="./pages/shop-grid.html">Butter</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Milk Drinks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Curd &amp; Yogurt</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Eggs</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Buns &amp; Bakery</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Cheese</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Condensed Milk</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Dairy Products</a>
										</div>
										<div className="col-lg-3 col-12 mb-4 mb-lg-0">
											<h6 className="text-primary ps-3">Breakfast &amp; Instant Food</h6>
											<a className="dropdown-item" href="./pages/shop-grid.html">Breakfast Cereal</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Noodles, Pasta &amp; Soup</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Frozen Veg Snacks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Frozen Non-Veg Snacks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Vermicelli</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Instant Mixes</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Batter</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Fruit and Juices</a>
										</div>
										<div className="col-lg-3 col-12 mb-4 mb-lg-0">
											<h6 className="text-primary ps-3">Cold Drinks &amp; Juices</h6>
											<a className="dropdown-item" href="./pages/shop-grid.html">Soft Drinks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Fruit Juices</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Coldpress</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Water &amp; Ice Cubes</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Soda &amp; Mixers</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Health Drinks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Herbal Drinks</a>
											<a className="dropdown-item" href="./pages/shop-grid.html">Milk Drinks</a>
										</div>
										<div className="col-lg-3 col-12 mb-4 mb-lg-0">
											<div className="card border-0">
												<img src="./assets/images/banner/menu-banner.jpg" alt="eCommerce HTML Template" className="img-fluid"/>
												<div className="position-absolute ps-6 mt-8">
													<h5 className="mb-0">
														Dont miss this
														<br/>
														offer today.
													</h5>
													<a href="#" className="btn btn-primary btn-sm mt-3">Shop Now</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item dropdown w-100 w-lg-auto">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="./pages/blog.html">Blog</a></li>
									<li><a className="dropdown-item" href="./pages/blog-single.html">Blog Single</a></li>
									<li><a className="dropdown-item" href="./pages/blog-category.html">Blog Category</a></li>
									<li><a className="dropdown-item" href="./pages/about.html">About us</a></li>
									<li><a className="dropdown-item" href="./pages/404error.html">404 Error</a></li>
									<li><a className="dropdown-item" href="./pages/contact.html">Contact</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown w-100 w-lg-auto">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="./pages/signin.html">Sign in</a></li>
									<li><a className="dropdown-item" href="./pages/signup.html">Signup</a></li>
									<li><a className="dropdown-item" href="./pages/forgot-password.html">Forgot Password</a></li>
									<li className="dropdown-submenu dropend">
										<a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">My Account</a>
										<ul className="dropdown-menu">
											<li><a className="dropdown-item" href="./pages/account-orders.html">Orders</a></li>
											<li><a className="dropdown-item" href="./pages/account-settings.html">Settings</a></li>
											<li><a className="dropdown-item" href="./pages/account-address.html">Address</a></li>
											<li><a className="dropdown-item" href="./pages/account-payment-method.html">Payment Method</a></li>
											<li><a className="dropdown-item" href="./pages/account-notification.html">Notification</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="nav-item w-100 w-lg-auto">
								<a className="nav-link" href="./dashboard/index.html">Dashboard</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
  );
};

export default PrimaryNav;
