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
