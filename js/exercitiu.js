const numbers = [1,2,3,4,5];

console.log(
	numbers.reduce((accumulator, value) => {
		return accumulator + value;
}));

const marks = [5,6,7,4,8];

/*const averageMark = mark => {
	if (mark.length === 0) {
		console.log("empty");
	} else {
		console.log(
			marks.reduce((accumulator, value) => {
			return accumulator + value;
		}));
		
	}
}
*/


//mai jos de 5 - restantier

const averageMark = (marks) => {
	let sum = 0, average = 0;
    if (marks.length === 0) return "Empty array"

    for (let  i = 0; i < marks.length; sum += marks[i++]);
    average = sum / marks.length;

    return (average < 5) ? `Rrestantier cu media: ${average}` : `Media ${average}`;
}


console.log(averageMark(marks));
