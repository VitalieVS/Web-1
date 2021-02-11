const username = "tudor";
const password = "tudoras18"

const readUsername = prompt("Give username");
const readPassword = prompt("Give password");

const checkUsername = (usr) => usr === readUsername;
const checkPw = (pw) => pw === readPassword;



const checkCredentials = () => {

	const validUsername = checkUsername(username);

	const validPassword = checkPw(password);

	const success = validUsername && validPassword;

	if (success) {
		console.log("Hello");
	}

	if (!(validUsername && validPassword) === "") {
		console.log("wrong input");
	} else {
		if (!validUsername ) {
		console.log("Username wrong");
		}

		if (!validPassword) {
			console.log("Password wrong");
		}

	}

	
	
}

checkCredentials();

