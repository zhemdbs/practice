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

//[11-1]startsWith()사용법
//문자열 검색 시 특정 문자열로 시작하는지를 체크 => true 또는 false로 반환
//즉, 검색할 문자열로 시작하면 true, 아니면 false.
//str.startsWith(검색문자열[,position])
//position 옵션은 '검색문자열'을 탐색할 위치 지정. 기본값 -> 0
//대소문자 구분


//문자열인 경우
const str = '간장 공장 공장장은 강공장장 이름이고, 된장 공장 공장장은 장공장장 이름이다.'
console.log(str.startsWith('강공장장'));  //false
console.log(str.startsWith('장공장장'));  //false
console.log(str.startsWith('박공장장', 10));  //false

console.log(str.startsWith('간장'));  //true
console.log(str.startsWith('강공장장', 11));  //true


//배열인 경우
const ar = 'dog=5; cat=7; hippo=9; line=4; tiger=2'
console.log(typeof ar);  //string

const ar2 = ar.split('; ');
console.log(ar2) //array

const ar3 = ar2.find(item => item.startsWith('hippo=')) //주어진 조건의 함수를 만족하는 첫 번째 요소의 값을 반환. 없다면 undefined로 반환
console.log(ar3); //hippo=9

const ar4 = ar3.split('=');
console.log(ar4); //['hippo', '9']


//배열 요소의 위치를 찾고자 한다면 -> .indexOf()
//배열 요소가 해당 배열에 존재하는지 체크하려면 -> .indexOf() 또는 .includes()