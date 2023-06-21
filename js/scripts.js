
var b=[],l=1,m=7,h=[],content=[];
function load_top(){
	var j;
	for (j=1;j<=m;j++){
		b[j]=new Image();
		b[j].src="images/top/"+j+".jpg";
	}
	h[1]="Yavuz Sultan Selim Bridge";
	h[2]="The Lake Pontchartrain Causeway Bridge";
	h[3]="The Tsing Ma Bridge";
	h[4]="Gateshead Millennium Bridge";
	h[5]="Dragon Bridge";
	h[6]="Chengyang Bridge";
	h[7]="Sydney Harbour Bridge";
	content[1]="Yavuz Sultan Selim Bridge";
	content[2]="The Lake Pontchartrain Causeway Bridge";
	content[3]="The Tsing Ma Bridge";
	content[4]="Gateshead Millennium Bridge";
	content[5]="Dragon Bridge";
	content[6]="Chengyang Bridge";
	content[7]="Sydney Harbour Bridge";
}
function out(k){
	document.getElementById("f1").src=b[k].src;
	document.getElementById("title1").innerHTML=h[k]; 	
	document.getElementById("content1").innerHTML=content[k]; 	
	document.getElementById("f2").src=b[++k].src;
	document.getElementById("title2").innerHTML=h[k];
	document.getElementById("content2").innerHTML=content[k]; 	
	document.getElementById("f3").src=b[++k].src;
	document.getElementById("title3").innerHTML=h[k];
	document.getElementById("content3").innerHTML=content[k]; 	
	// document.getElementById("f4").src=b[++k].src;
	// document.getElementById("h4").innerHTML=h[k];
}
function next_top(){
	if(l<m-2){	
		out(++l);
	}
}
function back_top(){
	if(l>1){
		out(--l);
	}
}
