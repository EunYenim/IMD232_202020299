alert('안녕하세요? 예님이의 홈페이지에 오신 것을 환영합니다');
prompt('샌즈 아시나요?');
confirm('와 아시는구나 샌즈');
let userName;
userName = prompt('당신의 이름은?', '홍길동');
let confirmVal = confirm('너의 이름은 ' + userName + '이구나'); // 취소버튼이 있음
if (confirmVal == true) {
  alert('환영합니다 ' + userName + '님');
}
