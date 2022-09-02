import { UserList } from './components/user-list/UserList';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import './styles.css';

function App() {
	return (
		<div>
			<Header></Header>
			<main class="main">
				<UserList></UserList>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
