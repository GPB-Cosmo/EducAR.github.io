let fil = document.createElement('a-entity');
fil.setAttribute('collada-model', '#focoAp');
fil.setAttribute('id', 'fi');
fil.setAttribute('position', '0.029 1 0.021');
fil.setAttribute('rotation', '-120 -90 90');
fil.setAttribute('scale', '0.5 0.5 0.5');

/* document.getElementById("fi").style.visibility = "hidden"; */
document.getElementById('marcador').append(fil);


let motor = document.createElement('a-entity');
motor.setAttribute('collada-model', '#motor');
motor.setAttribute('position', '0 1 0');
motor.setAttribute('rotation', '-120 -90 90');
motor.setAttribute('scale', '0.5 0.5 0.5');

document.getElementById('marcador').append(motor);


setTimeout(function() {
    var foco = document.getElementById("fi");
    document.getElementById('marcador').removeChild(foco);


    let audio = document.createElement('audio');
    audio.setAttribute('class', 'audio');
    audio.textContent = "<source src='assets/audio/WIND1.mp3' type='audio/mp3'>"

    //const addAudio = document.querySelector('.audio');
    //addAudio.innerHTML = "<source src='assets/audio/WIND1.mp3' type='audio/mp3'>";

    /* const sourc = document.querySelector("#sour");

    sourc.insertAdjacentElement("afterbegin", audio); */

    var sonido = document.createElement("iframe");
    sonido.setAttribute("src", "assets/audio/WIND1.mp3");

    /* document.body.appendChild(sonido); */
    document.getElementById("body").append(sonido);


    //metodo para retraso y creacion de animacion para elices 
    let div = document.createElement('a-animation');
    div.setAttribute('attribute', 'rotation');
    div.setAttribute('to', '-120 -90  360');
    div.setAttribute('dur', '3000');
    div.setAttribute('easing', 'linear');
    div.setAttribute('repeat', 'indefinite');

    document.getElementById('div').append(div);

    let fil = document.createElement('a-entity');
    fil.setAttribute('collada-model', '#focoEnc');
    fil.setAttribute('id', 'fi');
    fil.setAttribute('position', '0.029 1 0.021');
    fil.setAttribute('rotation', '-120 -90 90');
    fil.setAttribute('scale', '0.5 0.5 0.5');


    /* document.getElementById("fi").style.visibility = "hidden"; */
    document.getElementById('marcador').append(fil);



}, 7000);
//metodo para aparicion de filamento