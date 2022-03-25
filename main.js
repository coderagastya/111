Webcam.set({
    width:350,
    height:350,
image_format:"png",
png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot() {
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
})
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yj3mBkzah/model.json',modelLoaded)

function modelLoaded(){
    console.log('modelloaded');
}

function speak() {
    var synth=window.speechSynthesis
    speak_data1="the first prediction is"+prediction1;
    var utterThis= new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
}
