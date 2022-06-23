// Your JS goes here
let container = document.createElement('div');
container.style.width = '1 px' 
document.body.append(container);

for (let i = 0; i <= 8; i++) {
    for (let j = 0; j < 8; j++) {
        //create tile
        var div = document.createElement('div');
        //set tile dimensions and color
        div.style.width = '11.1%';
        div.style.float = 'left'
        div.style.paddingBottom =  "11.1%"
        div.style.border = '1px black solid'
        //makes tile black or red
        if (j % 2 === 1 && i % 2 === 0) {
            div.style.background = "red";
        } else if (j % 2 === 0 && i % 2 === 1) {
            div.style.background = "red"
        } else {
            div.style.background = "black"
        }
        container.append(div);
    }
}

