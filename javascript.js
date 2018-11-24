var a;
function mech(a) {
	document.getElementById("content1").style.display='none';
	document.getElementById("content2").style.display='none';
	document.getElementById("content3").style.display='none';
	document.getElementById("content4").style.display='none';
	document.getElementById("choice1").style.borderLeft = '10px solid #280028';
	document.getElementById("choice2").style.borderLeft = '10px solid #280028';
	document.getElementById("choice3").style.borderLeft = '10px solid #280028';
	document.getElementById("choice4").style.borderLeft = '10px solid #280028';
	document.getElementById("choice1").style.borderBottom = '2px solid #280028';
	document.getElementById("choice2").style.borderBottom = '2px solid #280028';
	document.getElementById("choice3").style.borderBottom = '2px solid #280028';
	document.getElementById("choice4").style.borderBottom = '2px solid #280028';

  if(a==1){
  	var yourUl = document.getElementById("content1");
	yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
	document.getElementById("choice1").style.borderLeft = '10px solid #900000';
	document.getElementById("choice1").style.borderBottom = '1px solid #900000';
  }else if(a==2){
  	var yourUl = document.getElementById("content2");
	yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
	document.getElementById("choice2").style.borderLeft = '10px solid #900000';
	document.getElementById("choice2").style.borderBottom = '1px solid #900000';
  }else if(a==3){
  	var yourUl = document.getElementById("content3");
	yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
	document.getElementById("choice3").style.borderLeft = '10px solid #900000';
	document.getElementById("choice3").style.borderBottom = '1px solid #900000';
  } else{
  	var yourUl = document.getElementById("content4");
	yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
	document.getElementById("choice4").style.borderLeft = '10px solid #900000';
	document.getElementById("choice4").style.borderBottom = '1px solid #900000';
  }
}