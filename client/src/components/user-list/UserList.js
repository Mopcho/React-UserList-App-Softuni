import { UserItem } from './user-item/UserItem';
import { useEffect, useState } from 'react';
import { UserEdit } from './user-edit/UserEdit';
import { UserDelete } from './user-delete/UserDelete';
import { UserDetails } from './user-details/UserDetails';
import { UserCreate } from './user-create/UserCreate';

export const UserList = () => {
	let [users, setUsers] = useState([]);
	let [editToggle, setEditToggle] = useState(false);
	let [deleteToggle, setDeleteToggle] = useState(false);
	let [infoToggle, setInfoToggle] = useState(false);
	let [createToggle, setCreateToggle] = useState(false);

	useEffect(() => {
		async function fetchData() {
			let response = await fetch('http://localhost:3005/api/users');
			response = await response.json();

			setUsers(response.users);
		}

		fetchData();
	}, []);

	function openEdit() {
		setEditToggle(true);
	}

	function closeEdit() {
		setEditToggle(false);
	}

	function openDelete() {
		setDeleteToggle(true);
	}

	function closeDelete() {
		setDeleteToggle(false);
	}

	function openDetails() {
		setInfoToggle(true);
	}

	function closeInfo() {
		setInfoToggle(false);
	}

	function openCreate() {
		setCreateToggle(true);
	}

	function closeCreate() {
		setCreateToggle(false);
	}

	return (
		<>
			{editToggle === true ? (
				<UserEdit onClose={closeEdit}></UserEdit>
			) : null}

			{deleteToggle === true ? (
				<UserDelete onClose={closeDelete}></UserDelete>
			) : null}

			{infoToggle === true ? (
				<UserDetails onClose={closeInfo}></UserDetails>
			) : null}

			{createToggle === true ? (
				<UserCreate onClose={closeCreate}></UserCreate>
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
						{users
							? users.map((user) => (
									<UserItem
										key={user._id}
										{...user}
										openEdit={openEdit}
										openDelete={openDelete}
										openDetails={openDetails}
									/>
							  ))
							: null}
					</tbody>
				</table>
			</div>
			<button className="btn-add btn" onClick={openCreate}>
				Add new user
			</button>
		</>
	);
};
