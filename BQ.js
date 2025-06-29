//js to css 

let button = document.querySelector(".option");
let startbutton = document.querySelector(".startbutton")
let submitbutton =document.querySelector(".submit")
let filler = document.querySelector(".filler");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let toggleButton = document.querySelector(".stylebutton");
let toggle = false;
//point system

let counter1=0;
let counter2=0;
let counter3=0;
let counter4=0; 

//results 
    //Brr Brr Patapim
    //Tung Tung Tung Sahur 
    //Chimpazini Bananini
    //Tralalero Tralala 

//misc var
let mposY;
let mposX;
let submited = false;
let qIndex = 1;
    //click then spawn (do if have time)

    let fillers = document.querySelectorAll(".filler");

fillers.forEach(filler => {
    filler.style.top = (Math.floor(Math.random() * 250 + 500)) + "px";
    filler.style.left = Math.floor(Math.random() * 1300) + "px";
});

const colorwheel = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
colorIndex = 0;
setInterval(function(colorchange){
    if(toggle === true)
    {
    if (colorIndex >= colorwheel.length)
    {
        colorIndex = 0;
    }
    else{
    document.querySelector(".title").style.color = colorwheel[colorIndex]
    console.log("color has been changed")
    colorIndex++;
    }

fillers.forEach(filler => {
    filler.style.top = (Math.floor(Math.random() * 250 + 500)) + "px";
    filler.style.left = Math.floor(Math.random() * 950) + "px";
});


    }
    else{}
}, 100);


toggleButton.addEventListener("click", function(){
if(toggle ===true)
{
toggle = false;
 document.querySelector(".title").style.color = "black"
}
else
{
toggle = true;
}
console.log("anyeurusm")
});







startbutton.addEventListener("click", function(){

document.querySelector(".title-page").style.display = "none";
document.querySelector(".qset1").style.display = "flex";

})

// Add this to your JS file or in a <script> tag
//document.querySelector('.title-page').classList.add('shrink-spin');


// Attach event listeners to all option1 buttons
document.querySelectorAll('.option1').forEach(option1 => {
    option1.addEventListener("click", function() {
        if(submited === false) {
            counter1 += 2;
            counter2 += 3;
            counter3 += 1;
            counter4 += 5;
            option1.style.borderColor = "blue";
            submited = true;
        }
        console.log(qIndex);
    });
});

// Attach event listeners to all option2 buttons
document.querySelectorAll('.option2').forEach(option2 => {
    option2.addEventListener("click", function() {
        if(submited === false) {
            counter1 += 5;
            counter2 += 1;
            counter3 += 2;
            counter4 += 3;
            option2.style.borderColor = "blue";
            submited = true;
        }
        console.log(qIndex);
    });
});

// Attach event listeners to all option3 buttons
document.querySelectorAll('.option3').forEach(option3 => {
    option3.addEventListener("click", function() {
        if(submited === false) {
            counter1 += 1;
            counter2 += 5;
            counter3 += 3;
            counter4 += 2;
            option3.style.borderColor = "blue";
            submited = true;
        }
        console.log(qIndex);
    });
});

// Attach event listeners to all option4 buttons
document.querySelectorAll('.option4').forEach(option4 => {
    option4.addEventListener("click", function() {
        if(submited === false) {
            counter1 += 3;
            counter2 += 2;
            counter3 += 5;
            counter4 += 1;
            option4.style.borderColor = "blue";
            submited = true;
        }
        console.log(qIndex);
    });
});


document.querySelectorAll('.submit').forEach(submitBtn => {
    submitBtn.addEventListener("click", function() {
        if (submited === true) {
            document.querySelector(`.qset${qIndex}`).classList.add('shrink-spin');
            
        setTimeout(function() {

            document.querySelector(`.qset${qIndex}`).style.display = "none";
            qIndex += 1;
            submited = false;
            console.log(qIndex);
            
            let nextQset = document.querySelector(`.qset${qIndex}`);
            if (nextQset) {
                nextQset.style.display = "flex";
            }
            // Optionally reset option borders here if needed
            console.log(counter1, counter2, counter3, counter4);
            console.log("This message appears after 2 seconds.");

        }, 1000); 
        }
    });
});

//to-do list
    // assign point values to choices
    // get transition spinning animation thingy linked to submit button working
    // make end scoring system 


//random position maker 

document.addEventListener("click", function(){

fillers.forEach(filler => {
    filler.style.top = (Math.floor(Math.random() * 250 + 500)) + "px";
    filler.style.left = Math.floor(Math.random() * 950) + "px";
});

mposY = event.clientY;
mposX = event.clientX;
console.log (mposX + ", " + mposY);
})

document.querySelector('.reveal').addEventListener('click', function() {
    // Find the highest counter
    let scores = [counter1, counter2, counter3, counter4];
    let maxIndex = scores.indexOf(Math.max(...scores));

    // Hide all result images first
    document.querySelectorAll('.result1, .result2, .result3, .result4').forEach(img => {
        img.style.display = "none";
    });

    // Show the correct image based on the highest score
    let resultClass = `.result${maxIndex + 1}`;
    let resultImg = document.querySelector(resultClass);
    if (resultImg) {
    
        resultImg.style.display = "block";
        resultImg.classList.add('grow-spin');

        document.querySelector(".result-page").style.display = "none";
        resultImg.style.height = "100vh";
        resultImg.style.width = "100vw";

        setTimeout(function(){
        document.querySelector(".resetbutton").style.display = "block"
        }, 1500)
    }


});

document.querySelector(".resetbutton").addEventListener("click", function(){
window.location.reload();
})


