const first = +prompt("Give a");
const second = +prompt("Give b");

for (let i = first ; i < second; i++) {
	if (!(i & 1)) console.log(i);
}
