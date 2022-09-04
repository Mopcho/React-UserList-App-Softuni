const baseUrl = 'http://localhost:3005/api/users';

export async function getUsers() {
	try {
		let response = await fetch(baseUrl);

		response = await response.json();

		return response.users;
	} catch (err) {
		console.log(err);
	}
}

export async function createUser(userData) {
	try {
		let response = await fetch(baseUrl, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		response = await response.json();

		return response;
	} catch (err) {
		console.log(err);
	}
}

export async function getUser(id) {
	try {
		let response = await fetch(`${baseUrl}/${id}`);

		response = await response.json();

		return response.user;
	} catch (err) {
		console.log(err);
	}
}

export async function deleteUser(id) {
	try {
		let response = await fetch(`${baseUrl}/${id}`, { method: 'POST' });

		response = await response.json();

		return response;
	} catch (err) {
		console.log(err);
	}
}
