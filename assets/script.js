function clickColor() {

    //Array - Colors
    const colors = ['red','green','yellow', 'purple'];

    //Drawn Color
    var colorDrawn = Math.floor(Math.random() * colors.length);
    var colorSeletion = colors[colorDrawn];

    // Title and button for modification
    let title = document.getElementById('color');
    let button = document.getElementById('btnColor')


    //Condition for body modification
    if (colorSeletion === 'red') {
        title.innerHTML = `Your Color : Red`;
        document.body.style.background = colorSeletion;
        button.style.background = colorSeletion;

    } else if (colorSeletion === 'green') {
        title.innerHTML = `Your Color : Green`;
        document.body.style.background = colorSeletion;
        button.style.background = colorSeletion;

    } else if (colorSeletion === 'yellow') {
        title.innerHTML = `Your Color : Yellow`;
        document.body.style.background = colorSeletion;
        button.style.background = colorSeletion;

    } else if (colorSeletion === 'purple') {
        title.innerHTML = `Your Color : Purple`;
        document.body.style.background = colorSeletion;
        button.style.background = colorSeletion;

    }

}