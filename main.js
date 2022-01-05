function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/A4ZQZD4WV/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult (error,results) {
    if(error){
        console.error(error);
    }
    else{console.log(results);
    randomnumberr = Math.floor(Math.random()*255) + 1;
    randomnumberg = Math.floor(Math.random()*255) + 1;
    randomnumberb = Math.floor(Math.random()*255) + 1;
    document.getElementById("result_label").innerHTML = "I can hear-" + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy-" + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + randomnumberr + "," + randomnumberg + "," + randomnumberb + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + randomnumberr + "," + randomnumberg + "," + randomnumberb + ")";
    img1=document.getElementById("dog");
    img2=document.getElementById("cat");
    img3=document.getElementById("chicken");
    if(results[0].label == "chicken"){
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
    }
    else if(results[0].label == "cat"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
    }
    else{
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
    }
}
    }