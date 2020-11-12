let drum;
let key;
let keyToDrum;

// get id from click and play sound of selected drum
function playSound(element) {
    drum = element.id;
    chooseDrum(drum);
}

// listen for key press and convert it to the respective drum 
// then play the selected drum
function playSoundOnKeydown() {
    document.addEventListener('keydown', function (event) {
        key = event.code;
        keyToDrum = document.querySelectorAll(".drum");
        keyToDrum.forEach(i => {
            if (i.textContent == key || "Key" + i.textContent == key) {
                drum = i.getAttribute("id");
            }
        });
        chooseDrum(drum);
    });
    
};

// use selected drum to play specific sound
function chooseDrum(drum) {
    let sound = new Audio("sounds/" + drum + ".wav");
    switch (drum) {
        case "kick":
            sound.play();
            break;

        case "snare":
            sound.play();
            break;

        case "hihat":
            sound.play();
            break;

        case "crash":
            sound.play();
            break;

        case "ride":
            sound.play();
            break;

        case "tom1":
            sound.play();
            break;

        case "tom2":
            sound.play();
            break;

            // missing this wav file
        case "tom3":
            sound.play();
            break;

    }
}

// list for key press
playSoundOnKeydown();