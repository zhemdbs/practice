//[9-1]  userGetCookie함수 만들기 연습 -> oneGetCookie
const oneGetCookie = (cname) => {
  let name = cname + '=';

  let allCookie = decodeURIComponent(document.cookie).split('; ');

  let nameValue = [];
  for (let i = 0; i < allCookie.length; i++) {
    if (allCookie[i].trim().indexOf(name) == 0) {
      nameValue = allCookie[i].trim().split('=');
    }
  }
  return nameValue.length > 0 ? nameValue[1] : 'nothing';
};
console.log(oneGetCookie('userid'));

//[10]forEach 메서드를 이용해 userGetCookie2함수 만들기
console.clear();
console.log(document.cookie); //catid=catman; userid=superman; username=batman; cname=antman

const userGetCookie2 = (cname) => {
  //1. 객체 변수 선언
  let cookie = {}; //{catid="catman"; userid="superman"; username="batman"; cname="antman"} 이렇게 저장시키기 위해

  //2. 반복처리 - forEach()
  document.cookie.split('; ').forEach((el) => {
    //할일처리
    // el=el.trim();
    console.log(el);

    let [k,v] = el.split('=');  //공백처리

    cookie[k.trim()] = v;
    console.log(cookie);
  });
  return cookie[cname];
};
console.log('userGetCookie 함수로 리턴된 값 = ' + userGetCookie2('userid'));

//[11]ES6버전으로 userGetCookie3함수 만들기
console.clear();
console.log(document.cookie); //catid=catman; userid=superman; username=batman; cname=antman

const userGetCookie3 = (cname) => {
  //1.cname 수정
  cname = cname + "="; // userid=

  //2.문자열(쿠키명) 찾기
  const str = document.cookie;
  const isCookieIdx = str.indexOf(cname);

  console.log(isCookieIdx); //userid 검색 시 반환하는 값은? -> 14 반환 / 없으면 -1 반환

  //3.쿠키 가져와서 분리 -> 처리
  let result = 'no result';
  if(isCookieIdx >= 0) {
    //할일 처리
    result = document.cookie.split('; ').find(item => item.startsWith(cname)).split('=')[1];
  }
  return result;
}
console.log('userGetCookie 함수로 리턴된 값 = ' + userGetCookie3('userid'));


function showValue(cname) {
  const rst = document.getElementById('value');
  rst.textContetn = userGetCookie3(cname);
}
function clearValue(){
  const rst = document.getElementById('value');
  rst.textContent = '' ;
}

//JS. value vs textContent 차이점
//input과 같은 form요소에는 -> .value메서드 사용
//div, span등의 요소에는 -> .textContent메서드 사용

