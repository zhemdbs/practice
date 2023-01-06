// 라이브러리를 이용한 JS쿠키 -> js-cookie

// [1] js-cookie 기본적 생성법 -> Cookies.set('쿠키명', '쿠키값');
Cookies.set("userid", "superman");

// [2] js-cookie 기본적 생성법_만료일 지정
Cookies.set("username", "batman", { expires: 7 });

// [3] js-cookie 생성_만료_path
Cookies.set("cname", "antman", { expires: 7, path: "/" });

// [4] js-cookie 읽기
console.log(Cookies.get("userid")); //superman
console.log(Cookies.get("ssssssss")); //undefined

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

  cname = document.getElementById("cname");
  let val = cname.value;
  console.log(val); //userid

  Cookies.remove(val);
  cname.value = "";
  cname.focus();
  alert(`${val} 쿠키삭제됨`);
};

const form = document.getElementById("form");
form.addEventListener("submit", deleteCookie);

console.clear();
Cookies.set("dogid", "dog1004", { expires: 7, path: "/" });

//[6-1] 옵션까지 포함해서 생성한 쿠키를 삭제할때도 똑같이 삭제
Cookies.remove("dogid");

Cookies.set("catid", "catman", { expires: 7, path: "cookie_library/" });
// Cookies.remove("catid");
// Cookies.remove("catid", { path: "cookie_library/" });

//[8] js-cookie 전체 삭제
// Object.keys; //쿠키 이름만 가져올때
console.log(Cookies.get());
console.log(Object.keys(Cookies.get()));
const allKeys = Object.keys(Cookies.get());

allKeys.forEach((cName) => {
  // 할일 처리
  let neededOption = {
    //path부분
    // const allPath =
  };
  Cookies.remove(cName, neededOption);
});
