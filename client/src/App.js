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

	return (
		<div>
			<Header></Header>
			<main className="main">
				<section className="card users-container">
					<Search></Search>
					<UserList users={users} />
				</section>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
