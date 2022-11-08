let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');

bt1.addEventListener("click", addScene1, true);

bt2.addEventListener("click", addScene2, true);


function addScene1() {
    var scene1 = document.createElement("a-box");
    scene1.setAttribute("id", "one")
    scene1.setAttribute("opacity", "0.5")
    scene1.setAttribute("id", "bt-1")
    document.querySelector("a-marker").appendChild(scene1);
    return scene1;
}


function addScene2() {
    var scene2 = document.createElement("a-sphere");
    const scene1 = document.getElementsByName("one");

    scene2.setAttribute("radius", "0.5")

    document.querySelector("a-marker").appendChild(scene2);
    document.querySelector("a-marker").remove(scene1);
    /* scene1.removeAttribute('click', addScene1, true); */
}