var i,j,k,inum,id,idquotient,idremainder,id2;
var diff_level = 85;
var classname,ids,wincount = 0;
var d = 0;
$(document).ready(function(){
  var table="<table id='tab'>";
  var row,cell;
  var row1 = 0;
  for(row = 0 ; row < 9 ; row++){
    var col1 = 0;
    table += "<tr>";
    if(row%3 == 0) {
      row1++;
    }
    for(cell = 0 ; cell < 9 ; cell++){
      if(cell % 3 == 0) {
        col1++;
      }
      table += "<td id='"+row+cell+"' class='"+row1+col1+"'>"+row1+col1+"</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  $("#sdk").append(table);
  sudokuGenerator();
  $("body #diff_level").click(function(){
    id  = "";
    diff_level = $(this).val();
    sudokuGenerator();
  })
  $("#button").click(function () {
    timeFunction();
    $("#tab td").click(function () {
      classname = this.className;
      ids = document.getElementsByClassName(classname);
      id = $(this).attr("id");
      $("#"+id2).css("background-color","white");
      $("#"+id).css("background-color","lightblue");
      id2 = id; 
    })
    $(".btn").click(function() {
      var count = 0;
      var val = 0;
      $("#"+id).css("background-color","white");
      val = $(this).val();
      $("#"+id).html(val);
      idquotient = Math.floor(id/10);
      idremainder = id % 10;
      for( k = 0 ; k < 9 ; k++) {
        if(id != k+""+idremainder) {
          if(val == $("#"+k+idremainder).html()){
            $("#"+id).css("color","red");
            count++;
          }
        }
        if(id != idquotient+""+k) {
          if(val == $("#"+idquotient+k).html()) {
            $("#"+id).css("color","red");
            count++;
          }
        }
        if(id != ids[k].id) {
          //alert(ids[k].id);
          if(val == $("#"+ids[k].id).html()) {
            $("#"+id).css("color","red");
            count++;
          }
        }  
        if(count < 1) {
          $("#"+id).css("color","blue");
        }
      }
      if(wincount < 81) {
        wincount = 0;
      } 
      for(i = 0 ; i < 9 ; i++) {
        for(j = 0 ; j < 9 ; j++) {
          var bgcolor = $("#"+i+""+j).css("color");
          if(($("#"+i+""+j).html() != "") && bgcolor != "rgb(255, 0, 0)") {
            wincount++;
          }
        }
      }
      if(wincount > 80){
        alert("win");
        window.open("sudokujQ.html","_self");
      }
      //alert(wincount);
    })
  })
})
function sudokuGenerator() {
  var random_array = shuffle([1,2,3,4,5,6,7,8,9]);
  for(i = 0 ; i < 9 ; i++) {
    $("#"+0+i).html(random_array[i]);
  }
  for(i = 0 ; i < 9 ; i++)
  {
    for(j = 0 ; j < 9 ; j++)
    {
      $("#"+i+j).css("background-color","white");
    }
  }
  for(i = 0 ; i < 8 ; i++) {
    if ( i != 2 && i !=5) {
      $("#"+(i+1)+'0').html($("#"+i+"3").html());
      $("#"+(i+1)+'1').html($("#"+i+"4").html());
      $("#"+(i+1)+'2').html($("#"+i+"5").html());
      $("#"+(i+1)+'3').html($("#"+i+"6").html());
      $("#"+(i+1)+'4').html($("#"+i+"7").html());
      $("#"+(i+1)+'5').html($("#"+i+"8").html());
      $("#"+(i+1)+'6').html($("#"+i+"0").html());
      $("#"+(i+1)+'7').html($("#"+i+"1").html());
      $("#"+(i+1)+'8').html($("#"+i+"2").html());
    }
    else {
      $("#"+(i+1)+'0').html($("#"+i+"1").html());
      $("#"+(i+1)+'1').html($("#"+i+"2").html());
      $("#"+(i+1)+'2').html($("#"+i+"3").html());
      $("#"+(i+1)+'3').html($("#"+i+"4").html());
      $("#"+(i+1)+'4').html($("#"+i+"5").html());
      $("#"+(i+1)+'5').html($("#"+i+"6").html());
      $("#"+(i+1)+'6').html($("#"+i+"7").html());
      $("#"+(i+1)+'7').html($("#"+i+"8").html());
      $("#"+(i+1)+'8').html($("#"+i+"0").html());
    }
  }

  for( i = 0 ; i < diff_level ; i++) {
    $("#"+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)).html("");
  } 

  for( i = 0 ; i <9 ; i++)
  {
    for( j = 0 ; j < 9 ; j++) {
      if($("#"+i+j).html() != "") {
        $("#"+i+j).css("background-color","lightgray");
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
