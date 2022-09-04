import * as userService from '../../services/userService';
import { UserItem } from './user-item/UserItem';
import { UserDetails } from './user-details/UserDetails';
import { UserEdit } from './user-edit/UserEdit';
import { UserDelete } from './user-delete/UserDelete';
import { UserCreate } from './user-create/UserCreate';
import { useState } from 'react';
import { UserActions } from '../../constants/userConstants';

// User Delete -> Close modal
// User Edit -> CLose modal
// On user edit -> Rerender UserList
export const UserList = ({ users, addUserHandler, removeUserHandler }) => {
	let [userAction, setUserAction] = useState({ user: null, action: null });

	function openModalHandler(userId, action) {
		userService.getUser(userId).then((user) => {
			setUserAction({
				user,
				action,
			});
		});
	}

	function closeModalHandler() {
		setUserAction({ user: null, action: null });
	}

	async function onUserCreate(ev) {
		ev.preventDefault();

		let formData = new FormData(ev.target);

		const {
			firstName,
			lastName,
			email,
			phoneNumber,
			imageUrl,
			...address
		} = Object.fromEntries(formData);

		const userCreateData = {
			firstName,
			lastName,
			email,
			phoneNumber,
			imageUrl,
			address,
		};

		const user = await userService.createUser(userCreateData);
		addUserHandler(user);
		closeModalHandler();
	}

	async function onUserDelete(ev, id) {
		ev.preventDefault();

		await userService.deleteUser(id);

		removeUserHandler(id);
		closeModalHandler();
	}

	return (
		<>
			{userAction.action === UserActions.Details ? (
				<UserDetails
					user={userAction.user}
					closeModalHandler={closeModalHandler}
				/>
			) : null}

			{userAction.action === UserActions.Edit ? (
				<UserEdit
					user={userAction.user}
					closeModalHandler={closeModalHandler}
				/>
			) : null}

			{userAction.action === UserActions.Delete ? (
				<UserDelete
					user={userAction.user}
					closeModalHandler={closeModalHandler}
					onUserDelete={onUserDelete}
				/>
			) : null}

			{userAction.action === UserActions.Create ? (
				<UserCreate
					closeModalHandler={closeModalHandler}
					onUserCreate={onUserCreate}
				/>
			) : null}

			<div className="table-wrapper">
				<table className="table">
					<thead>
						<tr>
							<th>Image</th>
							<th>
								First name
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Last name
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Email
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Phone
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>
								Created
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-down"
									className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
									></path>
								</svg>
							</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<UserItem
								key={user._id}
								user={user}
								openModalHandler={openModalHandler}
							></UserItem>
						))}
					</tbody>
				</table>
			</div>
			<button
				className="btn-add btn"
				onClick={() => openModalHandler(null, UserActions.Create)}
			>
				Add new user
			</button>
		</>
	);
};
