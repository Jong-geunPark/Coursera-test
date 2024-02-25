// STEP 2
(function (window) {
  
// STEP 3
    var helloSpeaker = {};
    var speakWord = "Hello";

// STEP 4   
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
  
// STEP 5
        window.helloSpeaker = helloSpeaker;
    })(window);
