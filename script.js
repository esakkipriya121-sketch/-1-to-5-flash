<script>
var questions=[
["What is HTML?",["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Markup Language","Home Text Markup Language"],0],
["Which language is used for styling a web page?",["HTML","CSS","Java","Python"],1],
["Which language is used to make a web page interactive?",["HTML","CSS","JavaScript","SQL"],2],
["Which tag is used to insert an image?",["img","image","src","picture"],0],
["Which symbol is used for an ID in CSS?",[".","#","*","@"],1]
];

var current=0;
var selected=-1;

function loadCard(){
    question.innerHTML=(current+1)+". "+questions[current][0];
    options.innerHTML="";
    result.innerHTML="";
    selected=-1;

    for(var i=0;i<4;i++){
        options.innerHTML +=
        "<button class='option' onclick='selectOption("+i+")'>"+
        questions[current][1][i]+"</button>";
    }
}

function selectOption(i){
    selected=i;
}

function showAnswer(){
    if(selected==-1){
        result.innerHTML="Select one option";
    }
    else if(selected==questions[current][2]){
        result.innerHTML="<span class='correct'>Correct ✓</span>";
    }
    else{
        var ans = questions[current][1][questions[current][2]];
        result.innerHTML="<span class='wrong'>Wrong ✗</span><br><br><b>Correct Answer: "+ans+"</b>";
    }
}

function nextCard(){
    current++;
    if(current<questions.length){
        loadCard();
    }
    else{
        question.innerHTML="Flash Cards Completed!";
        options.innerHTML="";
        result.innerHTML="You completed all questions.";
    }
}

function startProgress(){
    var p=10;
    var t=setInterval(function(){
        p=p+10;
        progressBar.style.width=p+"%";
        progressBar.innerHTML=p+"%";
        if(p==100) clearInterval(t);
    },500);
}

function showClock(){
    var d=new Date();
    clock.innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}

setInterval(showClock,1000);
showClock();
loadCard();
</script>
