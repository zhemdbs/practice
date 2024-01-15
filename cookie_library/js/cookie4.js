//라이브러리를 이용한 JS쿠키 - jQuery Cookie
//다른 JS 쿠키 관련 라이브러리들의 사용법과 비슷하지만 같진 않다.

//쿠키 읽기
const getCookie = () => {
  const allCookies = document.cookie;

  if (allCookies != "") {
    alert("저장된 쿠키의 값은 : " + allCookies);
  } else {
    alert("저장된 쿠키가 없습니다.");
  }
};

//[1] 쿠키생성 -> jQuery Cookie
$.cookie("userid", "superman");

//[2] 쿠키생성 -> 만료일 지정
$.cookie("username", "batman", { expire: 7 }); //7일 뒤(23일이면 30일로)

//[3] 쿠키생성 -> 만료일 지정 및 패스 지정 -> '/'지정시 사이트 전체에서 쿠키 유효
$.cookie("uid", "antman", { expire: 7, path: "/" }); //주의! -> 삭제시에도 패스 지정필요

//[4] 쿠키 읽기
console.log($.cookie("userid")); //superman
console.log($.cookie("aaa")); //undefined

//[5] 모든 쿠키 읽기
console.log($.cookie()); //객체형태로 출력

//[6] 쿠키 삭제
console.log($.removeCookie("userid")); // true
console.log($.removeCookie("aaa")); //false
$.removeCookie("userid");
console.log($.cookie());

//[7] 쿠키 생성시 domain, 'path지정'과 함께 생성되었다면 삭제시에도 똑같이 필요
$.cookie("cat", "rarara", { expire: 7, path: "/" });
console.log($.cookie());
$.removeCookie("cat", { path: "/" });
console.log($.cookie());
