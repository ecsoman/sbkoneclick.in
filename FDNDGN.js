function calFDN1(){
	document.getElementById("111").value="";
	document.getElementById("qmax").value = "";
	document.getElementById("qmin").value = ""; 
	document.getElementById("fosox").value = "";
	document.getElementById("fosoz").value = "";
	document.getElementById("fossx").value = "";
	document.getElementById("fossz").value = "";
	
	

	var lf=parseFloat(document.getElementById("Lf1").value);
	var bf=parseFloat(document.getElementById("Bf1").value);
	var thf=parseFloat(document.getElementById("h1").value);
	var dc11=parseFloat(document.getElementById("dc1").value);
	var fdf=parseFloat(document.getElementById("ht1").value);
	var hts=parseFloat(document.getElementById("hs1").value);
	
	var lp=parseFloat(document.getElementById("Lp1").value);
	var bp=parseFloat(document.getElementById("Bp1").value);
	var hp=parseFloat(document.getElementById("hp1").value); 
	var ex=parseFloat(document.getElementById("ex1").value);
	var ez=parseFloat(document.getElementById("ez1").value);
	var gco=parseFloat(document.getElementById("gcc").value);
	var gso=parseFloat(document.getElementById("gss").value);
	var coe=parseFloat(document.getElementById("cof").value);
	var qca=parseFloat(document.getElementById("qcap").value);
	var fos1=parseFloat(document.getElementById("foso").value);
	var fos2=parseFloat(document.getElementById("foss").value);
	var fx=parseFloat(document.getElementById("fx1").value);
	var fy=parseFloat(document.getElementById("fy1").value);
	var fz=parseFloat(document.getElementById("fz1").value);
	var mx=parseFloat(document.getElementById("Mx1").value);
	var mz=parseFloat(document.getElementById("Mz1").value);
	
//EMPTY CELLS OR WRONG INPUT
	if(lf<lp){
	alert("Check Pedestal size");
	}
	if(bf<bp){
	alert("Check Pedestal size");
	}
	if(ex>bf/2){
	alert("Wrong eccentricity");
	}
	if(ez>lf/2){
	alert("Wrong eccentricity");
	}

	
	var A=lf*bf;
	var zx=bf*lf*lf/6;
	var zz=bf*bf*lf/6;
	var fdnw=(lf*bf*thf+lp*bp*(hp+hts))*gco;
	var sow=(lf*bf-lp*bp)*hts*gso;
	var p=fy+fdnw+sow;
	var mxx=mx+fy*ez+fz*(thf+hts+hp)+0.000001;
	var mzz=mz+fy*ex+fx*(thf+hts+hp)+0.000001;
	var qmax1=p/A+mxx/zx+mzz/zz;
	var qmin1=p/A-mxx/zx-mzz/zz;
	var fox=(p*lf/2)/mxx;
	var foz=(p*bf/2)/mzz;
	var fsx=p*coe/(fx+0.00001);
	var fsz=p*coe/(fz+0.00001);
	var cty=lf*bf*thf+lp*bp*(hp+hts);
	var bty=(lf+0.1)*(bf+0.1)*0.05;	
	var pty=lf*bf+2*(lf+bf)*thf+(lf*bf-lp*bp)+2*(lp+bp)*(hts+0.15);

  document.getElementById("qmax").value = qmax1.toFixed(2);
  document.getElementById("qmin").value = qmin1.toFixed(2); 
  document.getElementById("fosox").value = fox.toFixed(2);
  document.getElementById("fosoz").value = foz.toFixed(2);
  document.getElementById("fossx").value = fsx.toFixed(2);
  document.getElementById("fossz").value = fsz.toFixed(2);
  document.getElementById("hs1").value = hts.toFixed(2);
  document.getElementById("c35q").value = cty.toFixed(2); 
  document.getElementById("c10q").value = bty.toFixed(2);
  document.getElementById("pcq").value = pty.toFixed(2);

//CHECKS
////-----------------------------------------------------------------------
	//alert("1st Check Completed....");
	//alert("1 check: " + fox);
	//alert(p);
	//alert(mx);
	//alert(ez);
	//alert(thf+hts+hp);
	//alert(p*ez);
	//alert(mxx);
	//alert(mzz);
	//alert(A);
	//alert(zx);
	//alert(zz);
	//alert(qmax1);
	//alert(qmin1);
	
	//alert(foz);
	//alert(fos1);
	//alert(fsx);
	//alert(fsz);
	//alert(fos2);
////-----------------------------------------------------------------------

if(qmax1>qca){

	document.getElementById("111").value = "FAIL";
	//alert("FAIL")
	var s="FAIL";
	var ss11="FAIL";
	document.getElementById("qmax").style.backgroundColor = "red";
	
	}else{
	var s="SAFE"
	var ss11="PASS";
	document.getElementById("qmax").style.backgroundColor = "";
	
}

	var ss22=ss11;
	//alert(ss22);
	//alert(ss11);

if(fox<fos1){

	document.getElementById("111").value = "FAIL";
	//alert("FAIL")
	var s="FAIL in Overturning";
	var ss11="FAIL";
	document.getElementById("fosox").style.backgroundColor = "red";
	
}else{
	var s="SAFE"
	var ss11="PASS";
	document.getElementById("fosox").style.backgroundColor = "";
	
}
	if(ss11=="FAIL"){
	var ss22=ss11;
	}
	//alert(ss22);
	//alert(ss11);

if(foz<fos1){

	document.getElementById("111").value = "FAIL";
	//alert("FAIL")
	var s="FAIL in Overturning";
	var ss11="FAIL";
	document.getElementById("fosoz").style.backgroundColor = "red";
	
}else{
	var s="SAFE"
	var ss11="PASS";
	document.getElementById("fosoz").style.backgroundColor = "";
	
}	

	if(ss11=="FAIL"){
	var ss22=ss11;
	}	
	//alert(ss22);
	//alert(ss11);

if(fsx<fos2){

	document.getElementById("111").value = "FAIL";
	alert("FAIL")
	var s="FAIL in Sliding"
	var ss11="FAIL";
	document.getElementById("fossx").style.backgroundColor = "red";
	
}else{
	var s="SAFE"
	var ss11="PASS";
	document.getElementById("fossx").style.backgroundColor = "";
	
}

	if(ss11=="FAIL"){
	var ss22=ss11;
	}
	//alert(ss22);
	//alert(ss11);

if(fsz<fos2){

	document.getElementById("111").value = "FAIL";
	alert("FAIL")
	var s="FAIL in Sliding";
	var ss11="FAIL";
	document.getElementById("fossz").style.backgroundColor = "red";
	
}else{
	var s="SAFE"
	var ss11="PASS";
	document.getElementById("fossz").style.backgroundColor = "";
	
}

	if(ss11=="FAIL"){
	var ss22=ss11;
	}
	//alert(ss22);
	//alert(ss11);
	//alert(s);



if(ss22=="FAIL"){
	document.getElementById("111").style.backgroundColor = "red";
	document.getElementById("222").style.backgroundColor = "red";
}else{
	document.getElementById("111").style.backgroundColor = "#E7E9EB";
	document.getElementById("222").style.backgroundColor = "#E7E9EB";
}






//CALCUALTION OF PERCENTAGE OF CONTACT

	var ex11=mzz/p;
	var ez11=mxx/p;
	var ex22=ex11/bf*100;
	var ez22=ez11/lf*100;
	var ex33=ex11/bf;
	var ez33=ez11/lf;
 	
	
	var s1 = Math.ceil(ex22)-1;
	var t1 = Math.ceil(ez22)-1;
	var s2 = Math.floor(ex22)-1;
	var t2 = Math.floor(ez22)-1;
	
	if(s1>24){
	s1 = 0;
	}

	if(t1>24){
	t1 = 0;
	}

	if(s2<0){
	s2 = 0;
	}

	if(t2<0){
	t2 = 0;
	}
	
	
////--------------------------------------------------------------------------		
	//alert(ex11);
	//alert(ez11);
	//alert(ex22);
	//alert(ez22);
	//alert(ex33);
	//alert(ez33);
	//alert("s1 " + s1);
	//alert("t1 " + t1);
	//alert("s2 " + s2);
	//alert("t2: " + t2);
	//alert("2nd Check Completed....");
////--------------------------------------------------------------------------

	
//alert("First number is :" + s + "Second number is :" + t);

var xzvalue = [

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.02,0.04,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.02,0.04,0.06,0.08,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.04,0.08,0.1,0.12,0.15,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0.01,0.04,0.08,0.1,0.12,0.15,0.18,0.22,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0.02,0.05,0.09,0.11,0.14,0.18,0.2,0.22,0.25,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0.02,0.05,0.08,0.11,0.14,0.18,0.21,0.22,0.25,0.28,0.3,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0.02,0.05,0.1,0.1,0.15,0.18,0.22,0.23,0.24,0.29,0.32,0.33,0,0,0,0],
[0,0,0,0,0,0,0,0,0.02,0.05,0.1,0.13,0.15,0.19,0.22,0.26,0.28,0.3,0.32,0.34,0.36,0.38,0,0,0],
[0,0,0,0,0,0,0,0.05,0.06,0.1,0.15,0.18,0.22,0.23,0.28,0.3,0.33,0.34,0.36,0.38,0.4,0.41,0,0,0],
[0,0,0,0,0,0,0,0.1,0.11,0.15,0.2,0.22,0.25,0.28,0.31,0.33,0.35,0.38,0.39,0.41,0.43,0.45,0.47,0,0],
[0,0,0,0,0,0.05,0.1,0.15,0.18,0.2,0.25,0.28,0.3,0.33,0.35,0.38,0.4,0.42,0.42,0.45,0.48,0.5,0.52,0,0],
[0,0,0,0,0.05,0.1,0.15,0.2,0.25,0.25,0.3,0.33,0.35,0.37,0.4,0.42,0.45,0.47,0.48,0.5,0.52,0.53,0.55,0,0],
[0,0,0,0.1,0.1,0.17,0.22,0.25,0.3,0.35,0.35,0.38,0.4,0.42,0.45,0.48,0.5,0.52,0.52,0.53,0.55,0.56,0.58,0.6,0],
[0,0,0.1,0.15,0.2,0.25,0.3,0.33,0.35,0.39,0.42,0.43,0.45,0.48,0.5,0.52,0.53,0.55,0.55,0.57,0.58,0.6,0.62,0.63,0],
[0,0.1,0.2,0.3,0.3,0.35,0.4,0.4,0.45,0.45,0.48,0.5,0.52,0.52,0.54,0.57,0.57,0.58,0.6,0.6,0.62,0.63,0.65,0.65,0],
[0.1,0.2,0.4,0.4,0.42,0.45,0.48,0.5,0.5,0.53,0.55,0.55,0.56,0.58,0.58,0.6,0.61,0.62,0.63,0.63,0.65,0.66,0.69,0.68,0],
[0.6,0.6,0.6,0.55,0.55,0.55,0.58,0.58,0.58,0.58,0.6,0.6,0.61,0.62,0.62,0.65,0.65,0.66,0.68,0.67,0.68,0.7,0.71,0.72,0],
[1,0.8,0.7,0.7,0.7,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.65,0.66,0.68,0.69,0.69,0.7,0.71,0.72,0.72,0.73,0.74,0.74,0],
[0,1,0.9,0.85,0.8,0.78,0.75,0.72,0.72,0.72,0.7,0.72,0.72,0.72,0.73,0.73,0.75,0.75,0.75,0.76,0.76,0.77,0.77,0.78,0],
[0,0,0,0.95,0.9,0.88,0.85,0.8,0.8,0.8,0.8,0.78,0.79,0.78,0.78,0.78,0.79,0.8,0.8,0.8,0.8,0.81,0.82,0.82,0.82],
[0,0,0,0,0,0.98,0.95,0.9,0.88,0.88,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.84,0.85,0.85,0.85,0.85,0.85,0.85],
[0,0,0,0,0,0,0,1,0.95,0.95,0.92,0.9,0.9,0.89,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88],
[0,0,0,0,0,0,0,0,0,1,0.98,0.96,	0.95,0.95,0.93,0.93,0.92,0.92,0.92,0.92,0.92,0.92,0.92,0.92,0.92],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0.99,0.99,0.98,0.98,0.97,0.95,0.96,0.96,0.96,0.95,0.95],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]
];

if(s1-s2>0 && t1-t2>0){
//ARRAY SYNTAX - ARRAY[ROW NO] [COL NO], row and column starts with A[0][0]
//Z values
var av11= xzvalue[t2][s2]; //row1 col1
var av12= xzvalue[t1][s2]; //row2 col1
var av21= xzvalue[t2][s1]; //row1 col2
var av22= xzvalue[t1][s1]; //row2 col2
var avc1=av11+(av21-av11)/(s1-s2)*(ex22-1-s2);
var avc2=av12+(av22-av12)/(s1-s2)*(ex22-1-s2);
var avcz=avc1+(avc2-avc1)/(t1-t2)*(ez22-1-t2); //Z value

//X values
var avx11= xzvalue[s2][t2]; //row1 col1
var avx12= xzvalue[s1][t2]; //row2 col1
var avx21= xzvalue[s2][t1]; //row1 col2
var avx22= xzvalue[s1][t1]; //row2 col2
var avcx1=avx11+(avx12-avx11)/(s1-s2)*(ex22-1-s2); 
var avcx2=avx21+(avx22-avx21)/(s1-s2)*(ex22-1-s2); 
var avcx=avcx1+(avcx2-avcx1)/(t1-t2)*(ez22-1-t2); //X value

}
else{
var avcz = 0;
var avcx = 0;
}

////--------------------------------------------------------------------------
//alert("avz11 " + av11);
//alert("av12 " + av12);
//alert("av21 " + av21);
//alert("av22 " + av22);
//alert("avc1 " + avc1);
//alert("avc2 " + avc2);
//alert("avcz " + avcz);

//alert("avx11 " + avx11);
//alert("avx12 " + avx12);
//alert("avx21 " + avx21);
//alert("avx22 " + avx22);
//alert("avcx1 " + avcx1);
//alert("avcx2 " + avcx2);
//alert("avcx " + avcx);
//alert("3rd Check avcz: " + avcz);
//alert("3rd Check Completed....");
////--------------------------------------------------------------------------





//horizontal values are ex/bf and vertical values are ez/lf

var kvalue = [
[6.70,3.30,2.20,2.10,2.00,1.80,1.70,1.60,1.50,1.40,1.20,1.10,1.00],
[7.10,3.50,2.40,2.20,2.10,2.00,1.80,1.70,1.60,1.50,1.40,1.20,1.10],
[7.50,3.80,2.50,2.30,2.20,2.10,2.00,1.80,1.70,1.60,1.50,1.40,1.20],
[8.00,4.00,2.70,2.50,2.30,2.20,2.10,2.00,1.80,1.70,1.60,1.50,1.40],
[8.50,4.20,2.80,2.60,2.50,2.30,2.20,2.10,2.00,1.80,1.70,1.60,1.50],
[9.00,4.50,3.00,2.80,2.60,2.50,2.30,2.20,2.10,2.00,1.80,1.70,1.60],
[9.60,4.80,3.20,3.00,2.80,2.60,2.50,2.30,2.20,2.10,2.00,1.80,1.70],
[10.20,5.10,3.40,3.20,3.00,2.80,2.60,2.50,2.30,2.20,2.10,2.00,1.80],
[10.90,5.40,3.60,3.40,3.20,3.00,2.80,2.60,2.50,2.30,2.20,2.10,2.00],
[11.60,5.80,3.90,3.60,3.40,3.20,3.00,2.80,2.60,2.50,2.30,2.20,2.10],
[12.50,6.20,4.10,3.90,3.60,3.40,3.20,3.00,2.80,2.70,2.50,2.40,2.20],
[18.80,9.40,6.20,5.80,5.40,5.10,4.80,4.50,4.20,4.00,3.80,3.50,3.30],
[37.50,18.80,12.50,11.60,10.90,10.20,9.60,9.00,8.50,8.00,7.50,7.10,6.70]
];

	//FINDING K VALUE FOR BEARING PRESSURE.

	//var s1 = Math.ceil(ex22);
	//var t1 = Math.ceil(ez22);
	//var s2 = Math.floor(ex22);
	//var t2 = Math.floor(ez22);

	if(ez33<=0.02){
		var za1=0;
		var za2=0.02;
		var zr1=0;
		var zr2=1;
	}
	else if(ez33<=0.04){
		var za1=0.02;
		var za2=0.04;
		var zr1=1;
		var zr2=2;
	}
	else if(ez33<=0.06){
		var za1=0.04;
		var za2=0.06;
		var zr1=2;
		var zr2=3;
	}
	else if(ez33<=0.08){
		var za1=0.06;
		var za2=0.08;
		var zr1=3;
		var zr2=4;
	}
	else if(ez33<=0.10){
		var za1=0.08;
		var za2=0.10;
		var zr1=4;
		var zr2=5;
	}
	else if(ez33<=0.12){
		var za1=0.10;
		var za2=0.12;
		var zr1=5;
		var zr2=6;
	}
	else if(ez33<=0.14){
		var za1=0.12;
		var za2=0.14;
		var zr1=6;
		var zr2=7;
	}
	else if(ez33<=0.16){
		var za1=0.14;
		var za2=0.16;
		var zr1=7;
		var zr2=8;
	}
	else if(ez33<=0.18){
		var za1=0.16;
		var za2=0.18;
		var zr1=8;
		var zr2=9;
	}
	else if(ez33<=0.20){
		var za1=0.18;
		var za2=0.20;
		var zr1=9;
		var zr2=10;
	}
	else if(ez33<=0.3){
		var za1=0.3;
		var za2=0.2;
		var zr1=10;
		var zr2=11;
	}
	else if (ez33<=0.4){
		var za1=0.4;
		var za2=0.3;
		var zr1=11;
		var zr2=12;
	}

	
	//ex/bf for K values

	if(ex33<=0.02){
		var xa1=0;
		var xa2=0.02;
		var xr1=12;
		var xr2=11;
	}
	else if(ex33<=0.04){
		var xa1=0.02;
		var xa2=0.04;
		var xr1=11;
		var xr2=10;
	}
	else if(ex33<=0.06){
		var xa1=0.04;
		var xa2=0.06;
		var xr1=10;
		var xr2=9;
	}
	else if(ex33<=0.08){
		var xa1=0.06;
		var xa2=0.08;
		var xr1=9;
		var xr2=8;
	}
	else if(ex33<=0.10){
		var xa1=0.08;
		var xa2=0.10;
		var xr1=8;
		var xr2=7;
	}
	else if(ex33<=0.12){
		var xa1=0.10;
		var xa2=0.12;
		var xr1=7;
		var xr2=6;
	}
	else if(ex33<=0.14){
		var xa1=0.12;
		var xa2=0.14;
		var xr1=6;
		var xr2=5;
	}
	else if(ez33<=0.16){
		var xa1=0.14;
		var xa2=0.16;
		var xr1=5;
		var xr2=4;
	}
	else if(ez33<=0.18){
		var xa1=0.16;
		var xa2=0.18;
		var xr1=4;
		var xr2=3;
	}
	else if(ez33<=0.20){
		var xa1=0.18;
		var xa2=0.20;
		var xr1=3;
		var xr2=2;
	}
	else if(ez33<=0.3){
		var xa1=0.3;
		var xa2=0.2;
		var xr1=2;
		var xr2=1;
	}
	else if(ez33<=0.4){
		var xa1=0.4;
		var xa2=0.3;
		var xr1=1;
		var xr2=0;
	}


//alert("xa1 " + xa1);
//alert("xa2 " + xa2);
//alert("za1 " + za1);
//alert("za2 " + za2);

//alert("xr1 " + xr1);
//alert("xr2 " + xr2);
//alert("zr1 " + zr1);
//alert("4th Check zr2: " + zr2);

////-----------------------------------------------------------------------
//alert("4th Check Completed....");
////-----------------------------------------------------------------------

//K values
var k11= kvalue[zr1][xr1]; //row1 col1
var k12= kvalue[zr2][xr1]; //row2 col1
var k21= kvalue[zr1][xr2]; //row1 col2
var k22= kvalue[zr2][xr2]; //row2 col2
var kc1=k11+(k21-k11)/(xa2-xa1)*(ex33-xa1);
var kc2=k12+(k22-k12)/(xa2-xa1)*(ex33-xa1);
var kc=kc1+(kc2-kc1)/(za2-za1)*(ez33-za1); //K value	
	
//alert(k11);
//alert(k12);
//alert(k21);
//alert(k22);
//alert(kc1);
//alert(kc2);
//alert(kc);

//FOUNDAITON UPLIFT CALCULATIONS
//FIRST PART
	var d1=lf/2-ez11;
	var d2=4*d1/lf;
	var a1=3-d2;
	var b1=2-d2;
	var c1=1-d2;
	var w1=Math.sqrt((b1*b1)-4*a1*c1);
	var rr1=(-b1+w1)/(2*a1);

	var cc1=bf/2-ex11;
	var m1=4*cc1*(1+rr1+rr1*rr1)/(1+rr1+rr1*rr1+rr1*rr1*rr1);
	var n1=rr1*m1;

//SECOND PART
	var d11=bf/2-ex11;
	var d22=4*d11/bf;
	var a2=3-d22;
	var b2=2-d22;
	var c2=1-d22;
	var w2=Math.sqrt((b2*b2)-4*a2*c2);
	var rr2=(-b2+w2)/(2*a2);

	var cc2=lf/2-ez11;
	var m2=4*cc2*(1+rr2+rr2*rr2)/(1+rr2+rr2*rr2+rr2*rr2*rr2);
	var n2=rr2*m2;

////--------------------------------------------------------------------------
//alert("5th Check Completed....");
//alert("5th Check: " + m2);
//alert(n2);
////--------------------------------------------------------------------------


//CONTACT AREA PAP1
	if(ez11>ex11){
	var p1=(m2+n2)*0.5*bf;
	}
	else{
	var p1=(m1+n1)*0.5*lf;
	}
	var pa1=lf*bf-p1;
	var pap1=pa1/(lf*bf)*100;
	var papp1=pap1.toFixed(2);

//R9 cell:PAP2
	if(qmin1<0){
	pap2=avcx*avcz*lf*bf*100*0.5/(lf*bf);
	var papp2=pap2.toFixed(2);
	}
	//else{
	//alert("No tension on foundation");
	//}

////--------------------------------------------------------------------------
//alert("6th Check Completed....");
//alert("6th Check: " + papp1);
//alert("d1 " + d1);
//alert("d2 " + d2);
//alert("a1 " + a1);
//alert("b1 " + b1);
//alert("c1 " + c1);
//alert("w1 " + w1);
//alert("rr1 " + rr1);
//alert("cc1 " + cc1);
//alert("m1 " + m1);
//alert("n1 " + n1);

//alert("d11 " + d11);
//alert("d22 " + d22);
//alert("a2 " + a2);
//alert("b2 " + b2);
//alert("c2 " + c2);
//alert("w2 " + w2);
///alert("rr2 " + rr2);
//alert("cc2 " + cc2);

//alert("m2 " + m2);
//alert("n2 " + n2);
//alert(pa1);
//alert(papp2);
////--------------------------------------------------------------------------


//CASE 1: Qmax=qmax11
//CASE 2:Qmax=Kp/A
	var qmax2=kc*p/A;
//CASE 3:
	if(ez11>ex11){
	var qmax3=6*(p/((m2*bf)*(1+rr2+rr2*rr2)));
	}
	else{
	var qmax3=6*p/((m1*lf)*(1+rr1+rr1*rr1));
	}

////--------------------------------------------------------------------------
//alert(ez11);
//alert(ex11);
//alert("7th Check: " + qmax3);

//alert("7th Check Completed....");
////--------------------------------------------------------------------------

//CASE FINALIZATION
	
	var y1=ex33+1.6*ez33*ez33-0.68*ez33-0.178;
	
	var y2=ez33/0.165+ex33/0.165-1;

	if(qmin1>0){
	var qminf=qmin1;
	var casea1="case1";
	}
	else if(ez33/0.165+ex33/0.165-1<0){
	var casea1="case1";
	}
	else if((ex33<=0.25 && y1<=0.001 && ez33<=0.25 && y2>0)){
	var casea1="case2";
	}
	else{
	var casea1="case3";
	}
	
	

	var y11=ex33-24.2016*ez33*ez33+7.6907*ez33-0.610084;
	var y22=ex33+1.6*ez33*ez33-0.68*ez33-0.178;
	var y33=ez33/0.165+ex33/0.165-1;

	if(qmin1>0){
	var qminf=qmin1;
	var casea11="case1";
	}
	else if(y33<=0){
	var casea11="case1";
	}
	else if((y11>0 && ex33<=0.25 && y22<=0.001 && ez33<=0.25 && y33>0)){
	var casea11="case2";
	}
	else{
	var casea11="case3";
	}

////--------------------------------------------------------------------------
//alert("8th Check Completed....");
//alert("8th Check: " + casea1);
//alert("Check");
//alert(ex33);
//alert(ez33);
//alert("y1 " + y1);
//alert("y2 " + y2);
//alert("y11 " + y11);
//alert("y22 " + y22);
//alert("y33 " + y33);
//alert(casea1);
//alert(casea11);
//alert(y2);
//alert(y3);
////--------------------------------------------------------------------------

//CASE SELECTION
	
		if(ez33>=0.165){
		var casef1=casea11;
		var qmaxf1=qmax3;
		}	
			else{
			var casef1=casea1;
			var qmaxf1=qmax2;
			}
		
	

	if(casef1=="case1"){
	var upp1=0;
	
	}
	else if (casef1=="case2"){
	var upp1=papp2;
	
	}
	else if(casef1=="case3"){
	var upp1=papp1;
	
	}

	if(qmaxf1<qmax1){
	qmaxf1=qmax1;
	}
	

////--------------------------------------------------------------------------
//alert(qmaxf1);
//alert(casef1);
//alert("upp1 " + upp1);

//alert("9th Check Completed....");
//alert("9th Check: " + pap2);
//alert(papp1);
//alert(papp2);

//alert(m1);
//alert(n1);
////--------------------------------------------------------------------------

//alert(s);

if(upp1>15){
	
	var ss22="FAIL";
	var s="FAIL";
	document.getElementById("111").value = (s + ", " + upp1 + "% of Uplift");
	document.getElementById("111").style.backgroundColor = "red";
}else{
	var s="SAFE"
	document.getElementById("111").style.backgroundColor = "lightgreen";
}

//alert("check " + s);

if(ss22=="FAIL"){
	var s=ss22;
	document.getElementById("111").value = (s + ", " + upp1 + "% of Uplift");
	document.getElementById("111").style.backgroundColor = "red";
	}else{
	document.getElementById("111").value = (s + ", " + upp1 + "% of Uplift");
	document.getElementById("111").style.backgroundColor = "lightgreen";
}

	//alert("ss11"+ ss11);
	//alert("ss22" + ss22);
	//alert(s);







//alert(s);

////--------------------------------------------------------------------------
//alert("Reinforcement design starts....");
////--------------------------------------------------------------------------

//alert(upp1);

//REINFORCEMENT DESIGN

var fcc1=document.getElementById("fcc").value;
var fyy1=document.getElementById("fyy").value;
var lof11=document.getElementById("lof1").value;
var frbd11=document.getElementById("frbd1").value;
var frbs11=document.getElementById("frbs1").value;
var frtd11=document.getElementById("frtd1").value;
var frts11=document.getElementById("frts1").value;
var prd11=document.getElementById("prd1").value;
var prn11=document.getElementById("prn1").value;

//Moment & shear

var qnet=qmaxf1-gco*thf;
var len1=(lf-lp)/2;
var len2=(bf-bp)/2;
	
if(len1>len2){
var lenf=len1;
}else{
var lenf=len2;
}

////--------------------------------------------------------------------------
//alert("11th Check completed");
////--------------------------------------------------------------------------

if(lenf<=0){
alert("Foundation is block type");
}

//Foundation bottom reinforcement calculation

var mub=lof11*qnet*lenf*lenf/2;
var vub=lof11*qnet*lenf;

var d1=thf*1000-dc11-frbd11/2;

var As=(mub*1000000)/(0.9*fyy1*d1)

var Asmin1=0.18*1000*thf*1000/100;

//as per ACI 318, cl.10.5.3
var Asmin2=1.33*As;

var Asprov=(22/7*(frbd11*frbd11)/4*1000)/frbs11;

if(Asprov>Asmin1){
	if(Asprov>Asmin2){
		var z="S";//0=safe
		var fa11="SAFE";
	}else{
var z="F";
var fa11="Fail, Increase bottom Reinforcement";
alert("Check Bottom Reinforcement");
}
}else{
var z="F";
var fa11="Fail, Increase bottom Reinforcement";
alert("Check Bottom Reinforcement");
}

//alert("z: " + z);

//Resisting Moment Calculation
//Neutral Axis distace from compressed fibres 
var bw1 = 1000;
var bb1=0.85;
var c11=(Asprov*fyy1)/(0.85*fcc1*bb1*bw1);
var fMn=0.65*Asprov*fyy1*(d1-0.85*c11/2)/1000000;

if(fMn>mub){
	var z2="S";
	var fa11="SAFE";
}
else{
	var z2="F";
	var fa11="Fail, Increase bottom Reinforcement";
alert("Fails in Resisting moment calculation at bottom");
}
//alert(z2);

if(z2=="F"){
z=z2;
}else{
z=z;
}


//alert(mub);
//alert(fMn);

//Foundation top reinforcement calculation

if(qmin1<0){
var mut=-1*lof11*qmin1*lenf*lenf/2;
var vut=-1*lof11*qmin1*lenf;

var Astr=(mut*1000000)/(0.9*fyy1*d1)

var Asmin1=0.18*1000*thf/100;

//as per ACI 318, cl.10.5.3
var Asmin2=1.33*Astr;

var Asprovt=(22/7*(frtd11*frtd11)/4*1000)/frts11;

if(Asprovt>Asmin1){
	if(Asprovt>Asmin2){
		var z3="S";
		var fa12="SAFE";
	}else{
		var z3="F";
		var fa12="Fail, Increase top Reinforcement";
		alert("Check Top Reinforcement");
	}
}else{
var z3="F";
var fa12="Fail, Increase top Reinforcement";
alert("Check Top Reinforcement");
}

if(z3=="F"){
z=z3;
}else{
z=z;
}
//alert(mut);
//alert(Asprovt);
//alert(As);
//alert(Asmin1);
//alert(Asmin2);
//alert(z3);
//alert("z " + z);


//Resisting Moment Calculation
//Neutral Axis distace from compressed fibres 

//var bb1=0.85;
var c12=(Asprovt*fyy1)/(0.85*fcc1*bb1*bw1);
var fMnt=0.65*Asprovt*fyy1*(d1-0.85*c12/2);

if(fMnt>mut){
	var z4="S";
	var fa12="SAFE";
}else{
 var z4="F";
 var fa12="Fail, Increase top Reinforcement";
alert("Check Moment Resistance at top");
}

}else{
vut=0;
mut=0;
var Asprovt=(22/7*(frtd11*frtd11)/4*1000)/frts11;
}


if(z4=="F"){
z=z4;
}else{
z=z;
}

//alert(z4);
////-----------------------------------------------------------------------
//alert("12th Check completed...");
////-----------------------------------------------------------------------

//SHEAR CHECK
//No shear reinforcement considered
var Vc=1/6*(Math.sqrt(fcc1))*bw1*d1/1000;
var fVc=0.75*Vc;
var vubt=Math.max(vub,vut);

if(fVc>vubt){
	var z5="S";
	var fa13="SAFE in Shear";
}else{
 var z5="F";
 var fa13="Failed in Shear";
alert("Check Shear");
}


if(z5=="F"){
z=z5;
}else{
z=z;
}
//alert(z5);
//alert(vub);
//alert(vut);
//alert(vubt);
//alert(fVc);
////---------------------------------------------------------------------------
//alert("13th Check completed...");
////---------------------------------------------------------------------------

//PUNCHING SHEAR CHECK

var len11=len1*1000;
var len22=len2*1000;
	


if(bf>bp){
if(lf>lp){
		var bo=2*(lp*1000+bp*1000+d1);
		var bt1=lp/bp;
		var Vr=0.17*(1+2/bt1)*(Math.sqrt(fcc1))*bo*d1/1000;
		var Vdd=(lof11*fy)+lof11*lp*bp*(fdf-thf+hp)*gco;
}
}else if(bf=bp){
	if(lf>lp){
		var bo=2*(lp*1000+d1);
		var bt1=lp/bp;
		var Vr=0.17*(1+2/bt1)*(Math.sqrt(fcc1))*bo*d1/1000;
		var Vdd=(lof11*fy)+lof11*lp*bp*(fdf-thf+hp)*gco;
}
}else if(lf=lp){
	if(bf>bp){
		var bo=2*(bp*1000+d1);
		var bt1=lp/bp;
		var Vr=0.17*(1+2/bt1)*(Math.sqrt(fcc1))*bo*d1/1000;
		var Vdd=(lof11*fy)+lof11*lp*bp*(fdf-thf+hp)*gco;
}
}else if(lf=lp){
	if(bf=bp){
		
		var Vr=1;
		var Vdd=0;
}
}

//alert(bo);
//alert(d1);
//alert(Vr);
//alert(Vdd);

if(Vr>Vdd){
	var z6="S";
	var fa13="SAFE in all Shear";
}else{
	var z6="F";
	var fa13="Fail in all shear";
	alert("Check Punching shear");
}

if(z6=="F"){
z=z6;
}else{
z=z;
}
//alert(z6);
//alert(Vr);
//alert(Vdd);

////---------------------------------------------------------------------------
//alert("14th Check completed...");
////---------------------------------------------------------------------------

//PEDESTAL REINFORCEMENT DESIGN

	if(fx>fz){
	var mup=lof11*(fx*(fdf-thf+hp)+mz);
	var dped1=bp*1000-dc11;
	var Asp=mup*1000000/(0.87*fyy1*dped1);
	var Aspp=prn11*(22/7*(prd11*prd11)/4);
	var Aspmin=0.005*lp*bp;
	var Aspreq=Math.max(Aspmin,Asp);

}else{

	var mup=lof11*(fz*(fdf-thf+hp)+mx);
	var dped1=lp*1000-dc11;
	var Asp=mup*1000000/(0.87*fyy1*dped1);
	var Aspp=prn11*(22/7*(prd11*prd11)/4);
	var Aspmin=0.005*lp*bp;
	var Aspreq=Math.max(Aspmin,Asp);
}
	
if(Aspp>Aspreq){
	var z7="S";
	var fa14="SAFE Ped.Reinforcement";
}
else{
	var z7="F";
	var fa14="Fail Ped.Reinforcement";
	alert("Change Pedestal Reinforcement");
}

if(z7=="F"){
z=z7;
}else{
z=z;
}
//alert(z7);
//alert(mup);
//alert(dped1);
//alert(Aspreq);
//alert(Aspp);
//alert(casef1);
//alert(qmaxf1);
//alert(upp1);

//alert("this is final "+ z);

////---------------------------------------------------------------------------
//alert("Design completed...");
////---------------------------------------------------------------------------

var yz="S";
//alert(yz);

if(z==yz){	
document.getElementById("222").value = (" Reinforcement is ok");
document.getElementById("222").style.backgroundColor = "lightgreen";
}
else{
document.getElementById("222").value = (" Revise Reinforcement");
document.getElementById("222").style.backgroundColor = "red";
}


//alert(s);


//REINFORCEMENT QUANTITY	

var abr1=22/7*(frbd11*frbd11/4);
var atr1=22/7*(frtd11*frtd11/4);
var apr1=22/7*(prd11*prd11/4);


var nobr1=Math.ceil((lf-0.1)/(frbs11/1000)+1);
var nobr2=Math.ceil((bf-0.1)/(frbs11/1000)+1);
var notr1=Math.ceil((lf-0.1)/(frts11/1000)+1);
var notr2=Math.ceil((bf-0.1)/(frts11/1000)+1);


var lobl1=lf-0.1+thf/2;
var lobb1=bf-0.1+thf/2;
var tlobb=(nobr1*lobl1+nobr2*lobb1)
var btbw=tlobb*(abr1/1000000)*7850;


var lotl1=lf-0.1+thf/2;
var lotb1=bf-0.1+thf/2;
var tlotb=(notr1*lotl1+notr2*lotb1);
var bttw=tlotb*(atr1/1000000)*7850;

//pedestal
var prl1=(0.3+(fdf+hp-0.1)+0.3);
var prw=prn11*prl1*(apr1/1000000)*7850+(22/7*10*10/4/1000000)*((fdf+hp-thf-0.1)/(0.15)+1)*7850;

var rqty=Math.ceil(btbw+bttw+prw);
//alert(rqty);
var kgpm=Math.ceil(rqty/cty);
var frq1=(rqty + "Kg & " + kgpm + "kg/m3");
document.getElementById("reinq").value=frq1;					


//Results
//document.getElementById("date1").value;



document.getElementById("100a").innerHTML = document.getElementById("filename").value;
document.getElementById("100b").innerHTML = document.getElementById("date1").value;
document.getElementById("100c").innerHTML = document.getElementById("Rev1").value;
document.getElementById("101").innerHTML = lf.toFixed(2);
document.getElementById("102").innerHTML = bf.toFixed(2);
document.getElementById("103").innerHTML = thf.toFixed(2);
document.getElementById("104").innerHTML = fdf.toFixed(2);
document.getElementById("105").innerHTML = hts.toFixed(2);
document.getElementById("106").innerHTML = dc11;
document.getElementById("107").innerHTML = lp.toFixed(2);
document.getElementById("108").innerHTML = bp.toFixed(2);
document.getElementById("109").innerHTML = hp.toFixed(2);
document.getElementById("110").innerHTML = ex.toFixed(2);
document.getElementById("111a").innerHTML = ez.toFixed(2);
document.getElementById("112").innerHTML = gco;
document.getElementById("113").innerHTML = gso;
document.getElementById("114").innerHTML = coe;
document.getElementById("115").innerHTML = qca;
document.getElementById("116").innerHTML = fos1;
document.getElementById("117").innerHTML = fos2;
document.getElementById("118").innerHTML = fx.toFixed(2);
document.getElementById("119").innerHTML = fy.toFixed(2);
document.getElementById("120").innerHTML = fz.toFixed(2);
document.getElementById("121").innerHTML = mx.toFixed(2);
document.getElementById("123").innerHTML = mz.toFixed(2);

//Stability CHECKS
document.getElementById("124").innerHTML = fdnw.toFixed(2);
document.getElementById("125").innerHTML = sow.toFixed(2);
document.getElementById("126").innerHTML = p.toFixed(2);
document.getElementById("127").innerHTML = mxx.toFixed(2);
document.getElementById("128").innerHTML = mzz.toFixed(2);
document.getElementById("129").innerHTML = ex11.toFixed(2);
document.getElementById("130").innerHTML = ez11.toFixed(2);
document.getElementById("131").innerHTML = A.toFixed(2);
document.getElementById("132").innerHTML = zx.toFixed(2);
document.getElementById("133").innerHTML = zz.toFixed(2);
document.getElementById("134").innerHTML = ex33.toFixed(2);
document.getElementById("135").innerHTML = ez33.toFixed(2);
document.getElementById("136").innerHTML = qmax1.toFixed(2);
document.getElementById("137").innerHTML = qmin1.toFixed(2);
document.getElementById("138").innerHTML = fox.toFixed(2);
document.getElementById("139").innerHTML = foz.toFixed(2);
document.getElementById("140").innerHTML = fsx.toFixed(2);
document.getElementById("141").innerHTML = fsz.toFixed(2);
document.getElementById("142").innerHTML = avcx.toFixed(2);
document.getElementById("143").innerHTML = avcz.toFixed(2);
document.getElementById("144").innerHTML = kc.toFixed(2);
document.getElementById("145").innerHTML = casef1;
document.getElementById("146").innerHTML = qmaxf1.toFixed(2);
document.getElementById("147").innerHTML = upp1;
document.getElementById("147a").innerHTML = s + " in all Stability Checks";
//Reinfprcement design
document.getElementById("148").innerHTML = len1.toFixed(2);
document.getElementById("149").innerHTML = len2.toFixed(2);
document.getElementById("150").innerHTML = qnet.toFixed(2);
document.getElementById("151").innerHTML = mub.toFixed(2);
document.getElementById("152").innerHTML = vub.toFixed(2);
document.getElementById("153").innerHTML = As.toFixed(2);
document.getElementById("154").innerHTML = Asprov.toFixed(2);
document.getElementById("154a").innerHTML = fa11;

document.getElementById("155").innerHTML = mut.toFixed(2);
document.getElementById("156").innerHTML = vut.toFixed(2);
document.getElementById("157").innerHTML = Asprovt.toFixed(2);
document.getElementById("157a").innerHTML = fa12;
//Shear Check
document.getElementById("158").innerHTML = vubt.toFixed(2);
document.getElementById("159").innerHTML = fVc.toFixed(2);
document.getElementById("160").innerHTML = bo.toFixed(2);
document.getElementById("161").innerHTML = d1.toFixed(2);
document.getElementById("162").innerHTML = Vdd.toFixed(2);
document.getElementById("163").innerHTML = Vr.toFixed(2);
document.getElementById("163a").innerHTML = fa13;
//Pedestal Check
document.getElementById("164").innerHTML = mup.toFixed(2);
document.getElementById("165").innerHTML = Aspreq.toFixed(2);
document.getElementById("166").innerHTML = Aspp.toFixed(2);
document.getElementById("166a").innerHTML = fa14;
//QUANTITY
document.getElementById("167").innerHTML = cty.toFixed(2);
document.getElementById("168").innerHTML = bty.toFixed(2);
document.getElementById("169").innerHTML = pty.toFixed(2);
document.getElementById("170").innerHTML = rqty.toFixed(2);







}

//EXPORT TO EXCEL


function ToEx(DGNTable3,filename=''){
alert("Y");

    
}





 


