
function alkaliMetalStyle() {
    var alkaliMetals = document.getElementsByClassName("alkaliMetals");
    for (var i = 0; i < alkaliMetals.length; i++) {
        alkaliMetals[i].style.transform = "scale(1.1) translate(10px, 10px)";
        alkaliMetals[i].style.opacity = "90%";
     }
}
document.getElementById("alkaliRadio").onclick = alkaliMetalStyle;

function metalloidStyle() {
    var metalloids = document.getElementsByClassName("metalloid");
    for (var i = 0; i < metalloids.length; i++) {
        metalloids[i].style.transform = "scale(1.1) translate(10px, 10px)";
        metalloids[i].style.opacity = "90%";
     }
}
document.getElementById("metalloidsRadio").onclick = metalloidStyle;

function actinidesStyle() {
    var actinides = document.getElementsByClassName("actinides");
    for (var i = 0; i < actinides.length; i++) {
        actinides[i].style.transform = "scale(1.1) translate(10px, 10px)";
        actinides[i].style.opacity = "90%";
     }
}
document.getElementById("actinidesId").onclick = actinidesStyle;

function alkalineEarthId() {
    var alkalineEarth = document.getElementsByClassName("alkaliEarth");
    for (var i = 0; i < alkalineEarth.length; i++) {
        alkalineEarth[i].style.transform = "scale(1.1)";
        alkalineEarth[i].style.opacity = "90%";
     }
}
document.getElementById("alkalineEarthId").onclick = alkalineEarthId;

function reactiveNonMetalsId() {
    var reactiveNonMetals = document.getElementsByClassName("reactiveNonMetal");
    for (var i = 0; i < reactiveNonMetals.length; i++) {
        reactiveNonMetals[i].style.transform = "scale(1.1)";
        reactiveNonMetals[i].style.opacity = "90%";
     }
}
document.getElementById("reactiveNonMetalsId").onclick = reactiveNonMetalsId;

function unknownPropertiesId() {
    var unknownProperties = document.getElementsByClassName("unknown");
    for (var i = 0; i < unknownProperties.length; i++) {
        unknownProperties[i].style.transform = "scale(1.1) translate(10px, 10px)";
        unknownProperties[i].style.opacity = "90%";
     }
}
document.getElementById("unknownPropertiesId").onclick = unknownPropertiesId;

function transitionMetalsId() {
    var transitionMetals = document.getElementsByClassName("transMetals");
    for (var i = 0; i < transitionMetals.length; i++) {
        transitionMetals[i].style.transform = "scale(1.1)";
        transitionMetals[i].style.opacity = "90%";
     }
}
document.getElementById("transitionMetalsId").onclick = transitionMetalsId;

function nobleGasesId() {
    var nobleGases = document.getElementsByClassName("noble");
    for (var i = 0; i < nobleGases.length; i++) {
        nobleGases[i].style.transform = "scale(1.1)";
        nobleGases[i].style.opacity = "90%";
     }
}
document.getElementById("nobleGasesId").onclick = nobleGasesId;

function postTransMetalsId() {
    var postTransMetals = document.getElementsByClassName("postTrans");
    for (var i = 0; i < postTransMetals.length; i++) {
        postTransMetals[i].style.transform = "scale(1.1) translate(10px, 10px)";
        postTransMetals[i].style.opacity = "90%";
     }
}
document.getElementById("postTransMetalsId").onclick = postTransMetalsId;

function lanthanidesId() {
    var lanthanides = document.getElementsByClassName("lanth");
    for (var i = 0; i < lanthanides.length; i++) {
        lanthanides[i].style.transform = "scale(1.1) translate(10px, 10px)";
        lanthanides[i].style.opacity = "90%";
     }
}
document.getElementById("lanthanidesId").onclick = lanthanidesId;
function untoggle() {
    document.getElementById("alkaliRadio").checked = false;
    document.getElementById("metalloidsRadio").checked = false;
    document.getElementById("actinidesId").checked = false;
    document.getElementById("alkalineEarthId").checked = false;
    document.getElementById("reactiveNonMetalsId").checked = false;
    document.getElementById("unknownPropertiesId").checked = false;
    document.getElementById("transitionMetalsId").checked = false;
    document.getElementById("nobleGasesId").checked = false;
    document.getElementById("postTransMetalsId").checked = false;
    document.getElementById("lanthanidesId").checked = false;
}

function clearAll(){
    var allElements = document.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.transform = "scale(1) translate(0px, 0px)";
        allElements[i].style.opacity = "100%";
    }
    document.getElementById("alkaliRadio").checked = false;
    document.getElementById("metalloidsRadio").checked = false;
    document.getElementById("actinidesId").checked = false;
    document.getElementById("alkalineEarthId").checked = false;
    document.getElementById("reactiveNonMetalsId").checked = false;
    document.getElementById("unknownPropertiesId").checked = false;
    document.getElementById("transitionMetalsId").checked = false;
    document.getElementById("nobleGasesId").checked = false;
    document.getElementById("postTransMetalsId").checked = false;
    document.getElementById("lanthanidesId").checked = false;
}
document.getElementById("untoggleId").onclick = clearAll;