

function sessionSet(){
	
	console.log("sessionSet() running ...");
	
	var sessionVal = $("#session-val").text();
	
	$("#increase-session").click(function(){
		console.log("#increase-session clicked .....");
		++sessionVal;
		console.log("sessionVal value increased by sessionSet():" + sessionVal);
		$("span#session-val").html(sessionVal);
	});
	
	$("#decrease-session").click(function(){
		console.log("#decrease-session clicked ....");
		--sessionVal;
		console.log("sessionVal value decreased by sessionSet():" + sessionVal);
		$("span#session-val").html(sessionVal);
	});
}

function breakSet(){
	
	console.log("breakSet() running...");
	
	var breakVal = $("#break-val").text();
	
	$("#increase-break").click(function(){
		console.log("#increase-break clicked ....");
		++breakVal;
		console.log("breakVal value increased by breakSet():" + breakVal );
		$("span#break-val").html(breakVal);
	});
	
	$("#decrease-break").click(function(){
		console.log("#increase-break clicked ....");
		--breakVal;
		console.log("breakVal value decreased by breakSet():" + breakVal );
		$("span#break-val").html(breakVal);
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
}



$(pomodoroClock());
