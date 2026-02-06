 // JavaScript logic
        function startCelebration() {
            var name = document.getElementById('nameInput').value;
            var inputScreen = document.getElementById('input-screen');
            var celebrationScreen = document.getElementById('celebration-screen');
            var greeting = document.getElementById('greeting');
            var audio = document.getElementById('bdayAudio');

            if (name.trim() === "") {
                alert("Please enter a name first!");
                return;
            }

            // 1. Hide input, show celebration
            inputScreen.style.display = 'none';
            celebrationScreen.style.display = 'flex';

            // 2. Set the text
            greeting.innerText = "Happy Birthday, " + name + "!";

            // 3. Play Audio
            // Note: Modern browsers require user interaction (click) to play audio. 
            // Since this function runs on a click, it will work.
            audio.play().catch(error => {
                console.log("Audio playback failed (browser blocked it): " + error);
            });

            // 4. Launch Confetti!
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              var particleCount = 50 * (timeLeft / duration);
              // since particles fall down, start a bit higher than random
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }