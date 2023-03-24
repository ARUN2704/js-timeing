
let time=new Date();
let b=time.getHours();
console.log(b)
if(time<12){
c="Morning";

	
}

else if(time>=12&&time<=17){
	c="Afternoon";
}

else if (time=>18 &&time<=20){
	c="Evening";
}

else{
	c="Night";
	
}


document.write('<h1>'+c);