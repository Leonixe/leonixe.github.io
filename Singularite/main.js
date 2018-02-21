let innerBoxWidth = 800
let innerBoxHeight = 600
let outerBoxWidth = 1100
let outerBoxHeight = 900


var DATA = new Array();

var color = ["#fffdf1", "#fce3ba", "#ecb282", "#e39d5f", "#db8343", "#d25c2c", "#e32030", "#009CAD"]

let svg = d3.select('body')
    .append('svg')
    .attr(
        'viewBox',
        '0 0 ' + outerBoxWidth + ' ' + outerBoxHeight
    )
    .attr('preserveAspectRatio', 'xMidYMid slice')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('x', 0)
    .attr('y', 0)
    .append('g');


// Récupère les data du csv
d3.csv('./data.csv', function(data) {
    data.forEach(function(entry) {
        entry.angle = 0;
        entry.sceneDistance = entry.Distance * 250 / 30;
        DATA.push(entry);
    })
    updateView(DATA);
    createLaunchScreen();

    d3.timer(updateData)


})

var velocityInput = document.getElementById('velocity');
var velocity = 1;
velocityInput.addEventListener('input', function(event) {
    velocity = parseFloat(event.target.value);
})

// Met à jour la position des points
function updateView(data) {
    svg.selectAll('.entry')
        .data(data)
        .attr("cx", getEntryCenterX)
        .attr("cy", getEntryCenterY)
        .enter()
        .append('circle')
        .style('cursor', 'pointer')
        .attr('class', 'entry')
        .attr("cx", getEntryCenterX)
        .attr("cy", getEntryCenterY)
        .attr("r", 3.5)
        .attr('opacity', 1)
        .style("fill", getColor)
        .on("click", function(entry) {
            var t1 = d3.transition()
                .duration(400)
                .ease(d3.easeExp)

            var color = d3.select(this).attr('style');
            d3.select('.circleVisualiser')
                .transition(t1)
                .style("fill", color.split(/(fill: )/)[2].split(/(;)/)[0])

            d3.select('.isClicked')
                .attr("class", 'entry')
                .transition(t1)
                .attr("r", 3.5)
            d3.select(this)
                .attr("class", 'entry isClicked')
                .transition(t1)
                .attr("r", 9)
            d3.select('.dataVisualiser')
                .text('' + entry.Distance + 'km - ' + (entry.Temps > 60 ? '01:' + (entry.Temps - 60) : '00:' + entry.Temps) + '')

        })
        .exit()
        .remove()
}


// Récupère la couleur en fonction de la vitesse convertie en km/h
function getColor(entry) {
    var angularSpeed = ((Math.PI * 2) / entry.Temps) * (60.0);
    var velocity = angularSpeed * (entry.Distance / 2.0);

    if (entry.Distance == 12.4) {
        return '#009CAD'
    }

    if (velocity < 10) {

        return color[0];

    } else if (velocity > 15 && velocity < 20) {

        return color[1];

    } else if (velocity > 20 && velocity < 25) {

        return color[2];

    } else if (velocity > 25 && velocity < 30) {

        return color[3];

    } else if (velocity > 30 && velocity < 35) {

        return color[4];

    } else if (velocity > 35 && velocity < 40) {

        return color[5];

    } else if (velocity > 40) {

        return color[6];

    }

}

var lastDelta = 0;

// Met à jour la position en fonction de la modification des données
function updateData(delta) {
    let deltaMin = (delta - lastDelta) / (1000.0 * 60.0);
    for (index in DATA) {
        entry = DATA[index];
        entry.angle += (Math.PI * 2) * (deltaMin / entry.Temps) * velocity;
    }

    updateView(DATA);
    lastDelta = delta;

}

// Replace les points à leur position d'origine
function resetScene() {

    d3.selectAll(".entry")
        .transition()
        .duration(500)
        .ease(d3.easeExp)
        .attr('r', 0)
        .on('end', function() {
            for (index in DATA) {
                entry = DATA[index];
                entry.angle = 0;
            }
            updateView(DATA)
        })

    d3.selectAll(".entry")
        .transition()
        .delay(500)
        .duration(500)
        .ease(d3.easeExp)
        .attr('r', 3.5)



}

createBackground();



function createBackground() {
    createGrid(5, 50);
    createBackCircle(5, 50);
}

// créer la graduation en km
function createBackCircle(nbCircle, radiusStep) {
    let maxRadius = (nbCircle + 1) * radiusStep;
    let left = sceneCenterX(-maxRadius / 2);

    for (let i = 0; i < nbCircle; ++i) {
        let currentCircleRadius = radiusStep * (i + 1);
        svg.append("circle")
            .attr("cx", left + currentCircleRadius)
            .attr("cy", sceneCenterY(0))
            .attr("r", currentCircleRadius)
            .attr("stroke", '#69629d')
            .attr("stroke-width", 1)
            .attr("fill", 'none');
    }
}

// créer la grille du fond
function createGrid(nbCircle, radiusStep) {
    let maxRadius = (nbCircle + 1) * radiusStep;
    let left = sceneCenterX(-maxRadius / 2);

    for (let i = 0; i <= nbCircle; ++i) {
        let x = left + radiusStep * i * 2;
        svg.append('polyline')
            .style('stroke', '#181433')
            .attr('points', [
                [x, realTop(0)],
                [x, realBottom(0)]
            ]);
    }

    let top = sceneCenterY(-radiusStep * nbCircle);
    for (let i = 0; i <= nbCircle; ++i) {
        let y = top + radiusStep * i * 2;
        svg.append('polyline')
            .style('stroke', '#181433')
            .attr('points', [
                [realLeft(0), y],
                [realRight(0), y]
            ]);
    }

    for (let i = 0; i < 5; i++) {
        svg.append('polyline')
            .style('stroke', '#181433')
            .attr('points', [
                [0, 300 + 100 * i],
                [400, 200 + 100 * i]
            ]);

        svg.append('polyline')
            .style('stroke', '#181433')
            .attr('points', [
                [900, 300 + 100 * i],
                [1100, 200 + 100 * i]
            ]);
    }
}
createDataVisualiser()
createLegend();

// créer la légende

function createLegend() {
    var kmText = 10;
    for (let i = 0; i < 8; i++) {
        svg.append('circle')
            .attr("cx", 100)
            .attr("cy", 595 - (18 * i))
            .attr("r", 5)
            .style("fill", color[i]);


        if (i < 7) {
            svg.append('text')
                .style('fill', '#bebac6')
                .attr('x', 120)
                .attr('y', 599 - (18 * i))
                .attr('font-family', 'PT Serif, serif')
                .attr('font-size', '10')
                .text('+ ' + kmText + ' km/h')
            kmText += 5;
        } else {
            svg.append('text')
                .style('fill', '#bebac6')
                .attr('x', 120)
                .attr('y', 599 - (18 * i))
                .attr('font-family', 'PT Serif, serif')
                .attr('font-size', '10')
                .text('moyenne')
        }

    }
    kmText = 6;
    for (let i = 0; i < 5; i++) {
        svg.append('text')
            .style('fill', '#bebac6')
            .attr('x', 510 + (i * 100))
            .attr('y', sceneCenterY(0) + 7.5)
            .attr('font-family', 'Pathway Gothic One, sans-serif')
            .attr('font-size', '15')
            .text('' + kmText + ' km')
        kmText += 6;
    }

    for (let i = 0; i < 2; i++) {
        svg.append('text')
            .style('fill', '#bebac6')
            .attr('x', 200)
            .attr('y', 695 + 15 * i)
            .attr('font-family', 'PT Serif, serif')
            .attr('font-size', '10')
            .text(i == 0 ? 'Romain Demongivert' : "Lucas Domingues")

        svg.append('rect')
            .style('fill', '#69629d')
            .attr('width', 5)
            .attr('height', 19)
            .attr('x', 910 + 9 * i)
            .attr('y', 638)
    }

    svg.append('polyline')
        .style('stroke', '#bebac6')
        .style('stroke-width', '2')
        .attr('points', [
            [100, 200],
            [200, 200]
        ]);

    svg.append('text')
        .style('fill', '#bebac6')
        .attr('x', 975)
        .attr('y', 360)
        .attr('font-family', 'Pathway Gothic One, sans-serif')
        .attr('font-size', '25')
        .attr('class', 'reset')
        .attr('cursor', 'pointer')
        .text("RESTART")
        .on('click', function() {

            resetScene()



        })

    svg.append('text')
        .style('fill', '#69629d')
        .attr('x', 1055)
        .attr('y', 655)
        .attr('font-family', 'Pathway Gothic One, sans-serif')
        .attr('font-size', '25')
        .attr('class', 'reset')
        .text("x4")
}


// Créer le visualiseur de donnée
function createDataVisualiser() {
    svg.append('circle')
        .attr('class', 'circleVisualiser')
        .attr("cx", 100)
        .attr("cy", 395)
        .attr("r", 5)
        .style("fill", "#009CAD");

    svg.append('text')
        .attr('class', 'dataVisualiser')
        .style('fill', '#bebac6')
        .attr('x', 120)
        .attr('y', 400)
        .attr('font-family', 'PT Serif, serif')
        .attr('font-size', '10')
        .text('')
}

// Créer la page d'accueil

function createLaunchScreen() {
    svg.append('g')
        .attr('class', 'screen')
        .attr('opacity', 1)
        .on('click', function() {
            d3.select('.screen')
                .transition()
                .duration(1000)
                .attr("opacity", 0)

            d3.select(this)
                .transition()
                .delay(1000)
                .remove()

            d3.select('#velocity')
                .transition()
                .delay(200)
                .style('opacity', 1)
        })
        .append('rect')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('x', 0)
        .attr('y', 0)
        .style('fill', '#211c42')
        .attr('opacity', '1')

    let maxRadius = (5 + 1) * 10;
    let left = sceneCenterX(-340 / 2);

    for (let i = 0; i < 5; ++i) {
        let currentCircleRadius = 35 * (i + 1);
        d3.select('.screen')
            .append("circle")
            .attr("cx", left + currentCircleRadius)
            .attr("cy", sceneCenterY(0))
            .attr("r", currentCircleRadius)
            .attr("stroke", '#69629d')
            .attr("stroke-width", 2)
            .attr("fill", 'none');
    }

    d3.select('.screen')
        .append('text')
        .style('fill', '#bebac6')
        .attr('x', sceneCenterX(-370))
        .attr('y', sceneCenterY(60))
        .attr('font-family', 'Pathway Gothic One, sans-serif')
        .attr('font-size', '200')
        .text("SINGULARITE")

    d3.select('.screen')
        .append('polyline')
        .style('stroke', '#bebac6')
        .attr('stroke-width', '2px')
        .attr('points', [
            [550, 700],
            [550, 900]
        ]);

    d3.select('.screen')
        .append('text')
        .style('fill', '#bebac6')
        .attr('x', sceneCenterX(0) - 25)
        .attr('y', sceneCenterY(0) - 225)
        .attr('font-family', 'PT Serif, serif')
        .attr('font-size', '15')
        .text("Dataviz")

    d3.select('.screen')
        .append('text')
        .style('fill', '#bebac6')
        .attr('x', sceneCenterX(0) - 30)
        .attr('y', sceneCenterY(0) - 205)
        .attr('font-family', 'PT Serif, light')
        .attr('font-size', '15')
        .text("workshop")


}

// créer le texte
var positionTextY = 215;
svg.append('text')
    .style('fill', '#bebac6')
    .attr('x', 100)
    .attr('y', sceneCenterY(0) - positionTextY)
    .attr("width", 300)
    .attr('font-family', 'PT Serif, light')
    .attr('font-size', '13')
    .text("Cette représentation traite des trajets effectués par les étudiants ")


svg.append('text')
    .style('fill', '#bebac6')
    .attr('x', 100)
    .attr('y', sceneCenterY(0) - positionTextY + 20)
    .attr("width", 300)
    .attr('font-family', 'PT Serif, light')
    .attr('font-size', '13')
    .text("en BDDI entre l’école des Gobelins et leurs domiciles.")

svg.append('text')
    .style('fill', '#bebac6')
    .attr('x', 100)
    .attr('y', sceneCenterY(0) - positionTextY + 40)
    .attr("width", 300)
    .attr('font-family', 'PT Serif, light')
    .attr('font-size', '13')
    .text("Son but est de montrer visuellement qu’à Paris, le trajet")

svg.append('text')
    .style('fill', '#bebac6')
    .attr('x', 100)
    .attr('y', sceneCenterY(0) - positionTextY + 60)
    .attr("width", 300)
    .attr('font-family', 'PT Serif, light')
    .attr('font-size', '13')
    .text(" le plus court n’est pas toujours le plus rapide.")

//  fonctions permettant de reprendre la position et le centre de la scène et des différents cercles
function getCircleCenterX(radius) {
    return sceneCenterX(-150) + radius;
}

function getCircleCenterY(radius) {
    return sceneCenterY(0);
}

function getEntryCenterX(entry) {
    return getCircleCenterX(entry.sceneDistance) - (entry.sceneDistance) * Math.cos(entry.angle);

}

function getEntryCenterY(entry) {
    return getCircleCenterY(entry.sceneDistance) - (entry.sceneDistance) * Math.sin(entry.angle);
}

function realLeft(x) {
    return x;
}

function realRight(x) {
    return outerBoxWidth - x;
}

function realTop(y) {
    return y;
}

function realBottom(y) {
    return outerBoxHeight - y;
}

function sceneLeft(x) {
    return (outerBoxWidth - innerBoxWidth) / 2 + x;
}

function sceneTop(y) {
    return (outerBoxHeight - innerBoxHeight) / 2 + y;
}

function sceneRight(x) {
    return left(0) + innerBoxWidth - x;
}

function sceneBottom(y) {
    return top(0) + innerBoxHeight - y;
}

function sceneCenterX(x) {
    return outerBoxWidth / 2 + x;
}

function sceneCenterY(y) {
    return outerBoxHeight / 2 + y;
}
