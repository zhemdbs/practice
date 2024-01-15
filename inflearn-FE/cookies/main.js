// 자바스크립트로 쿠키(cookie) 읽기, 생성하기, 삭제하기
// 기본적인 방법 -> document.cookie = "name=??;name2=??;expires=??;path=??;"
window.onload = () => {
  const getBtn = document.querySelector('.btnGetCookie');
  const setBtn = document.querySelector('.btnSetCookie');
  const deleteBtn = document.querySelector('.btnDeleteCookie');

  getBtn.addEventListener('click', () => {
    getCookie();
  })
  setBtn.addEventListener('click', () => {
    setCookie();
  })
  deleteBtn.addEventListener('click', () => {
    deleteCookie();
  })
}

//쿠키읽기
function getCookie() {
  
  //로컬에 저장된 쿠키 뿌려주기
  const allCookies = document.cookie; //하나의 문자열로 리턴 -> cookie1 = value; cookie2 = value; cookie3 = value;
  // console.log(allCookies, typeof allCookies) //string

  // if 조건문 --> 쿠키가 있으면
  if (allCookies != "") {
    alert('저장된 쿠키의 값은 : ' + allCookies + '다시 방문해주셔서 환영합니다')
  } else {
    alert('저장된 쿠키가 없습니다. 첫방문을 환영합니다')
  }
}

//쿠키 생성하기
function setCookie() {
  // 기본적인 날짜 출력 -> 날짜쓸일?? -> 만료일 -> expiration, expire(변수명);
  // let nowDate = new Date();
  // //만료일 생성
  // let expiration = nowDate.getDate(); //현재 날짜만 뽑음

  //현재 날짜에서 10추가된 날짜가 나타나도록 생성-> setDate() 메서드 사용
  let expiration = new Date();
  // expiration.setDate(expiration.getDate() + 10);
  console.log('expiration : ', expiration);

  //날짜를 쿠키로 저장하기 위해 -> UTC방식으로 표기 -> toUTCString()메서드 사용
  console.log('expiration.toUTCString() : ', expiration.toUTCString());


  //쿠키생성
  let cookies = '';
  cookies = 'userid=superman; expires=' + expiration.toUTCString();
  console.log('쿠키생성', cookies);
    
  //쿠키 저장하기
  document.cookie = cookies;
  alert('쿠키생성완료')
}

//쿠키 삭제하기
function deleteCookie() {
  //document.cookie에 값을 대입하는 형태로 쿠키를 삭제
  //쿠키 삭제는 만료일을 가지고 조정하는것. 즉, 사실상 쿠키의 삭제는 수정하는 것이라고 본다.
  //이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.

  // document.cookie = 'username=hong'; //쿠키생성
  // document.cookie = 'username=lee'; //쿠키수정
  document.cookie = 'userid=; expires=Sat, 01 Jan 1972 00:00:00 GMT'; //쿠키삭제
  //쿠키의 Name명이 다르면 쿠키삭제를 해도 안됨
}