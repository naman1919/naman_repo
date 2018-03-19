var td;
var i,j,inum,id,id2;
var num3 = [];
var idstr = [];
var d = 0;
function loadSdk()
{
	var tab,row,cell,tr,td,num1;
	tab = document.createElement('table');
	var t2 = 0;
	for(row = 0 ; row < 9 ; row++)
	{
		var t1=0;
		tr = document.createElement('tr');
		if(row%3 == 0)	
     {
     	t2++;
     }
		for(cell = 0 ; cell < 9 ; cell++)
		{
		 if(cell%3 == 0)	
     {
     	t1++;
     }
     td = document.createElement('td');
     num1 = document.createElement("input");
     num1.setAttribute("type","text");
     num1.setAttribute("maxlength","1");
     num1.setAttribute("id",row+""+cell);
     num1.setAttribute("class",t2+""+t1);
    // num1.value = row+""+cell;
     td.appendChild(num1);
     tr.appendChild(td);
    }
    tab.appendChild(tr);
	}
	document.getElementById("sdk").appendChild(tab);
  sudokuGenerator();
}
function checkWin()
{
  timeFunction();
	for(i = 0 ; i < 9 ; i++)
  {
  	for(j =0 ; j < 9 ; j++)
  	{
  	// if(!num2[i]) num2[i] = [];                        //If the i-th element of num2 is 'falsy', assign an empty array to the i-th element."
    // num2[i][j]=parseInt(document.getElementById(i+""+j).value);
     td = document.getElementById(i+""+j);
     td.onchange = function(){
     inum =	this.value;
     id = this.id;
     id1 = this.id%10;
     id2 = Math.floor(this.id/10);
     var count = 0;
     document.getElementById("p1").innerHTML = "";
     if((this.value.search(/[1-9]/)<0))
     {
      document.getElementById("p1").innerHTML = "Enter only number between 1 to 9";
     }
     for(var k = 0 ; k < 9 ; k++)
     {
     	  if(id != document.getElementById(k+""+id1).id)
     	  {
     	    if(inum == document.getElementById(k+""+id1).value )
     	    {
     	 	    document.getElementById(id).style.background = "pink";
            count++;
     	    }
     	  }
      	if(id != document.getElementById(id2+""+k).id)
      	{
         if(inum == document.getElementById(id2+""+k).value)
     		 {
     		  document.getElementById(id).style.background = "pink";	
          count++;
     		 }
     	  }
        if(count < 1)
        {
          document.getElementById(id).style.background = "white";
        }
      }
     var cname = this.className;
     var ids = document.getElementsByClassName(cname);
     alert(cname);
     for(var i = 0 ; i < 9 ; i++)
     {
     	 if(id != ids[i].id)
     	 {
     	 //	alert(ids[i].id);
     		 if(inum == ids[i].value)
     		 {
     			document.getElementById(id).style.background = "pink";
     		 }
     	 }
     }
   // alert(inum);
     }; 
    }
  }
}
function sudokuGenerator()
{
 var ran_arr = shuffle([1,2,3,4,5,6,7,8,9]);
 for(var i = 0 ; i < 9 ; i++)
 {
   document.getElementById(0+""+i).value = ran_arr[i];
 }
 document.getElementById('10').value = document.getElementById('03').value;
 document.getElementById('11').value = document.getElementById('04').value;
 document.getElementById('12').value = document.getElementById('05').value;
 document.getElementById('13').value = document.getElementById('06').value;
 document.getElementById('14').value = document.getElementById('07').value;
 document.getElementById('15').value = document.getElementById('08').value;
 document.getElementById('16').value = document.getElementById('00').value;
 document.getElementById('17').value = document.getElementById('01').value;
 document.getElementById('18').value = document.getElementById('02').value;

 document.getElementById('20').value = document.getElementById('13').value;
 document.getElementById('21').value = document.getElementById('14').value;
 document.getElementById('22').value = document.getElementById('15').value;
 document.getElementById('23').value = document.getElementById('16').value;
 document.getElementById('24').value = document.getElementById('17').value;
 document.getElementById('25').value = document.getElementById('18').value;
 document.getElementById('26').value = document.getElementById('10').value;
 document.getElementById('27').value = document.getElementById('11').value;
 document.getElementById('28').value = document.getElementById('12').value;

 document.getElementById('30').value = document.getElementById('21').value;
 document.getElementById('31').value = document.getElementById('22').value;
 document.getElementById('32').value = document.getElementById('23').value;
 document.getElementById('33').value = document.getElementById('24').value;
 document.getElementById('34').value = document.getElementById('25').value;
 document.getElementById('35').value = document.getElementById('26').value;
 document.getElementById('36').value = document.getElementById('27').value;
 document.getElementById('37').value = document.getElementById('28').value;
 document.getElementById('38').value = document.getElementById('20').value;

 document.getElementById('40').value = document.getElementById('33').value;
 document.getElementById('41').value = document.getElementById('34').value;
 document.getElementById('42').value = document.getElementById('35').value;
 document.getElementById('43').value = document.getElementById('36').value;
 document.getElementById('44').value = document.getElementById('37').value;
 document.getElementById('45').value = document.getElementById('38').value;
 document.getElementById('46').value = document.getElementById('30').value;
 document.getElementById('47').value = document.getElementById('31').value;
 document.getElementById('48').value = document.getElementById('32').value;

 document.getElementById('50').value = document.getElementById('43').value;
 document.getElementById('51').value = document.getElementById('44').value;
 document.getElementById('52').value = document.getElementById('45').value;
 document.getElementById('53').value = document.getElementById('46').value;
 document.getElementById('54').value = document.getElementById('47').value;
 document.getElementById('55').value = document.getElementById('48').value;
 document.getElementById('56').value = document.getElementById('40').value;
 document.getElementById('57').value = document.getElementById('41').value;
 document.getElementById('58').value = document.getElementById('42').value;

 document.getElementById('60').value = document.getElementById('51').value;
 document.getElementById('61').value = document.getElementById('52').value;
 document.getElementById('62').value = document.getElementById('53').value;
 document.getElementById('63').value = document.getElementById('54').value;
 document.getElementById('64').value = document.getElementById('55').value;
 document.getElementById('65').value = document.getElementById('56').value;
 document.getElementById('66').value = document.getElementById('57').value;
 document.getElementById('67').value = document.getElementById('58').value;
 document.getElementById('68').value = document.getElementById('50').value;

 document.getElementById('70').value = document.getElementById('63').value;
 document.getElementById('71').value = document.getElementById('64').value;
 document.getElementById('72').value = document.getElementById('65').value;
 document.getElementById('73').value = document.getElementById('66').value;
 document.getElementById('74').value = document.getElementById('67').value;
 document.getElementById('75').value = document.getElementById('68').value;
 document.getElementById('76').value = document.getElementById('60').value;
 document.getElementById('77').value = document.getElementById('61').value;
 document.getElementById('78').value = document.getElementById('62').value;

 document.getElementById('80').value = document.getElementById('73').value;
 document.getElementById('81').value = document.getElementById('74').value;
 document.getElementById('82').value = document.getElementById('75').value;
 document.getElementById('83').value = document.getElementById('76').value;
 document.getElementById('84').value = document.getElementById('77').value;
 document.getElementById('85').value = document.getElementById('78').value;
 document.getElementById('86').value = document.getElementById('70').value;
 document.getElementById('87').value = document.getElementById('71').value;
 document.getElementById('88').value = document.getElementById('72').value;
 
 for(i = 0 ; i < 9 ; i++)
 {
   for(j = 0 ; j < 9 ; j++)
   {
     document.getElementById(Math.floor((Math.random()*9))+''+Math.floor((Math.random()*9))).value = ""; 
   }
 }
 for(i = 0 ; i < 9 ; i++)
 {
   for(j = 0 ; j < 9 ; j++)
   {
     var disid = document.getElementById(i+""+j);
     if(disid.value != '')
     {
     // alert(disid.id);
      disid.disabled = true;
     }
    }
  }
}
function shuffle(array) 
{
  var i = array.length,j = 0,temp;
   while (i--) {
     j = Math.floor(Math.random() * (i+1));
     temp = array[i];
     array[i] = array[j];
     array[j] = temp;
    }
   return array;
}
function timeFunction()
{
  document.getElementById("time").innerHTML=d++;
  setTimeout(timeFunction,1000);
}