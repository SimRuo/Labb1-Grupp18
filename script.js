const checkbox = document.getElementById("divStyle");
const inputFields = document.querySelectorAll(".textfield"); //getElementsByClass returnerar en HTMLcollection så använder denna istället så vi kan köra en foreach
const contentOutput = document.getElementById("contentOutput");
const removeOutput = document.getElementById("delete");

function inputHandler(e){
    let sourceOfEvent = e.target.name;

    if (e.target === document.getElementById("content")) {
        contentOutput.textContent = `Det här skrev du: ${document.getElementById("content").value}`
    }
    console.log("eventet kommer från: " + sourceOfEvent)
}

checkbox.addEventListener("change", (e) => {
    contentOutput.style.backgroundColor = document.getElementById("color").value;
});


removeOutput.addEventListener("click", (e) => {
    // kan skriva såhär istället om man inte vill ta bort hela taggen men det var ju uppgiften
    // contentOutput.textContent =""
    contentOutput.remove();

});

inputFields.forEach(field => {
    field.addEventListener("input", inputHandler);
});