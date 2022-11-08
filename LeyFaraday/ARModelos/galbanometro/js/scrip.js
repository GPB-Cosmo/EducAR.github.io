setTimeout(function() {

    let corrient = document.createElement('a-entity');
    corrient.setAttribute('collada-model', '#corriente');
    corrient.setAttribute('position', '0.7 1.6 -0.1');
    corrient.setAttribute('rotation', '-90 0 0');
    corrient.setAttribute('scale', '0.5 0.5 0.5');
    document.getElementById('fila').append(corrient);

    let campoMag = document.createElement('a-entity');
    campoMag.setAttribute('collada-model', '#campo');
    campoMag.setAttribute('position', '0 -0.5 0');
    campoMag.setAttribute('scale', '1 1 1');
    document.getElementById('fila').append(campoMag);


    let mov1 = document.createElement('a-animation');
    mov1.setAttribute('attribute', 'rotation');
    mov1.setAttribute('to', '0 -90 0');
    mov1.setAttribute('dur', '3000');
    mov1.setAttribute('easing', 'linear');


    document.getElementById('bruj1').append(mov1);

    let mov2 = document.createElement('a-animation');
    mov2.setAttribute('attribute', 'rotation');
    mov2.setAttribute('to', '0 90 0');
    mov2.setAttribute('dur', '3000');
    mov2.setAttribute('easing', 'linear');


    document.getElementById('bruj2').append(mov2);
    let mov3 = document.createElement('a-animation');
    mov3.setAttribute('attribute', 'rotation');
    mov3.setAttribute('to', '0 0 0');
    mov3.setAttribute('dur', '3000');
    mov3.setAttribute('easing', 'linear');


    document.getElementById('bruj3').append(mov3);
    let mov4 = document.createElement('a-animation');
    mov4.setAttribute('attribute', 'rotation');
    mov4.setAttribute('to', '0 -180 0');
    mov4.setAttribute('dur', '3000');
    mov4.setAttribute('easing', 'linear');


    document.getElementById('bruj4').append(mov4);

}, 5000);