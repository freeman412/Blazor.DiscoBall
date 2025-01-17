function createDiscoBall(radius = 50, discoBallId, isColorful=false) {
    //setDiscoBallSize(radius * 2, discoBallId);
    var t = 1;
    var baseSquareSize = 6.5;
    var squareSize = baseSquareSize / (50 / radius);
   
    var basePrec = 19.55;

    if (radius <= 50) { prec = basePrec; }
    else {
        //var squareSize = baseSquareSize / Math.log10(radius / 50 + .5);
       //prec = basePrec * Math.pow(radius / 50, .3);
        //var prec = basePrec * (radius / 50);
        //squareSize = squareSize * .65;
        
    }

    var fuzzy = 0.001;
    var inc = (Math.PI - fuzzy) / prec;
    var discoBall = document.getElementById(discoBallId);

    for (var t = fuzzy; t < Math.PI; t += inc) {
        var z = radius * Math.cos(t);
        var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
        var circumference = Math.abs(2 * Math.PI * currentRadius);
        var squaresThatFit = Math.floor(circumference / squareSize);
        var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
        for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
            var square = document.createElement("div");
            var squareTile = document.createElement("div");
            squareTile.style.width = squareSize + "px";
            squareTile.style.height = squareSize + "px";
            squareTile.style.transformOrigin = "0 0 0";
            squareTile.style.webkitTransformOrigin = "0 0 0";
            squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
            squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
            if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
                squareTile.style.backgroundColor = randomColor("bright", isColorful);
            } else {
                squareTile.style.backgroundColor = randomColor("any", isColorful);
            }
            square.appendChild(squareTile);
            square.className = "square";
            squareTile.style.webkitAnimation = "reflect 2s linear infinite";
            squareTile.style.webkitAnimationDelay = String(randomNumber(0, 20) / 10) + "s";
            squareTile.style.animation = "reflect 2s linear infinite";
            squareTile.style.animationDelay = String(randomNumber(0, 20) / 10) + "s";
            squareTile.style.backfaceVisibility = "hidden";
            var x = radius * Math.cos(i) * Math.sin(t);
            var y = radius * Math.sin(i) * Math.sin(t);
            square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
            square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
            discoBall.appendChild(square);
        }
    }
}

function randomColor(type, isColorful) {
    var c;
    if (type == "bright") {
        c = randomNumber(130, 255);
    } else {
        c = randomNumber(110, 190);
    }
    if (isColorful)
    {
        return  "rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")";
    }
    return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setDiscoBallSize(size, discoBallId) {
    const discoBallLight = document.getElementById(discoBallId+"-light");
    const discoBall = document.getElementById(discoBallId)

    discoBall.style.width = size + "px";
    discoBallLight.style.height = size + "px";
}

function clearDiscoBall(discoBallGuid) {
    const discoBall = document.getElementById(discoBallGuid);
    if (discoBall) {
        while (discoBall.firstChild) {
            discoBall.removeChild(discoBall.firstChild);
        }
    }
}

function pauseDiscoBall(discoBallId) {
    const discoBall = document.getElementById(discoBallId);
    if (discoBall) {
        discoBall.classList.add('paused');
    }
}

function restartDiscoBall(discoBallId) {
    const discoBall = document.getElementById(discoBallId);
    if (discoBall) {
        discoBall.classList.remove('paused');
    }
}
