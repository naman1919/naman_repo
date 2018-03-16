//var num2 = [];
var td;
var i,j,inum,id,id2;
var num3 = [];
var idstr = [];
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
     td.appendChild(num1);
     tr.appendChild(td);
    }
    tab.appendChild(tr);
	}
	document.getElementById("sdk").appendChild(tab);
}
function checkWin()
{
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
     for(var k = 0 ; k < 9 ; k++)
     {
     	  if(id != document.getElementById(k+""+id1).id)
     	  {
     	    if(inum == document.getElementById(k+""+id1).value )
     	    {
     	 	    document.getElementById(id).style.background = "pink";
     	    }
     	  }
      	if(id != document.getElementById(id2+""+k).id)
      	{
         if(inum == document.getElementById(id2+""+k).value)
     		 {
     		  document.getElementById(id).style.background = "pink";	
     		 }
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
    alert(inum);
     }; 
    }
  }
}