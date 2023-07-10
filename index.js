//bai tap1

function cau1() {
  // var tongSo = 0;
  // for (var i = 1; tongSo < 10000; i++) {
  //   tongSo +=  i;
  // }
  var n = 1;
  var sum = 0;

  while (sum <= 10000) {
    sum += n;
    n++;
  }


  document.querySelector("#timTongSo").innerHTML = n;
}

//baitap2

function cau2() {
  var nhapX = document.getElementById("nhapX").value * 1;
  var nhapN = document.getElementById("nhapN").value * 1;
  var tong = 0;
  for (var i = 1; i <= nhapN; i++) {
    tong += Math.pow(nhapX, i);
  }
  document.querySelector("#ketQuaLuyThua").innerHTML = tong;
}

//bai3

function cau3() {
  var soM = document.getElementById("soM").value * 1;
  var giaiThua = 1;
  for (var i = 1; i < soM; i++) {
    giaiThua += giaiThua * i;
  }
  document.querySelector("#timGiaiThua").innerHTML = giaiThua;
}

//bai4

function cau4() {
  var theDiv = document.querySelectorAll("#ketQua4 .div");

  for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      theDiv[i].style.background = "blue";
      theDiv[i].style.display = "block"
    } else {
      theDiv[i].style.background = "red";
      theDiv[i].style.display = "block"
    }
  }
}

