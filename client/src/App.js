import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { UsersWindow } from './components/UsersWindow';
import './styles.css';

function App() {
	return (
		<div>
			<Header />
			<main class="main">
				<UsersWindow></UsersWindow>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
