{"changed":true,"filter":false,"title":"script.js","tooltip":"/assets/js/script.js","value":"\nfunction swapTiles(cell1,cell2) {\n  var temp = document.getElementById(cell1).className;\n  document.getElementById(cell1).className = document.getElementById(cell2).className;\n  document.getElementById(cell2).className = temp;\n}\n\n function shuffle() {\n//Use nested loops to access each cell of the 3x3 grid\nfor (var row=1;row<=4;row++) { //For each row of the 3x3 grid\n   for (var column=1;column<=4;column++) { //For each column in this row\n  \n    var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 3\n    var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 3\n     \n    swapTiles(\"cell\"+row+column,\"cell\"+row2+column2); //Swap the look & feel of both cells\n  } \n} \n}\n\n\n\nfunction clickTile(row,column) {\n  var cell = document.getElementById(\"cell\"+row+column);\n  var tile = cell.className;\n  if (tile!=\"tile16\") { \n       //Checking if white tile on the right\n       if (column<4) {\n         if ( document.getElementById(\"cell\"+row+(column+1)).className==\"tile16\") {\n           swapTiles(\"cell\"+row+column,\"cell\"+row+(column+1));\n           return;\n         }\n       }\n       //Checking if white tile on the left\n       if (column>1) {\n         if ( document.getElementById(\"cell\"+row+(column-1)).className==\"tile16\") {\n           swapTiles(\"cell\"+row+column,\"cell\"+row+(column-1));\n           return;\n         }\n       }\n         //Checking if white tile is above\n       if (row>1) {\n         if ( document.getElementById(\"cell\"+(row-1)+column).className==\"tile16\") {\n           swapTiles(\"cell\"+row+column,\"cell\"+(row-1)+column);\n           return;\n         }\n       }\n       //Checking if white tile is below\n       if (row<4) {\n         if ( document.getElementById(\"cell\"+(row+1)+column).className==\"tile16\") {\n           swapTiles(\"cell\"+row+column,\"cell\"+(row+1)+column);\n           return;\n         }\n       } \n  }\n  \n}\n\n$(document).ready(function(){\n\n $(\".rules\").click(function() {\n  $( \".block_text\" ).toggle( 1000 );\n});\n})","undoManager":{"mark":-2,"position":100,"stack":[[{"start":{"row":21,"column":0},"end":{"row":24,"column":27},"action":"insert","lines":["function newGame(){","          var f = document.myForm.elements;","          var masNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,\" \"];","          var lastNum = 15;"],"id":582}],[{"start":{"row":21,"column":9},"end":{"row":21,"column":16},"action":"remove","lines":["newGame"],"id":583},{"start":{"row":21,"column":9},"end":{"row":21,"column":16},"action":"insert","lines":["shuffle"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":33},"action":"remove","lines":["myForm"],"id":584},{"start":{"row":22,"column":27},"end":{"row":22,"column":32},"action":"insert","lines":["table"]}],[{"start":{"row":26,"column":0},"end":{"row":36,"column":9},"action":"insert","lines":["for (var  i = 0; i < 16; i ++){","          var a =Math.round(Math.random() * lastNum);//случайным образом определяем номер значения","          f[i].value = masNum[a];//задаем значе��ие для кнопки с номером","          //убираем выбраный элемент из масива. Кладем на его место последний элемент масива","          //длинну масива уменьшаем на единичку","          masNum[a] = masNum[lastNum];","          lastNum--;","          ","        }   ","         ","        }"],"id":585}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"remove","lines":["e"],"id":586},{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"remove","lines":["l"]},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"remove","lines":["b"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"remove","lines":["a"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"remove","lines":["t"]}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"insert","lines":["g"],"id":587},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"insert","lines":["a"]},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"insert","lines":["m"]},{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"insert","lines":["e"]}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"insert","lines":["_"],"id":588}],[{"start":{"row":22,"column":27},"end":{"row":22,"column":32},"action":"remove","lines":["game_"],"id":589},{"start":{"row":22,"column":27},"end":{"row":22,"column":37},"action":"insert","lines":["game_field"]}],[{"start":{"row":22,"column":36},"end":{"row":22,"column":37},"action":"remove","lines":["d"],"id":590},{"start":{"row":22,"column":35},"end":{"row":22,"column":36},"action":"remove","lines":["l"]},{"start":{"row":22,"column":34},"end":{"row":22,"column":35},"action":"remove","lines":["e"]},{"start":{"row":22,"column":33},"end":{"row":22,"column":34},"action":"remove","lines":["i"]},{"start":{"row":22,"column":32},"end":{"row":22,"column":33},"action":"remove","lines":["f"]},{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"remove","lines":["_"]},{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"remove","lines":["e"]},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"remove","lines":["m"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"remove","lines":["a"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"remove","lines":["g"]}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":37},"action":"remove","lines":["document..elements;"],"id":591},{"start":{"row":22,"column":18},"end":{"row":22,"column":47},"action":"insert","lines":["document.getElementById(cell1"]}],[{"start":{"row":22,"column":46},"end":{"row":22,"column":47},"action":"remove","lines":["1"],"id":592},{"start":{"row":22,"column":45},"end":{"row":22,"column":46},"action":"remove","lines":["l"]},{"start":{"row":22,"column":44},"end":{"row":22,"column":45},"action":"remove","lines":["l"]},{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"remove","lines":["e"]},{"start":{"row":22,"column":42},"end":{"row":22,"column":43},"action":"remove","lines":["c"]}],[{"start":{"row":22,"column":42},"end":{"row":22,"column":43},"action":"insert","lines":["g"],"id":593},{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"insert","lines":["a"]},{"start":{"row":22,"column":44},"end":{"row":22,"column":45},"action":"insert","lines":["m"]},{"start":{"row":22,"column":45},"end":{"row":22,"column":46},"action":"insert","lines":["e"]}],[{"start":{"row":22,"column":46},"end":{"row":22,"column":47},"action":"insert","lines":[")"],"id":594}],[{"start":{"row":22,"column":47},"end":{"row":22,"column":48},"action":"insert","lines":[";"],"id":595}],[{"start":{"row":22,"column":42},"end":{"row":22,"column":43},"action":"insert","lines":["\""],"id":596},{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"insert","lines":["\""]}],[{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"remove","lines":["\""],"id":597}],[{"start":{"row":22,"column":47},"end":{"row":22,"column":48},"action":"insert","lines":["\""],"id":598},{"start":{"row":22,"column":48},"end":{"row":22,"column":49},"action":"insert","lines":["\""]}],[{"start":{"row":22,"column":48},"end":{"row":22,"column":49},"action":"remove","lines":["\""],"id":599}],[{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"remove","lines":["1"],"id":600},{"start":{"row":23,"column":24},"end":{"row":23,"column":38},"action":"insert","lines":["clickTile(1,1)"]}],[{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"remove","lines":["2"],"id":601},{"start":{"row":23,"column":39},"end":{"row":23,"column":53},"action":"insert","lines":["clickTile(1,1)"]}],[{"start":{"row":21,"column":0},"end":{"row":39,"column":0},"action":"remove","lines":["function shuffle(){","          var f = document.getElementById(\"game\");","          var masNum = [clickTile(1,1),clickTile(1,1),3,4,5,6,7,8,9,10,11,12,13,14,15,\" \"];","          var lastNum = 15;","","for (var  i = 0; i < 16; i ++){","          var a =Math.round(Math.random() * lastNum);//случайным образом определяем номер значения","          f[i].value = masNum[a];//задаем значение для кнопки с номером","          //убираем выбраный элемент из масива. Кладем на его место последний элемент масива","          //длинну масива уменьшаем на единичку","          masNum[a] = masNum[lastNum];","          lastNum--;","          ","        }   ","         ","        }","","",""],"id":602}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"remove","lines":["*"],"id":603},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"remove","lines":["/"]}],[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"remove","lines":["/"],"id":604},{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"remove","lines":["*"]}],[{"start":{"row":59,"column":0},"end":{"row":59,"column":1},"action":"insert","lines":[" "],"id":605},{"start":{"row":59,"column":1},"end":{"row":59,"column":2},"action":"insert","lines":["$"]}],[{"start":{"row":59,"column":2},"end":{"row":59,"column":4},"action":"insert","lines":["()"],"id":606}],[{"start":{"row":59,"column":3},"end":{"row":59,"column":5},"action":"insert","lines":["\"\""],"id":607}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"insert","lines":["b"],"id":608},{"start":{"row":59,"column":5},"end":{"row":59,"column":6},"action":"insert","lines":["l"]},{"start":{"row":59,"column":6},"end":{"row":59,"column":7},"action":"insert","lines":["o"]},{"start":{"row":59,"column":7},"end":{"row":59,"column":8},"action":"insert","lines":["c"]},{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"insert","lines":["k"]}],[{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"insert","lines":["_"],"id":609},{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"insert","lines":["t"]},{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"insert","lines":["e"]},{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"insert","lines":["x"]},{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"insert","lines":["{"],"id":610},{"start":{"row":59,"column":17},"end":{"row":59,"column":18},"action":"insert","lines":["}"]}],[{"start":{"row":59,"column":17},"end":{"row":61,"column":1},"action":"insert","lines":["","     "," "],"id":611}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"insert","lines":["."],"id":612}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"remove","lines":["."],"id":613}],[{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"remove","lines":["{"],"id":614},{"start":{"row":59,"column":16},"end":{"row":59,"column":35},"action":"insert","lines":[".toggle( display );"]}],[{"start":{"row":61,"column":1},"end":{"row":61,"column":2},"action":"remove","lines":["}"],"id":615}],[{"start":{"row":59,"column":16},"end":{"row":60,"column":5},"action":"remove","lines":[".toggle( display );","     "],"id":616},{"start":{"row":59,"column":16},"end":{"row":61,"column":3},"action":"insert","lines":[".click(function() {","  $( \"p\" ).toggle( \"slow\" );","});"]}],[{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"remove","lines":["p"],"id":617}],[{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":["t"],"id":618},{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"insert","lines":["h"]},{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"insert","lines":["i"]},{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":60,"column":6},"end":{"row":60,"column":10},"action":"remove","lines":["this"],"id":619},{"start":{"row":60,"column":6},"end":{"row":60,"column":16},"action":"insert","lines":["block_text"]}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"insert","lines":["."],"id":620}],[{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"remove","lines":["t"],"id":621},{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"remove","lines":["x"]},{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"remove","lines":["e"]},{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"remove","lines":["t"]}],[{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"insert","lines":["r"],"id":622},{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"insert","lines":["u"]},{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"insert","lines":["l"]},{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"insert","lines":["e"]},{"start":{"row":59,"column":15},"end":{"row":59,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":60,"column":15},"end":{"row":60,"column":16},"action":"remove","lines":["t"],"id":623},{"start":{"row":60,"column":14},"end":{"row":60,"column":15},"action":"remove","lines":["x"]},{"start":{"row":60,"column":13},"end":{"row":60,"column":14},"action":"remove","lines":["e"]},{"start":{"row":60,"column":12},"end":{"row":60,"column":13},"action":"remove","lines":["t"]},{"start":{"row":60,"column":11},"end":{"row":60,"column":12},"action":"remove","lines":["_"]},{"start":{"row":60,"column":10},"end":{"row":60,"column":11},"action":"remove","lines":["k"]},{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"remove","lines":["c"]},{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"remove","lines":["o"]},{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"remove","lines":["l"]},{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"remove","lines":["b"]}],[{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":["p"],"id":624}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["$"],"id":625}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"insert","lines":["()"],"id":626}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["d"],"id":627}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"remove","lines":["d"],"id":628},{"start":{"row":1,"column":2},"end":{"row":1,"column":10},"action":"insert","lines":["document"]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":11},"action":"remove","lines":["(document)"],"id":629}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["d"],"id":630}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["d"],"id":631}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"insert","lines":["()"],"id":632}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["d"],"id":633}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["o"],"id":634}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":4},"action":"remove","lines":["do"],"id":635},{"start":{"row":1,"column":2},"end":{"row":1,"column":10},"action":"insert","lines":["document"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":11},"action":"remove","lines":["","$(document)"],"id":636},{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["$(document).ready(function(){"]}],[{"start":{"row":61,"column":1},"end":{"row":61,"column":2},"action":"insert","lines":["}"],"id":637},{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":60,"column":2},"end":{"row":60,"column":3},"action":"remove","lines":[";"],"id":638}],[{"start":{"row":61,"column":1},"end":{"row":61,"column":2},"action":"insert","lines":[")"],"id":639}],[{"start":{"row":60,"column":2},"end":{"row":60,"column":3},"action":"insert","lines":[";"],"id":640}],[{"start":{"row":59,"column":6},"end":{"row":59,"column":7},"action":"remove","lines":["p"],"id":641}],[{"start":{"row":59,"column":6},"end":{"row":59,"column":7},"action":"insert","lines":["."],"id":642},{"start":{"row":59,"column":7},"end":{"row":59,"column":8},"action":"insert","lines":["b"]},{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"insert","lines":["l"]}],[{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"insert","lines":["o"],"id":643},{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"insert","lines":["c"]}],[{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"insert","lines":["k"],"id":644},{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"insert","lines":["_"]},{"start":{"row":59,"column":13},"end":{"row":59,"column":14},"action":"insert","lines":["t"]},{"start":{"row":59,"column":14},"end":{"row":59,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":59,"column":15},"end":{"row":59,"column":16},"action":"insert","lines":["x"],"id":645},{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"remove","lines":["w"],"id":646},{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"remove","lines":["o"]},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"remove","lines":["l"]},{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"remove","lines":["s"]}],[{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"insert","lines":["1"],"id":647},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"insert","lines":["0"]},{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"insert","lines":["0"]},{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"insert","lines":["0"]}],[{"start":{"row":59,"column":29},"end":{"row":59,"column":30},"action":"remove","lines":["\""],"id":648}],[{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"remove","lines":["\""],"id":649}],[{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"remove","lines":["0"],"id":650},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"remove","lines":["0"]},{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"remove","lines":["0"]},{"start":{"row":59,"column":29},"end":{"row":59,"column":30},"action":"remove","lines":["1"]}],[{"start":{"row":59,"column":29},"end":{"row":59,"column":31},"action":"insert","lines":["\"\""],"id":651}],[{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"insert","lines":["s"],"id":652},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"insert","lines":["l"]},{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"insert","lines":["o"]},{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"insert","lines":["w"]}],[{"start":{"row":59,"column":35},"end":{"row":59,"column":36},"action":"insert","lines":[","],"id":653}],[{"start":{"row":59,"column":36},"end":{"row":59,"column":43},"action":"insert","lines":["\"swing\""],"id":654}],[{"start":{"row":59,"column":34},"end":{"row":59,"column":35},"action":"remove","lines":["\""],"id":655},{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"remove","lines":["w"]},{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"remove","lines":["o"]},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"remove","lines":["l"]},{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"remove","lines":["s"]},{"start":{"row":59,"column":29},"end":{"row":59,"column":30},"action":"remove","lines":["\""]}],[{"start":{"row":59,"column":29},"end":{"row":59,"column":30},"action":"insert","lines":["1"],"id":656},{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"insert","lines":["0"]},{"start":{"row":59,"column":31},"end":{"row":59,"column":32},"action":"insert","lines":["0"]},{"start":{"row":59,"column":32},"end":{"row":59,"column":33},"action":"insert","lines":["0"]}],[{"start":{"row":59,"column":30},"end":{"row":59,"column":31},"action":"insert","lines":["0"],"id":657}],[{"start":{"row":59,"column":41},"end":{"row":59,"column":42},"action":"remove","lines":["\""],"id":658},{"start":{"row":59,"column":40},"end":{"row":59,"column":41},"action":"remove","lines":["g"]},{"start":{"row":59,"column":39},"end":{"row":59,"column":40},"action":"remove","lines":["n"]},{"start":{"row":59,"column":38},"end":{"row":59,"column":39},"action":"remove","lines":["i"]},{"start":{"row":59,"column":37},"end":{"row":59,"column":38},"action":"remove","lines":["w"]},{"start":{"row":59,"column":36},"end":{"row":59,"column":37},"action":"remove","lines":["s"]},{"start":{"row":59,"column":35},"end":{"row":59,"column":36},"action":"remove","lines":["\""]}],[{"start":{"row":59,"column":35},"end":{"row":59,"column":36},"action":"insert","lines":["c"],"id":659},{"start":{"row":59,"column":36},"end":{"row":59,"column":37},"action":"insert","lines":["o"]},{"start":{"row":59,"column":37},"end":{"row":59,"column":38},"action":"insert","lines":["m"]},{"start":{"row":59,"column":38},"end":{"row":59,"column":39},"action":"insert","lines":["p"]},{"start":{"row":59,"column":39},"end":{"row":59,"column":40},"action":"insert","lines":["l"]}],[{"start":{"row":59,"column":40},"end":{"row":59,"column":41},"action":"insert","lines":["e"],"id":660},{"start":{"row":59,"column":41},"end":{"row":59,"column":42},"action":"insert","lines":["t"]},{"start":{"row":59,"column":42},"end":{"row":59,"column":43},"action":"insert","lines":["e"]}],[{"start":{"row":59,"column":42},"end":{"row":59,"column":43},"action":"remove","lines":["e"],"id":661},{"start":{"row":59,"column":41},"end":{"row":59,"column":42},"action":"remove","lines":["t"]},{"start":{"row":59,"column":40},"end":{"row":59,"column":41},"action":"remove","lines":["e"]},{"start":{"row":59,"column":39},"end":{"row":59,"column":40},"action":"remove","lines":["l"]},{"start":{"row":59,"column":38},"end":{"row":59,"column":39},"action":"remove","lines":["p"]},{"start":{"row":59,"column":37},"end":{"row":59,"column":38},"action":"remove","lines":["m"]},{"start":{"row":59,"column":36},"end":{"row":59,"column":37},"action":"remove","lines":["o"]},{"start":{"row":59,"column":35},"end":{"row":59,"column":36},"action":"remove","lines":["c"]},{"start":{"row":59,"column":34},"end":{"row":59,"column":35},"action":"remove","lines":[","]}],[{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"remove","lines":["0"],"id":662}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["$(document).ready(function(){",""],"id":665}],[{"start":{"row":56,"column":1},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":666}],[{"start":{"row":57,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["$(document).ready(function(){",""],"id":667}],[{"start":{"row":56,"column":1},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":668}],[{"start":{"row":60,"column":15},"end":{"row":60,"column":16},"action":"remove","lines":["s"],"id":669},{"start":{"row":60,"column":14},"end":{"row":60,"column":15},"action":"remove","lines":["e"]},{"start":{"row":60,"column":13},"end":{"row":60,"column":14},"action":"remove","lines":["l"]},{"start":{"row":60,"column":12},"end":{"row":60,"column":13},"action":"remove","lines":["u"]},{"start":{"row":60,"column":11},"end":{"row":60,"column":12},"action":"remove","lines":["r"]},{"start":{"row":60,"column":10},"end":{"row":60,"column":11},"action":"remove","lines":["_"]},{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"remove","lines":["k"]},{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"remove","lines":["c"]},{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"remove","lines":["o"]},{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"remove","lines":["l"]},{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"remove","lines":["b"]}],[{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"insert","lines":["r"],"id":670},{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":["u"]},{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"insert","lines":["l"]},{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"insert","lines":["e"]},{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"remove","lines":["1"],"id":671}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["0"],"id":672}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"remove","lines":["1"],"id":673}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["0"],"id":674}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"remove","lines":["0"],"id":675}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["1"],"id":676}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"remove","lines":["0"],"id":677}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["1"],"id":678}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["1"],"id":679}],[{"start":{"row":15,"column":38},"end":{"row":15,"column":39},"action":"insert","lines":["2"],"id":680}],[{"start":{"row":15,"column":38},"end":{"row":15,"column":39},"action":"remove","lines":["2"],"id":681}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"remove","lines":["1"],"id":682}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"remove","lines":["!"],"id":683}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["!"],"id":684}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":20,"column":0},"end":{"row":20,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1565478166262}