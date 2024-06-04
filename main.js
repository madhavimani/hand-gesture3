
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera1");
Webcam.attach('#camera1');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XXyUXRrSn/model.json',modelloaded);

function check(){
    img = document.getElementById("captured_image");
classifier.classify(img,gotResult);
}

function gotResult(error, results){
    if(error){
    console.error("error");
}
else{
console.log(results);
document.getElementById("result_gesture_name").innerHTML = results[0].label;
document.getElementById("result_gesture_name2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();
if(results[0].label == "L/loser"){
    document.getElementById("update_gesture1").innerHTML = "&#128070;";

}
if(results[0].label == "Perfect"){
    document.getElementById("update_gesture1").innerHTML = "&#128076;";

}
if(results[0].label == "High five"){
    document.getElementById("update_gesture1").innerHTML = "&#9995;";
}
if(results[0].label == "Selfie"){
    document.getElementById("update_gesture1").innerHTML = "&#9996;";
}if(results[0].label == "Good"){
    document.getElementById("update_gesture1").innerHTML = "&#128077;";
}

if(results[0].label == "L/loser"){
    document.getElementById("update_gesture2").innerHTML = "&#128070;";

}
if(results[0].label == "Perfect"){
    document.getElementById("update_gesture2").innerHTML = "&#128076;";

}
if(results[0].label == "High five"){
    document.getElementById("update_gesture2").innerHTML = "&#9995;";
}
if(results[0].label == "Selfie"){
    document.getElementById("update_gesture2").innerHTML = "&#9996;";
    
}if(results[0].label == "Good"){
    document.getElementById("update_gesture2").innerHTML = "&#128077;";
}

}
}