var i,j,k,inum,id,idquotient,idremainder,val,id2;
var diff_level = 55;
var classname,ids;
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
    diff_level = $(this).val();
  //  alert(diff_level);
    sudokuGenerator();
  })
  $("#button").click(function () {
    timeFunction();
    $("#tab td").click(function () {
      classname = this.className;
      ids = document.getElementsByClassName(classname);
      id = $(this).attr("id");
      var bgcolor = $("#"+id).css("background-color");
      /*if(bgcolor != 'rgb(255,0,0)') {
        $("#"+id2).css("background-color","white");
      }*/
      $("#"+id).css("background-color","lightblue");
      id2 = id; 
    //  alert(id);
    })
    $(".btn").click(function() {
      var count = 0;
      $("#"+id).css("background-color","white");
      val = $(this).val();
      $("#"+id).html(val);
    //  alert(val);
      idquotient = Math.floor(id/10);
      idremainder = id % 10;
      for( k = 0 ; k < 9 ; k++) {
        if(id != k+""+idremainder) {
          if(val == $("#"+k+idremainder).html() && val != ""){
            $("#"+id).css("background-color","rgb(255,0,0)");
            count++;
          }
        }
        if(id != idquotient+""+k) {
          if(val == $("#"+idquotient+k).html() && val != "") {
            $("#"+id).css("background-color","rgb(255,0,0)");
            count++;
          }
        }
        if(id != ids[k].id) {
          //alert(ids[k].id);
          if(val == $("#"+ids[k].id).html() && val != "") {
            $("#"+id).css("background-color","rgb(255,0,0)");
            count++;
          }
        }  
        if(count < 1) {
          $("#"+id).css("background-color","white");
        }
      }
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
 /* for(i = 0 ; i < 2 ; i++) {
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
  $("#30").html($("#21").html());
  $("#31").html($("#22").html());
  $("#32").html($("#23").html());
  $("#33").html($("#24").html());
  $("#34").html($("#25").html());
  $("#35").html($("#26").html());
  $("#36").html($("#27").html());
  $("#37").html($("#28").html());
  $("#38").html($("#20").html());
  for( i = 3 ; i < 5 ; i++){
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

  $("#60").html($("#51").html());
  $("#61").html($("#52").html());
  $("#62").html($("#53").html());
  $("#63").html($("#54").html());
  $("#64").html($("#55").html());
  $("#65").html($("#56").html());
  $("#66").html($("#57").html());
  $("#67").html($("#58").html());
  $("#68").html($("#50").html());

  for( i = 6 ; i < 8 ; i++) {
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
  */
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
