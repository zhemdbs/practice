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
