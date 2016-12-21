var runningClock = false;
var isClockReset = true;
var isSessionRunning = false;
var timeClocker;
var seconds;
var minutes;

function clocking(){
	
	
	console.log("clocking() is running ...");
	
	--seconds;
	if(seconds <= 0){
		seconds = 59;
		--minutes
		if(minutes < 0 ){
			clearTimeout(timeClocker);
			seconds = 0;
			minutes = 0;
			if(isSessionRunning == true){
				isSessionRunning = false;
			}else{
				isSessionRunning = true;
			}
			clockMe();
		}
	}
	
	console.log("clocking() ran ..." + " seconds: " + seconds + " minutes: " + minutes);
	
	var timeText = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
	
	$("#timer-session-val").html(timeText);
}

function clockMe() {
	console.log("clockMe() running ..");
	
	if (isClockReset == true || isSessionRunning == true){
		seconds = 0;
		minutes = $("span#session-val").text();
		isClockReset = false;
		isSessionRunning = true;
		$("p#break-or-session").html("Session");
	}else if ( isSessionRunning == false ){
		seconds = 0;
		minutes = $("span#break-val").text();
		$("p#break-or-session").html("Break !");
	}
	
	timeClocker = setInterval(clocking, 1000);
}

function tehClock(){
	$(".timer").click(function(){
		if(runningClock == false){
			runningClock = true;
			clockMe();
			console.log("teh Clock is running... ");
		}else{
			clearInterval(timeClocker);
			runningClock = false;
			console.log("teh Clock stopped ....");
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
			isClockReset = true;
		}
	});
	
	$("#decrease-session").click(function(){
		console.log("#decrease-session clicked ....");
	
		if(runningClock == false){
			
			sessionVal = decreaseVal(sessionVal);
			console.log("sessionVal value decreased by sessionSet():" + sessionVal);
			$("span#session-val").html(sessionVal);
			$("p#timer-session-val").html(sessionVal);
			isClockReset = true;
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
			isClockReset = true;
		}
	});
	
	$("#decrease-break").click(function(){
		console.log("#increase-break clicked ....");
		
		if (runningClock == false){
			
			breakVal = decreaseVal(breakVal);
			console.log("breakVal value decreased by breakSet():" + breakVal );
			$("span#break-val").html(breakVal);
			isClockReset = true;
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
