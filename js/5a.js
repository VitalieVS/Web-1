const validCredentials = {
	'username' : 'admin',
	'password' : '1234'
};

const credentials = {
	'username' : prompt("Username = ?"),
	'password' : prompt("password = ?")
};

const checkCredentials = () => {
	const validUsername =  
		validCredentials.username === credentials.username;

	const validPassword =
		validCredentials.password === credentials.password;

	const isEmpty =
		!credentials.username && !credentials.username;


	if (validUsername && validPassword) {
		console.log("Hello");
	}

	if (isEmpty) {
		console.log("Empty");
	} else {
		!validUsername ? console.log("Wrong username") : false;
		!validPassword ? console.log("Wrong password") : false;
	}
}

checkCredentials();


/*const validCredentials = ["admin", "1234"];
const credentials = [prompt("Username"), prompt("password")];

const checkCredentials = () => {
    const result = []
    const trueChecker = array => array.every(value => value === true);
    const emptyChecker = array => array.every(value => value === '');

    for (let i = 0; i < validCredentials.length; i++) {
        result.push(validCredentials[i] == credentials[i]);
    }

    trueChecker(result) ? console.log("Hello") : false;

    if (emptyChecker(credentials)) {
        console.log("empty");
    } else {
        !result[0] ? console.log("wrong username") : false;
        !result[1] ? console.log("wrong password") : false;
    }
}

checkCredentials();
*/
