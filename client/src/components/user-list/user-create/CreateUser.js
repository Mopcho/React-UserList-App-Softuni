import '../styles.css';

export const CreateUser = () => {
	return (
		<div classname="overlay">
			<div classname="backdrop" />
			<div classname="modal">
				<div classname="user-container">
					<header classname="headers">
						<h2>Edit User/Add User</h2>
						<button classname="btn close">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="xmark"
								classname="svg-inline--fa fa-xmark"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
							>
								<path
									fill="currentColor"
									d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
								></path>
							</svg>
						</button>
					</header>
					<form>
						<div classname="form-row">
							<div classname="form-group">
								<label htmlFor="firstName">First name</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-user" />
									</span>
									<input
										id="firstName"
										name="firstName"
										type="text"
									/>
								</div>
								<p classname="form-error">
									First name should be at least 3 characters
									long!
								</p>
							</div>
							<div classname="form-group">
								<label htmlFor="lastName">Last name</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-user" />
									</span>
									<input
										id="lastName"
										name="lastName"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Last name should be at least 3 characters
									long!
								</p>
							</div>
						</div>
						<div classname="form-row">
							<div classname="form-group">
								<label htmlFor="email">Email</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-envelope" />
									</span>
									<input
										id="email"
										name="email"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Email is not valid!
								</p>
							</div>
							<div classname="form-group">
								<label htmlFor="phoneNumber">
									Phone number
								</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-phone" />
									</span>
									<input
										id="phoneNumber"
										name="phoneNumber"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Phone number is not valid!
								</p>
							</div>
						</div>
						<div classname="form-group long-line">
							<label htmlFor="imageUrl">Image Url</label>
							<div classname="input-wrapper">
								<span>
									<i classname="fa-solid fa-image" />
								</span>
								<input
									id="imageUrl"
									name="imageUrl"
									type="text"
								/>
							</div>
							<p classname="form-error">ImageUrl is not valid!</p>
						</div>
						<div classname="form-row">
							<div classname="form-group">
								<label htmlFor="country">Country</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-map" />
									</span>
									<input
										id="country"
										name="country"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Country should be at least 2 characters
									long!
								</p>
							</div>
							<div classname="form-group">
								<label htmlFor="city">City</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-city" />
									</span>
									<input id="city" name="city" type="text" />
								</div>
								<p classname="form-error">
									City should be at least 3 characters long!
								</p>
							</div>
						</div>
						<div classname="form-row">
							<div classname="form-group">
								<label htmlFor="street">Street</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-map" />
									</span>
									<input
										id="street"
										name="street"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Street should be at least 3 characters long!
								</p>
							</div>
							<div classname="form-group">
								<label htmlFor="streetNumber">
									Street number
								</label>
								<div classname="input-wrapper">
									<span>
										<i classname="fa-solid fa-house-chimney" />
									</span>
									<input
										id="streetNumber"
										name="streetNumber"
										type="text"
									/>
								</div>
								<p classname="form-error">
									Street number should be a positive number!
								</p>
							</div>
						</div>
						<div id="form-actions">
							<button
								id="action-save"
								classname="btn"
								type="submit"
							>
								Save
							</button>
							<button
								id="action-cancel"
								classname="btn"
								type="button"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
