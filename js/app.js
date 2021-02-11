window.addEventListener('DOMContentLoaded', (event) => {
  
    const btns = document.getElementsByTagName("button");

    for (let i = 0; i < btns.length; i++) {
    	btns[i].addEventListener("click", (e) => {
    		changeColor(e.target.innerText);
    	})
    }
});

const changeColor = (text) => {
	document.body.style.backgroundColor = text;
}

