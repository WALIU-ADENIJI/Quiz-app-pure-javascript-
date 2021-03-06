

var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1'); 
var op2=document.getElementById('op2'); 
var op3=document.getElementById('op3'); 
var op4=document.getElementById('op4'); 


	var app ={
			questions:[
				  	  {q:'USA stands for?',options:['United State of America','United State of Antartica',
				  	  'United State of Africa','United State of Asia'],answer:1},

				  	   {q:'CAFR stands for?',options:['Chad African Republic','China African Republic',
				  	  'Central African Republic','Chile African Republic'],answer:3},

				  	   {q:'TCIS stands for?',options:['Togo and Caicos Island','Turks and Caicos Island',
				  	  'Tunisia and Caicos Island','Turkey and Caicos Island'],answer:2},

				  	  {q:'UAE stands for?',options:['United Austria Emirates','United Algeria Emirates',
				  	  'United Angola Emirates','United Arab Emirates'],answer:4},

				  	  {q:'PNG stands for?',options:['Papua New Guinea','Panama New Guinea',
				  	  'Poland New Guinea','Paraguay New Guinea'],answer:1},
				 	  ],
			index:0,
			load:function(){
					if(this.index<=this.questions.length){
						quizBox.innerHTML=this.index+1+"."+this.questions[this.index].q;
						op1.innerHTML=this.questions[this.index].options[0];
						op2.innerHTML=this.questions[this.index].options[1];
						op3.innerHTML=this.questions[this.index].options[2];
						op4.innerHTML=this.questions[this.index].options[3];
							this.scoreCard();
					}
					else{
						quizBox.innerHTML="Quiz Over........!!! ";
						op1.style.display="none";
						op2.style.display="none";
						op3.style.display="none";
						op4.style.display="none";
						btn.style.display="none";
					}
					
			},
			next:function(){
				this.index++;
				this.load();
			},

			check:function(ele){

				var id=ele.id.split('');

				if(id[id.length-1]==this.questions[this.index].answer){
					this.score++;
					ele.className="correct";
					ele.innerHTML="Correct";
					this.scoreCard();
				}
				else{
					ele.className="wrong";
					ele.innerHTML="Wrong";
				}
			},
			notClickAble:function(){
				for(let i=0;i<ul.children.length;i++){
					ul.children[i].style.pointerEvents="none";
				}
			},
			clickAble:function(){
				for(let i=0;i<ul.children.length;i++){
					ul.children[i].style.pointerEvents="auto";
					ul.children[i].className=" "
				}
			},
			score:0,
			scoreCard:function(){
				scoreCard.innerHTML=this.questions.length+"/"+this.score;
			}

		}

		window.onload=app.load();

		function button(ele){
			app.check(ele);
			app.notClickAble();
		}

		function next(){
			app.next();
			app.clickAble();
		} 