var display=function(live){
   document.getElementById(live).style.display="inline-block";
 
   
}
var hide=function(live){
   document.getElementById(live).style.display="none";
   
}

var creatWorld=function(){
	for(var i=1;i<8;i++){
		for(var m=1;m<8;m++){
			hide("r"+i.toString()+"c"+m.toString());
		}

	}

	var num = Math.random()*36;
	num = parseInt(num, 10);
	console.log(num);
	for (var i=0; i<=num; i++){
  			display("r"+parseInt(Math.random()*6+2, 10).toString()+"c"+parseInt(Math.random()*6+2, 10).toString());
  		}
}
var calculateN=function(r,c){
	var count=0;
	for (var i=(r-1);i<(r+2);i++){
		for (var k=(c-1);k<(c+2);k++){
			var pos="r"+i.toString()+"c"+k.toString();
			if(document.getElementById(pos).style.display!="none"){
				count++;
				if (pos==("r"+r.toString()+"c"+c.toString())){
					count--;
				}
				
			}
			else{

			}
		}
	}
    console.log(count);    
    return count
}

var gameStart=function(){
	
		for(var i=2;i<=7;i++){
			for(var m=2;m<=7;m++){
				var pos ="r"+i.toString()+"c"+m.toString();
				if (document.getElementById(pos).style.display=="none" && calculateN(i,m)==3){
					document.getElementById(pos).style.color="black";

				}
				else if(document.getElementById(pos).style.display!="none" && (calculateN(i,m)==3 || calculateN(i,m)==2) ){
					document.getElementById(pos).style.color="black";

				}
			}
		}
		
		for(var i=2;i<8;i++){
			for(var m=2;m<8;m++){
				hide("r"+i.toString()+"c"+m.toString());
			}

		}

		for(var i=2;i<8;i++){
			for(var m=2;m<8;m++){
				var pos ="r"+i.toString()+"c"+m.toString();
				if(document.getElementById(pos).style.color=="black"){
					display(pos);
				}

			}
		}	
		for(var i=2;i<8;i++){
			for(var m=2;m<8;m++){
				document.getElementById("r"+i.toString()+"c"+m.toString()).style.color="white";
			}

		}

}


