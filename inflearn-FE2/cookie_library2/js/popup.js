//JS-Cookie라이브러리를 활용한 팝업 창 만들기

//각 요소들 가져오기
const popUp = document.querySelector('.pop_up');
const btnClose = document.querySelector('.btn_close');
const btnCloseToday = document.querySelector('.btn_close_today');

//페이지 최초 접속시 팝업 창 띄우기 -> 주의! 쿠키유무에 따라 노출/비노출 되도록 처리
const popupCookie = Cookies.get('popupCookie');
console.log(popupCookie);

//popupCookie값 유무에 따라 없으면 showPopup()호출해서 팝업 창 띄우기
if (popupCookie == undefined) {
  showPopup();
}

//팝업창 띄우기
function showPopup() {
  popUp.style.display = 'block';
}

//[닫기]버튼 클릭시
btnClose.addEventListener('click', () => {
  concealPopUp(0);
});

//[오늘하루창닫기]버튼 클릭시
btnCloseToday.addEventListener('click', () => {
  // Cookies.set('popupCookie', 'true', { expires: 1 });
  concealPopUp(1, 1);
});

//팝업창 감추기
function concealPopUp(number, expiration) {
  console.log(number + ',' + expiration);

  //[닫기]버튼 클릭시 -> 0
  popUp.style.display = 'none';

  //[오늘하루창닫기]버튼 클릭시
  if (number === 1) {
    //popupCookie값 체크
    if (Cookies.get('popupCookie') === undefined) {
      Cookies.set('popupCookie', 'yes', { expires: expiration, path: '/' });
    }
  }
}
