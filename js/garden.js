var images = [
  "Images/Yerevan.jpg",
  "Images/Pisa.jpg",
  "Images/Argentina.jpg",
  "Images/Germany_Braunschweig.jpg",
  "Images/Real_Jardín_Madrid.jpg",
  "Images/Singapore_Marina.jpg",
  "Images/USA_ Japanese.jpg"
];


var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}


function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}


function show_hide() {
  if (document.getElementById("appear").style.display == 'none') {

    document.getElementById("appear").style.display = 'block';
  } else {

    document.getElementById("appear").style.display = 'none';
  }
}
