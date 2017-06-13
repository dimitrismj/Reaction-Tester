        var startTime = new Date().getTime();
        var stopTime = new Date().getTime();
        var bestTime = 20000;
        var timeReacted = 0;

        delayOfShape();

        function displayShape() {
            
             var top = Math.random() * 270;
             var left = Math.random() * 1000;
             var width = (Math.random() * 225) + 30;
             var randomness = Math.random();

             document.getElementById("shape").style.top = top + "px";
             document.getElementById("shape").style.left = left + "px";
             document.getElementById("shape").style.width = width + "px";
             document.getElementById("shape").style.height = width + "px";
             document.getElementById("shape").style.backgroundColor = randomColor();
             shapeChooser (randomness);
             startTime = new Date().getTime();
        }

        function displayTriangle() {
             var top = Math.random() * 270;
             var left = Math.random() * 1000;
             document.getElementById("triangle").style.display = "block";
             document.getElementById("triangle").style.top = top + "px";
             document.getElementById("triangle").style.left = left + "px";
             document.getElementById("triangle").style.borderBottomColor = randomColor();
        }
        
        function shapeChooser (x) {
            if (x >= 0 && x< 0.33 ) {
                  document.getElementById("shape").style.display = "block";
                  document.getElementById("shape").style.borderRadius = "50%";
                
             }
             else if (x >= 0.33 && x < 0.66) {
                 document.getElementById("shape").style.display = "block";
                 document.getElementById("shape").style.borderRadius = "0%";
             }
             else {
                 setTimeout(displayTriangle, Math.random() * 1000);
             }
        }

        function delayOfShape() {
             setTimeout(displayShape, Math.random() * 750);
        }
       
       function randomColor() {
           var letters = '0123456789ABCDEF'.split('');
           var color = "#";
           for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
           }
           return color;
       }

       function findTime() {
            stopTime = new Date().getTime();
            timeReacted = (stopTime - startTime) / 1000;
            if (timeReacted < bestTime) {
                bestTime = timeReacted;
            }
       }

       function clear() {
          document.getElementById("timeReacted").innerHTML = "";
            document.getElementById("bestTime").innerHTML = "";
            
        }

       function displayTime() {
            clear();
            document.getElementById("timeReacted").innerHTML = timeReacted + "s";
            document.getElementById("bestTime").innerHTML = bestTime + "s";
       }
       

        document.getElementById("shape").onclick = function() {
            document.getElementById("shape").style.display = "none";
            findTime();
            displayTime();
            delayOfShape();
        }

        document.getElementById("triangle").onclick = function() {
            document.getElementById("triangle").style.display = "none";
            findTime();
            displayTime();
            delayOfShape();
        }

        document.getElementById("myButton").onclick = function() {
            clear();
            startTime = new Date().getTime();
            stopTime = new Date().getTime();
            bestTime = 20000;
            timeReacted = 0;
        }