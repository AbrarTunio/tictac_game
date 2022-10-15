let value = "X";
let status = "none";
// let a, b, c, d, e, f, g, h, i;
let x = 0;
let o = 0;

one = document.querySelector("#one");
two = document.querySelector("#two");
three = document.querySelector("#three");
four = document.querySelector("#four");
five = document.querySelector("#five");
six = document.querySelector("#six");
seven = document.querySelector("#seven");
eight = document.querySelector("#eight");
nine = document.querySelector("#nine");

function tic1() {
  if (one.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d1").innerHTML = value;
        document.querySelector(".d1").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d1").innerHTML = value;
        document.querySelector(".d1").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic2() {
  if (two.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d2").innerHTML = value;
        document.querySelector(".d2").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d2").innerHTML = value;
        document.querySelector(".d2").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic3() {
  if (three.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d3").innerHTML = value;
        document.querySelector(".d3").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d3").innerHTML = value;
        document.querySelector(".d3").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic4() {
  if (four.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d4").innerHTML = value;
        document.querySelector(".d4").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d4").innerHTML = value;
        document.querySelector(".d4").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic5() {
  if (five.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d5").innerHTML = value;
        document.querySelector(".d5").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d5").innerHTML = value;
        document.querySelector(".d5").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic6() {
  if (six.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d6").innerHTML = value;
        document.querySelector(".d6").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d6").innerHTML = value;
        document.querySelector(".d6").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic7() {
  if (seven.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d7").innerHTML = value;
        document.querySelector(".d7").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d7").innerHTML = value;
        document.querySelector(".d7").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic8() {
  if (eight.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d8").innerHTML = value;
        document.querySelector(".d8").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d8").innerHTML = value;
        document.querySelector(".d8").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function tic9() {
  if (nine.innerHTML == "") {
    if (status == "none") {
      if (value == "X") {
        value = "O";
        document.querySelector(".d9").innerHTML = value;
        document.querySelector(".d9").style.color = "navy";
      } else {
        value = "X";
        document.querySelector(".d9").innerHTML = value;
        document.querySelector(".d9").style.color = "orange";
      }
      Xwin();
      Owin();
    }
  }
}

function Xwin() {
  var a = one.innerHTML;
  var b = two.innerHTML;
  var c = three.innerHTML;
  var d = four.innerHTML;
  var e = five.innerHTML;
  var f = six.innerHTML;
  var g = seven.innerHTML;
  var h = eight.innerHTML;
  var i = nine.innerHTML;

  if (a == "X" && b == "X" && c == "X") {
    one.style.background = "navy";
    two.style.background = "navy";
    three.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (d == "X" && e == "X" && f == "X") {
    four.style.background = "navy";
    five.style.background = "navy";
    six.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (g == "X" && h == "X" && i == "X") {
    seven.style.background = "navy";
    eight.style.background = "navy";
    nine.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (a == "X" && e == "X" && i == "X") {
    one.style.background = "navy";
    five.style.background = "navy";
    nine.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (c == "X" && e == "X" && g == "X") {
    three.style.background = "navy";
    five.style.background = "navy";
    seven.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (a == "X" && d == "X" && g == "X") {
    one.style.background = "navy";
    four.style.background = "navy";
    seven.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (b == "X" && e == "X" && h == "X") {
    two.style.background = "navy";
    five.style.background = "navy";
    eight.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  } else if (c == "X" && f == "X" && i == "X") {
    three.style.background = "navy";
    six.style.background = "navy";
    nine.style.background = "navy";
    status = "win";
    x++;
    document.querySelector("#scoreX").innerHTML = x;
  }
}

function Owin() {
  var a = one.innerHTML;
  var b = two.innerHTML;
  var c = three.innerHTML;
  var d = four.innerHTML;
  var e = five.innerHTML;
  var f = six.innerHTML;
  var g = seven.innerHTML;
  var h = eight.innerHTML;
  var i = nine.innerHTML;

  if (a == "O" && b == "O" && c == "O") {
    one.style.background = "orange";
    two.style.background = "orange";
    three.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (d == "O" && e == "O" && f == "O") {
    four.style.background = "orange";
    five.style.background = "orange";
    six.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (g == "O" && h == "O" && i == "O") {
    seven.style.background = "orange";
    eight.style.background = "orange";
    nine.style.background = "orange";
    status = "win";

    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (a == "O" && e == "O" && i == "O") {
    one.style.background = "orange";
    five.style.background = "orange";
    nine.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (c == "O" && e == "O" && g == "O") {
    three.style.background = "orange";
    five.style.background = "orange";
    seven.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (a == "O" && d == "O" && g == "O") {
    one.style.background = "orange";
    four.style.background = "orange";
    seven.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (b == "O" && e == "O" && h == "O") {
    two.style.background = "orange";
    five.style.background = "orange";
    eight.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else if (c == "O" && f == "O" && i == "O") {
    three.style.background = "orange";
    six.style.background = "orange";
    nine.style.background = "orange";
    status = "win";
    o++;
    document.querySelector("#scoreO").innerHTML = o;
  } else {
  }
}

mylist = [one, two, three, four, five, six, seven, eight, nine];

function restart() {
  mylist.forEach((element) => {
    element.innerHTML = "";
    element.style.background = "white";
  });
  status = "none";
}
