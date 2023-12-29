let keyboard = new Audio('./sfx/keyboard.mp3');
let countdown = new Audio('./sfx/countdown.mp3');
let screen1 = new Audio('./sfx/screen1.mp3');
let screen2 = new Audio('./sfx/screen2.mp3');
let screen3 = new Audio('./sfx/screen3.mp3');

// array with texts to type in typewriter
let dataText = ["CD BIRTHDAY", "RUN BASIC_BITCH_BIRTHDAY.EXE", "..."];

let loop = 0;

document.addEventListener('DOMContentLoaded',function(event){

	document.querySelector("#screen0 button").addEventListener("click", function() {

		screen1.play();

		setTimeout(function() {screenOne()}, 500);

	});

	function screenOne() {
    // type one text in the typwriter
    // keeps calling itself until the text is finished

		screen1.pause();

		document.querySelector("#screen0").classList.add("hide");
		document.querySelector("#screen1").classList.remove("hide");

    function typeWriter(text, i, fnCallback) {

      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character
        if(loop == 0) {
					keyboard.pause();
					keyboard.play();

          document.querySelector("p.one span").innerHTML = text.substring(0, i+1) +'<span></span>';
				}
          
        if(loop == 1) {

					document.querySelector("p.one span span").classList.add("hide");

          setTimeout(function() {
						document.querySelector("p.two").classList.remove("hide")
					}, 1000);

          setTimeout(function() {
						document.querySelector("p.two span").innerHTML = text.substring(0, i+1) +'<span></span>';
						keyboard.play();
					}, 1500);
        }

        if(loop == 2) {

          setTimeout(function() {document.querySelector("p.two span span").classList.add("hide")}, 2000);

          setTimeout(function() {document.querySelector("p.three").classList.remove("hide")}, 2000);

          setTimeout(function() {
						document.querySelector("p.three span").innerHTML = text.substring(0, i+1) +'<span></span>';
						countdown.play();
					}, 2000);

          setTimeout(screenTwo, 5000);
        }
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
        loop++;
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {

      console.log("loop = " + loop);

			if(loop < dataText.length) {
				if (typeof dataText[i] == 'undefined'){
						setTimeout(function() {
							StartTextAnimation(0);
						}, 20000);
				}
				// check if dataText[i] exists
				if (i < dataText[i].length) {
					// text exists! start typewriter animation
					typeWriter(dataText[i], 0, function(){
						// after callback (and whole text has been animated), start next text
						StartTextAnimation(i + 1);
					});
				}
			}
    }
    // start the text animation
    setTimeout(function() {StartTextAnimation(0)}, 1000);
	}
  
	function screenTwo() {
	
		document.querySelector("body").classList.add("screen2");

		document.querySelector("#screen1").classList.add("hide");
		document.querySelector("#screen2").classList.remove("hide");

		screen2.play();

		setTimeout(screenThree, 4500);

	}

	function screenThree() {
	
		screen3.play();

		document.querySelector("body").classList.remove("screen2");
		document.querySelector("body").classList.add("screen3");

		document.querySelector("#screen2").classList.add("hide");
		document.querySelector("#screen3").classList.remove("hide");

		stop();

	}
});