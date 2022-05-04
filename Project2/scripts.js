onload = () => {
    var counter = 0;

    document.getElementById("decrease").addEventListener("click", () => {
        counter--;
        changeContent(counter);
    });
    document.getElementById("increase").addEventListener("click", () => {
        counter++;
        changeContent(counter);
    });
    document.getElementById("reset").addEventListener("click", () => {
        counter = 0;
        changeContent(counter);
    });
}
function changeContent (c) {
    document.getElementById("counter").textContent = c;

    if (c > 0)
        document.getElementById("counter").style.color = "green";
    else if (c < 0)
        document.getElementById("counter").style.color = "red";
    else 
        document.getElementById("counter").style.color = "#a1a1a1";
}