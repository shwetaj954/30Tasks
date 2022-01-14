document.getElementById('graybutton').onclick=switchGray;
document.getElementById('mountain').onclick=switchmountain;
document.getElementById('skybackground').onclick=switchsky;
document.getElementById('techbuton').onclick=switchtech;
document.getElementById('seabutton').onclick=switchsea;
document.getElementById('flawerbuton').onclick=switchflawer;
document.getElementById('treebuton').onclick=switchtree;
document.getElementById('leafbuton').onclick=switchleaf;


function switchGray(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/water-drop-rain-leaf-petal-wet-661719-pxhere.com\ \(1\).jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
    
}
function switchmountain(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/landscape-tree-nature-forest-wilderness-mountain-547383-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchsky(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/beach-landscape-sea-coast-nature-sand-1033649-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchtech(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/technology-star-vehicle-space-float-moon-1172923-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchsea(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/landscape-sea-nature-ocean-wilderness-light-1071666-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchflawer(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/blossom-plant-flower-purple-petal-floral-991377-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchtree(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/tree-nature-forest-track-railway-railroad-99262-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}
function switchleaf(){
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./img/structure-leaf-flower-petal-orange-line-1086763-pxhere.com.jpg')";
    document.getElementsByTagName('body')[0].style.color='white';
    document.getElementsByTagName('body')[0].style.backgroundPosition="top center";
}