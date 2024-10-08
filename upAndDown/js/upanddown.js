var count = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.querySelector("#try").onkeypress = function (e) {
  if (e.keycode == 13 || e.which == 3) {
    // 눌린 키가 [Enter]키라면
    finding(); // finding() 함수 실행
    return false; // keypress 이벤트가 발생했을 때 브라우저가 기본으로 하는 동작 취소
  }
};

function finding() {
  var userNumber = document.querySelector("#try").value;

  if (userNumber >= 1 && userNumber <= 100) {
    if (randomNumber > userNumber) {
      //컴퓨터 숫자가 클 경우 - 'UP' 표시
      document.querySelector("#display").innerHTML = "UP!"; // #display 영역에 'UP!' 표시
    } else if (randomNumber < userNumber) {
      // 컴퓨터 숫자가 작을 경우 - 'DOWN' 표시
      document.querySelector("#display").innerHTML = "DOWN!"; // #display 영역에 'DOWN!' 표시
    } else {
      // 컴퓨터 숫자를 맞혔을 경우
      document.querySelector("#display").innerHTML =
        "<span style='color:red'>맞혔습니다!</span>"; // #display 영역에 빨간색으로 '맞혔습니다!' 표시
    }
    count++;
    document.querySelector("#counter").innerHTML = "시도 횟수: " + count + "회"; // #counter 영역에 시도 횟수(count) 표시
  } else {
    alert("1과 100 사이의 숫자를 입력하세요.");
  }
}
