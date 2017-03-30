var cells = document.getElementById("list").getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "one") {
        cells[i].style.backgroundColor = "red";
    }
}
