var runningClock = false;
var isClockReset = true;
var timeClocker;

function clocking(){
	
	console.log("clocking() ran ...");	
}

function clockMe() {
	console.log("clockMe() running ..");

		
	timeClocker = setInterval(clocking, 500);
}

function tehClock(){
	$(".timer").click(function(){
		if(runningClock == false){
			runningClock = true;
			clockMe();
			console.log("teh Clock is running... (just imagine for now)");
		}else{
			clearInterval(timeClocker);
			runningClock = false;
			console.log("teh Clock stopped .... (just imagine for now )");
		}
	});
}

function decreaseVal(decVal){
	if(decVal > 1) {
	 --decVal;
	}else{
		console.warn("minimum value reached while decreasing");
	}
	return decVal;
}

function increaseVal(incVal){
	return ++incVal;
}

function sessionSet(){
	
	console.log("sessionSet() running ...");
	
	var sessionVal = $("#session-val").text();
	
	$("#increase-session").click(function(){
		console.log("#increase-session clicked .....");
	
		if(runningClock == false){
			
			sessionVal = increaseVal(sessionVal);
			console.log("sessionVal value increased by sessionSet():" + sessionVal);
			$("span#session-val").html(sessionVal);
			$("p#timer-session-val").html(sessionVal);
		}
	});
	
	$("#decrease-session").click(function(){
		console.log("#decrease-session clicked ....");
	
		if(runningClock == false){
			
			sessionVal = decreaseVal(sessionVal);
			console.log("sessionVal value decreased by sessionSet():" + sessionVal);
			$("span#session-val").html(sessionVal);
			$("p#timer-session-val").html(sessionVal);
		}
	});
}

function breakSet(){
	
	console.log("breakSet() running...");
	
	var breakVal = $("#break-val").text();
	
	$("#increase-break").click(function(){
		console.log("#increase-break clicked ....");
		
		if (runningClock == false){
			
			breakVal = increaseVal(breakVal);
			console.log("breakVal value increased by breakSet():" + breakVal );
			$("span#break-val").html(breakVal);
		}
	});
	
	$("#decrease-break").click(function(){
		console.log("#increase-break clicked ....");
		
		if (runningClock == false){
			
			breakVal = decreaseVal(breakVal);
			console.log("breakVal value decreased by breakSet():" + breakVal );
			$("span#break-val").html(breakVal);
		}
	});	
}

function timerSet(){
	console.log("timerSet() running ...");
		breakSet();
		sessionSet();
}

function pomodoroClock(){
	console.log("pomodoroClock() running ...");
	timerSet();
	tehClock();
}



$(pomodoroClock());
