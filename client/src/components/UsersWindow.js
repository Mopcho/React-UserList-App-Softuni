import { SearchBar } from './user-list/search/SearchBar';
import { Table } from './Table';
import '../styles.css';

export const UsersWindow = () => {
	return (
		<section className="card users-container">
			<SearchBar></SearchBar>
			<Table></Table>
			<button className="btn-add btn">Add new user</button>
		</section>
	);
};
