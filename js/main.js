document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["CD BIRTHDAY", "RUN BASIC_BITCH_BIRTHDAY.EXE", "..."];
    
    var loop = 0;

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {

      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
        
        if(loop == 0)
          document.querySelector("p.one span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
          
        if(loop == 1) {

					document.querySelector("p.one span span").classList.add("hide");

          setTimeout(function() {document.querySelector("p.two").classList.remove("hide")}, 1000);

          setTimeout(function() {document.querySelector("p.two span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'}, 2000);
        }

        if(loop == 2) {

					document.querySelector("p.two span span").classList.add("hide");

          setTimeout(function() {document.querySelector("p.three").classList.remove("hide")}, 2000);

          setTimeout(function() {document.querySelector("p.three span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'}, 3000);
        }
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
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
    // start the text animation
    setTimeout(function() {StartTextAnimation(0)}, 1000);
  });
  