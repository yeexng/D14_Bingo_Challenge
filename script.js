function getRandomNumber(){
    let value = Math.floor(Math.random()* 76) + 1;
    
    highlightedNumber(value)
}

// const randomColor = function () {
//     let g = Math.floor(Math.random()*(256));
//     let r = Math.floor(Math.random()*(256));
//     let b = Math.floor(Math.random()*(256));
    
//     return [r,g,b]
// }

function highlightedNumber(num) {
    for (let i = 0; i <= 75; i++) {
        let cellNumber = document.querySelectorAll(".num")[i]
    
        if (num === parseInt(cellNumber.innerText)) {
            cellNumber.style.backgroundColor = "blue";
        }
    }
    
}

function onLoadActions() {
    for (let num = 1; num <= 76; num++) {
        // 1.Create
        let cellNumberNode = document.createElement("div");
        //2.Customize
        cellNumberNode.classList.add("num")
        cellNumberNode.innerText = num;
        // cellNumberNode.addEventListener("click",)
        // 3.Append it
        document.getElementById("number-cells").appendChild(cellNumberNode)
           
    }
    
}

window.onload = onLoadActions;