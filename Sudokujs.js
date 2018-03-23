var td;
var i,j,inum,id,id2;
var d = 0;
function loadSdk(){
  var tab,row,cell,tr,td,num1;
  tab = document.createElement('table');
  var t2 = 0;
  //Generate Table with required attributes
  for(row = 0 ; row < 9 ; row++) {
    var t1=0;
    tr = document.createElement('tr');
    if(row%3 == 0)  {
      t2++;
    }
    for(cell = 0 ; cell < 9 ; cell++) {
      if(cell%3 == 0) {
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
  sudokuGenerator();
}
function checkWin() {
  timeFunction();
  for(i = 0 ; i < 9 ; i++) {
    for(j =0 ; j < 9 ; j++) {
      td = document.getElementById(i+""+j);
      td.onchange = function(){
      inum =  this.value;
      id = this.id;
      id1 = this.id%10;
      id2 = Math.floor(this.id/10);
      var count = 0;
      var cname = this.className;
      var ids = document.getElementsByClassName(cname);
      document.getElementById("p1").innerHTML = "";
      if((this.value.search(/[1-9]/)<0)) {
        document.getElementById("p1").innerHTML = "Enter only number between 1 to 9";
      }
      for(var k = 0 ; k < 9 ; k++) {
       //check condition for column,row and 3X3 cell
        if(id != document.getElementById(k+""+id1).id) {
          if(inum == document.getElementById(k+""+id1).value && inum != '') {
            document.getElementById(id).style.color = "red";
            count++;
          }
        }
        if(id != document.getElementById(id2+""+k).id) {
          if(inum == document.getElementById(id2+""+k).value && inum != '') {
            document.getElementById(id).style.color = "red";  
            count++;
          }
        }
        if(id != ids[k].id) {
          if(inum == ids[k].value && inum != '') {
            document.getElementById(id).style.color = "red";
            count++;
          }
        }
        if(count < 1) {
          document.getElementById(id).style.color = "blue";
        }
      }
     }; 
    }
  }
}
function sudokuGenerator() {
  var ran_arr = shuffle([1,2,3,4,5,6,7,8,9]);
  for(i = 0 ; i < 9 ; i++) {
    document.getElementById(0+""+i).value = ran_arr[i];  //random number for first column 
  }
 //Using Group Filling and circular shift for making solution
  for(i = 0 ; i < 8 ; i++ ) {
    if(i != 2 && i!= 5){
    document.getElementById((i+1)+'0').value = document.getElementById(i+'3').value;
    document.getElementById((i+1)+'1').value = document.getElementById(i+'4').value;
    document.getElementById((i+1)+'2').value = document.getElementById(i+'5').value;
    document.getElementById((i+1)+'3').value = document.getElementById(i+'6').value;
    document.getElementById((i+1)+'4').value = document.getElementById(i+'7').value;
    document.getElementById((i+1)+'5').value = document.getElementById(i+'8').value;
    document.getElementById((i+1)+'6').value = document.getElementById(i+'0').value;
    document.getElementById((i+1)+'7').value = document.getElementById(i+'1').value;
    document.getElementById((i+1)+'8').value = document.getElementById(i+'2').value;
   }
   else{
    document.getElementById((i+1)+'0').value = document.getElementById(i+'1').value;
    document.getElementById((i+1)+'1').value = document.getElementById(i+'2').value;
    document.getElementById((i+1)+'2').value = document.getElementById(i+'3').value;
    document.getElementById((i+1)+'3').value = document.getElementById(i+'4').value;
    document.getElementById((i+1)+'4').value = document.getElementById(i+'5').value;
    document.getElementById((i+1)+'5').value = document.getElementById(i+'6').value;
    document.getElementById((i+1)+'6').value = document.getElementById(i+'7').value;
    document.getElementById((i+1)+'7').value = document.getElementById(i+'8').value;
    document.getElementById((i+1)+'8').value = document.getElementById(i+'0').value;
   }
  }
  for(i = 0 ; i < 9 ; i++) {
    for(j = 0 ; j < 9 ; j++) {
      document.getElementById(Math.floor((Math.random()*9))+''+Math.floor((Math.random()*9))).value = ""; 
    }
  }
  for(i = 0 ; i < 9 ; i++) {
    for(j = 0 ; j < 9 ; j++) {
      var disid = document.getElementById(i+""+j);
      if(disid.value != '') {
        disid.disabled = true;
      }
    }
  }
}
function shuffle(array) {
  var i = array.length,j = 0,temp;
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function timeFunction() {
  document.getElementById("time").innerHTML=d++;
  setTimeout(timeFunction,1000);
}
