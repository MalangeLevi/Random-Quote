var preview = false;
var x;
var watch;
var donothing = true;
var rndNumber =[];
var findquote = 0;
var quotes =[
{
	number: 1,
	name: "Francis of Assisi",
	quote:"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
},
{
	number:2,
	name:"Vince Lombardi",
	quote:"Perfection is not attainable, but if we chase perfection we can catch excellence."
},
{
	number:3,
	name:"Helen Keller",
	quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
},
{
	number:4,
	name:"Eric Hoffer",
	quote:"The capacity for getting along with our neighbor depends to a large extent on the capacity for getting along with ourselves." +
	" The self-respecting individual will try to be as tolerant of his neighbor's shortcomings as he is of his own"
	},	
	
	{
	number:5,
	name:"Martin Luther",
	quote:"Where the battle rages, there the loyalty of the soldier is proved."
	},	
	
	{
	number:6,
	name:"Dodinsky",
	quote:"To strengthen the muscles of your heart, the best exercise is lifting someone else's spirit whenever you can."
	},

	{
	number:7,
	name:"Mother Teresa",
	quote:"Be happy in the moment, that’s enough. Each moment is all we need, not more."
	},
	{	
	number: 8,
	name:"Rachel Naomi Remen",
	quote:"Perhaps the secret of living well is not in having all the answers but in pursuing unanswerable questions in good company."
	},
	{
		number:9,
		name:"Erich Seligmann Fromm",
		quote:"Creativity requires the courage to let go of certainties."
	},
	{
		number:10,
		name:"William G.T. Shedd",
		quote:"A ship is safe in harbor, but that's not what ships are for."
	}
]

function cleanP(){
	document.getElementById("quote").innerHTML ="";
	document.getElementById("name").innerHTML ="";
}

function getme(){
	donothing = false;
			for(var i = 0; i < rndNumber.length;  i++){					
					if(findquote === rndNumber[i]){
				findquote = Math.floor((Math.random() * 10) + 1);
				}
			}
return findquote;}

function runtime(total){
	var str = quotes[total].quote.split("");
		x= 0;
		watch = setInterval(function(){
		document.getElementById("quote").innerHTML += str[x];
	x++;	
	if(x === str.length){
			clearInterval(watch);
			document.getElementById("name").innerHTML = quotes[total].name;
			donothing = true;
			previous = true;
			
}},100);}
		

function backrnd(){
	if(rndNumber.length > 1){
	var number = rndNumber.length - 2;
	var finalnumber = rndNumber[number];
		document.getElementById("quote").innerHTML ="";
		document.getElementById("name").innerHTML ="";
		document.getElementById("quote").innerHTML = quotes[finalnumber].quote;
		document.getElementById("name").innerHTML = quotes[finalnumber].name;
	}
	else{
		document.getElementById("quote").innerHTML ="";
		document.getElementById("name").innerHTML ="";
		document.getElementById("quote").innerHTML = quotes[0].quote;
		document.getElementById("name").innerHTML = quotes[0].name; }
}
		
$(document).ready(function(){
	$("#button2").click(function(){
		if(donothing === true){
		var n = getme();
		rndNumber.push(n);
		cleanP();
		runtime(n);
		previous = false;
		}
		else{
			
		}
	});
	$("#button1").click(function(){
		if(previous===true){
		cleanP();
		backrnd();
		
		}
	});
});