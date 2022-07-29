const shape = document.querySelector(".shape"),
    colorpick = document.querySelector("#color"),
    colorinput = document.querySelector("#colorvalue"),
    moveX = document.querySelector("#moveX"),
    moveY = document.querySelector("#moveY"),
    blurinput = document.querySelector("#blur"),
    spreadradius = document.querySelector("#spread-radius"),
    border = document.querySelector("#border"),
    code = document.querySelector(".result"),
    borderRadius = document.querySelector("#borderradius"),
    boxshadow = document.querySelector("#boxshadow");

[colorpick, moveX, moveY, blurinput, spreadradius].forEach(input => {
    input.addEventListener('input', () => {
        const shapedata = shape.style.boxShadow = ` ` + moveX.value + `px ` + moveY.value + `px  ` + blurinput.value + `px ` + spreadradius.value + `px ` + colorpick.value + ``;

        boxshadow.innerText = "box-shadow:" + shapedata + ";";
        input.setAttribute('value', input.value);
    })

})
border.addEventListener('input', () => {
    if (border.value < 1) {
        borderRadius.style.display = "none";
    }
    else {
        const borderdata = shape.style.borderRadius = ` ` + border.value + `px`;
        borderRadius.innerText = "border-radius:" + borderdata + ";";
        borderRadius.style.display = "block";
        border.setAttribute('value', border.value);
    }
});

