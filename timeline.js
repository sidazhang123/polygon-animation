const ids = [["p1"], ["p2"], ["p3"], ["p4"], ["p5"], ["p6"], ["p7", "p7_1"], ["p8"], ["p9", "p9_1", "p9_2", "p9_3"],
    ["p10", "p10_1", "p10_2"], ["p11", "p11_1"], ["p12", "p12_1"], ["p13", "p13_1", "p13_2", "p13_3"], ["p14"],
    ["p15", "p15_1"], ["p16"], ["p17"]];
const pre_explosion = {
    'ori': ['p3', 'p4', 'p7', 'p9', 'p10_2', 'p11_1', 'p15', 'p5', 'p2', 'p1', 'p10', 'p10_1', 'p6', 'p13_2', 'p11', 'p13_3', 'p16', 'p13_1'],
    'bright': ['p7_1', 'p13', 'p17'], 'grey': ['p9_3', 'p9_2', 'p12'], 'dark': ['p9_1', 'p12_1', 'p14', 'p15_1', 'p8']
};
const three_d_x = [0.8, 0.8, 0.7, 0.6, 0.6, 0.7, 0.8, 0.8, 0.5, 0.8, 0.8, 0.6, 0.5, 0.6, 0.8, 0.6, 0.5, 0.5, 0.7, 0.8, 0.8, 0.7, 0.7, 0.7, 0.5, 0.6, 0.8, 0.7, 0.5];
const three_d_y = [0.4, 0.4, 0.8, 0.4, 0.8, 0.2, 0.2, 0.3, 0.7, 0.2, 0.9, 0.2, 0.5, 0.5, 0.2, 0.2, 0.2, 0.4, 0.4, 0.5, 0.9, 0.3, 0.8, 0.8, 0.8, 0.7, 0.3, 0.2, 0.5];
const three_d_z = [0.7, 0.5, 0.4, 0.8, 0.4, 0.8, 0.6, 0.5, 0.4, 0.7, 0.6, 0.7, 0.4, 0.3, 0.4, 0.5, 0.7, 0.5, 0.4, 0.6, 0.6, 0.5, 0.8, 0.7, 0.3, 0.6, 0.3, 0.3, 0.8];
const t = [8, 9, 11, 14, 11, 10, 9, 10, 15, 11, 11, 10, 13, 11, 10, 11, 10, 14, 10, 10, 10, 15, 10, 11, 8, 15, 14, 14, 9];

var offset_x = [-26.0650273426, -12.7127632569, 54.6369468234, 26.5, 19.8509230328, -32.3702910152, -51.6187950266, 63.3771563995, -3.7759223463, -61.9150311515, 26.2023322279, -20.9643426533, 47.2294641855, -53.7401153702, -47.531396795, 28.5227943631, 1.3959798681, -23.8211076386, -30.1787153336, -0.3472963553, -67.6023638653, 45.4298669372, 0.6457390382, 58.0036983703, -11.576150413, 42.4352447854, 3.4345619168, -22.7860521516, -57.2221515618];
var offset_y = [-24.72135955, -9.4414764793, -40.754317332, -12.1644951198, 11, 26.5, -7.2811529494, -13.215728212, 1.6934532692, 5.7522790213, -58.9191425505, 66.3479606057, 7.8784620241, 13.7818677909, -2.9088577215, -3.0467335851, -24.256087312, -40.2561872614, -59.2396498312, -76.9009356751, -26.8467875173, 10.2606042998, 1.149813096, 23.1879442421, -49.7278473101, 48.7185032393, -42.0011977344, -37.4553637633, -20.8608542098];


const svg_con = document.getElementById("svg_con");
const div_y = svg_con.offsetHeight;
const div_x = svg_con.offsetWidth;
offset_x = offset_x.map(function (x) {
    return x * div_x / 100;
});
offset_y = offset_y.map(function (y) {
    return y * div_y / 100;
});
var document_svg = window.document.getElementById("svg_1");

for (var i = 0; i < 29; i++) {
    var style = document.createElement('style');
    style.innerHTML = gencss(i, three_d_x, three_d_y, three_d_z, t, offset_x, offset_y);
    document.head.appendChild(style);
}


var count = -1;
var interval = setInterval(function () {
    // alert(count);
    if (count > 15) {
        window.clearInterval(interval);
    }
    count = count + 1;
    for (var i = 0; i < ids[count].length; i++) {
        var id = ids[count][i];
        // alert(id);
        var element = document_svg.getElementById(id);

        element.classList.add("animated");
        element.classList.add("fadeIn");

    }
    if (count > 15) {

        window.clearInterval(interval);
        element = document_svg.getElementById("layer_1");
        element.classList.add("animated_long");
        element.classList.add("scaleDown");
        setTimeout(function () {
            var coord;
            var ind;
            for (var i = 0; i < pre_explosion['ori'].length; i++) {
                ind = i + 1;
                id = pre_explosion['ori'][i];
                element = document_svg.getElementById(id);
                element.classList = "";
                element.classList.add("cls-2-ori");
                coord = element.getBBox();
                element.setAttribute("style", "transform-origin:" + (coord.x + (coord.width / 2)).toString() + "px "
                    + (coord.y + (coord.height / 2)).toString() + "px; ");
                element.classList.add("final-" + i.toString());
            }
            for (var i = 0; i < pre_explosion['bright'].length; i++) {
                id = pre_explosion['bright'][i];
                element = document_svg.getElementById(id);
                element.classList = "";
                element.classList.add("cls-2-bright");
                coord = element.getBBox();
                element.setAttribute("style", "transform-origin:" + (coord.x + (coord.width / 2)).toString() + "px "
                    + (coord.y + (coord.height / 2)).toString() + "px; ");
                element.classList.add("final-" + (i + 18).toString());
            }
            for (var i = 0; i < pre_explosion['grey'].length; i++) {
                id = pre_explosion['grey'][i];
                element = document_svg.getElementById(id);
                element.classList = "";
                element.classList.add("cls-2-grey");
                coord = element.getBBox();
                element.setAttribute("style", "transform-origin:" + (coord.x + (coord.width / 2)).toString() + "px "
                    + (coord.y + (coord.height / 2)).toString() + "px; ");
                element.classList.add("final-" + (i + 21).toString());
            }
            for (var i = 0; i < pre_explosion['dark'].length; i++) {
                id = pre_explosion['dark'][i];
                element = document_svg.getElementById(id);
                element.classList = "";
                element.classList.add("cls-2-dark");
                coord = element.getBBox();
                element.setAttribute("style", "transform-origin:" + (coord.x + (coord.width / 2)).toString() + "px "
                    + (coord.y + (coord.height / 2)).toString() + "px; ");
                element.classList.add("final-" + (i + 24).toString());
            }


        }, 1500);

    }


}, 80);


function gencss(i, x, y, z, t, off_x, off_y) {
    return '@keyframes sliding' + i.toString() + ' {from {transform: translate(0px, 0px);}' +
        '60%{transform:translate(' + (off_x[i] * 0.9).toString() + 'px,' + (off_y[i] * 0.9).toString() + 'px);}to {' +
        'transform:translate(' + off_x[i].toString() + 'px,' + off_y[i].toString() + 'px);}}' +
        '@keyframes rot' + i.toString() + '-inf {' +
        'from {transform:translate(' + off_x[i].toString() + 'px,' + off_y[i].toString() + 'px) rotate3d(0,0,0,0deg);}50% {' +
        'transform: translate(' + off_x[i].toString() + 'px,' + off_y[i].toString() + 'px) rotate3d(' + x[i] + ', ' + y[i] + ', ' + z[i] + ', ' + (i % 2 == 0 ? 180 : -180).toString() + 'deg); }to {' +
        'transform: translate(' + off_x[i].toString() + 'px,' + off_y[i].toString() + 'px) rotate3d(' + x[i] + ', ' + y[i] + ', ' + z[i] + ', ' + (i % 2 == 0 ? 360 : -360).toString() + 'deg);}}' +
        '.final-' + i.toString() + '{animation: sliding' + i.toString() + ' 1500ms linear forwards,' +
        'rot' + i.toString() + '-inf ' + t[i].toString() + 's linear 1500ms infinite;}';
}


// transform-origin:'+(coord.x+(coord.width/2)).toString()+'px'+(coord.y+(coord.height/2)).toString()+'px; \