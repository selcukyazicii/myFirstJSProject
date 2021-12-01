function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
//Question Prototype
Question.prototype.checkAnswer=function(answer){
    return this.answer===answer;
}

//Quiz Constructor
function Quiz(questions){
   this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}

//Quiz Prototype
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}
//Quiz is finish
Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex;
}

//Quiz guess
Quiz.prototype.guess=function(answer){
    var questions=this.getQuestion(); //index numarasını aldığı soruyu getirir.
    if(questions.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var question1=new Question("What's the best programming"
,["C#","JavaScript","Ruby"],"JavaScript");
var question2=new Question("Whats's the most popular programming language?",
["GoLang","Vue.js","Python"],"Vue.js");
var question3=new Question("What's the best modern programming",
["Java","C#","Angular","React"],"React");

var questions=[question1,question2,question3];

//Start Quiz
var quiz=new Quiz(questions);
loadQuestion();
function loadQuestion(){
if(quiz.isFinish()){
    showScore();
}else{
    var question=quiz.getQuestion();
    var choices=question.choices;
    console.log(choices);
    document.querySelector('#question').textContent=question.text;
    for(var i=0;i<choices.length;i++){
        var element=document.querySelector('#choice'+i);
        element.innerHTML=choices[i];
        guess('btn'+ i,choices[i]);
    }
    showProgress();
}
showProgress();

}
function guess(id,guess){
var btn=document.getElementById(id);
btn.onclick=function(){
    quiz.guess(guess);
    loadQuestion();
}
}
function showScore(){
var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
document.querySelector('.card-body').innerHTML=html;
}
function showProgress(){
    var totalQuestion=quiz.question.length;
    var questionNumber=quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML= 'Question' +questionNumber+ 'of' +totalQuestion;
}