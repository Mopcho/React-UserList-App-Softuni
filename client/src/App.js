import { UserList } from './components/user-list/UserList';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { useState, useEffect } from 'react';
import './styles.css';
import * as userService from './services/userService';

function App() {
	let [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			let usersResponse = await userService.getUsers();

			setUsers(usersResponse);
		}
		fetchUsers();
	}, []);

	function addUserHandler(user) {
		setUsers((users) => [...users, user]);
	}

	function removeUserHandler(id) {
		let newUsers = users.filter((user) => user._id !== id);

		setUsers(newUsers);
	}

	function editUserHandler(id, userData) {
		let newUsers = users.map((user) => {
			if (user._id === id) {
				user = userData;
			}
			return user;
		});

		setUsers(newUsers);
	}

	return (
		<div>
			<Header></Header>
			<main className="main">
				<section className="card users-container">
					<Search></Search>
					<UserList
						users={users}
						addUserHandler={addUserHandler}
						removeUserHandler={removeUserHandler}
						editUserHandler={editUserHandler}
					/>
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
