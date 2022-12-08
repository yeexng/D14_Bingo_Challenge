function getRandomNumber(){
    return Math.floor(Math.random()* 76) + 1;
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