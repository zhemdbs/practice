// 라이브러리를 이용한 JS쿠키 -> js-cookie

// [1] js-cookie 기본적 생성법 -> Cookies.set('쿠키명', '쿠키값');
Cookies.set('userid', 'superman');

// [2] js-cookie 기본적 생성법_만료일 지정
Cookies.set('username', 'batman', { expires: 7 });

// [3] js-cookie 생성_만료_path
Cookies.set('cname', 'antman', { expires: 7, path: '/' });

// [4] js-cookie 읽기
console.log(Cookies.get('userid')); //superman
console.log(Cookies.get('ssssssss')); //undefined

// [5] js-cookie 모두 읽기
console.log(Cookies.get()); //객체형태로 반환

const allCookies = Cookies.get();
console.log(typeof allCookies); //object

//[6] js-cookie 삭제
// Cookies.remove("userid"); //해당 쿠키명을 적음
console.log(Cookies.get());

//[7] 쿠키삭제 함수
const deleteCookie = (cname) => {
  event.preventDefault();

  cname = document.getElementById('cname');
  let val = cname.value;
  console.log(val); //userid

  Cookies.remove(val);
  cname.value = '';
  cname.focus();
  alert(`${val} 쿠키삭제됨`);
};

const form = document.getElementById('form');
form.addEventListener('submit', deleteCookie);

console.clear();
Cookies.set('dogid', 'dog1004', { expires: 7, path: '/' });

//[6-1] 옵션까지 포함해서 생성한 쿠키를 삭제할때도 똑같이 삭제
Cookies.remove('dogid');

Cookies.set('catid', 'catman', { expires: 7, path: 'cookie_library/' });
// Cookies.remove("catid");
// Cookies.remove("catid", { path: "cookie_library/" });

//[8] js-cookie 전체 삭제
// Object.keys; //쿠키 이름만 가져올때
console.log(Cookies.get());
console.log(Object.keys(Cookies.get()));
const allKeys = Object.keys(Cookies.get());

function allDeleteCookie() {
  allKeys.forEach((cName) => {
    // 할일 처리
    let neededOption = {
      domain: '127.0.0.1',
    };
    Cookies.remove(cName, neededOption);
  });
}

//[9] userGetCookie함수 만들기 - 일반적인 For반복문으로 순회하면서 처리
console.clear();
console.log(document.cookie); //catid=catman; userid=superman; username=batman; cname=antman

//쿠키 읽기
const userGetCookie = (cname) => {
  let name = cname + '=';
  console.log(name);

  // let allCookie = document.cookie.split('; '); //';'한 칸 띄어쓰기 주의!
  let allCookie = decodeURIComponent(document.cookie).split('; '); //위와 결과는 동일
  console.log(allCookie);

  //encodeURIComponent는 자바스크립트에서 string을 UTF-8로 인코딩해주는 함수
  //decodeURIComponent는 encodeURIComponent로 escape된 문자열을 다시 원래의 문자열로 리턴해주는 함수
  //비슷한 메서드 -> encodeURI, decodeURI, escape, unescape

  let value = [];
  for (let i = 0; i < allCookie.length; i++) {
    console.log(allCookie[i].trim().indexOf(name)); //위에 한칸 띄어쓰기가 안됬을 경우 trim을 이용해 다시 없앰
    //indexOf메서드의 리턴값 -> 배열일 경우 -> 검색된 항목의 index값
    //문자열일 경우 -> 검색된 문자열의 첫 글자의 index값
    //검색 결과 가 없을 경우 -> -1리턴
  }
};
console.log('userGetCookie 함수로 리턴된 값 = ' + userGetCookie('userid'));
