const ImgHero = document.getElementById("ImgHero");

ImgHero.addEventListener("click",()=>{
    console.log("AAA");
});

const quizContainer = document.getElementById("quizContainer");
const text = '<div class="Q1">'+
'<h2 class="QIcon">Q1</h2>'+
'<p class="QTitle">日本のIT人材が2030年には最大どれくらい不足すると言われ<br>ているでしょうか？</p>'+
'<img class="QImg1" src="./img/img-quiz01.png" alt="">'+
'<p class="AIcon">A</p>'+
'<p class="GTitle">経済産業省 2019年3月 － IT 人材需給に関する調査</p>'+
'</div>';
quizContainer.insertAdjacentHTML("beforeend", text);







