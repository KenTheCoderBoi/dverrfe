Webcam.set(
    height=300,
    width=300,
    image_format="png",
    png_quality=90
)
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takepic(){
    Webcam.snap(function(data_uri){
    document.getElementById("output").innerHTML = "<img id='captured_image' src="+data_uri+">"
    })
}

console.log("ml5 version",ml5.version)
classifier = ml5.imageClassifier("MobileNet",modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
function identify(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    } else{
        console.log(results)
        document.getElementById("results").innerHTML = results[0].label+","
        document.getElementById("results2").innerHTML = results[1].label+"," 
        document.getElementById("results3").innerHTML = results[2].label
    }
}