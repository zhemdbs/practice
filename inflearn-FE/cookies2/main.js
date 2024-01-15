//js 쿠키 사용자 정의 함수 및 전체 삭제 만들기


//쿠키 읽기
const getCookie = () => {
  //로컬에 저장된 모든 쿠키 읽어오기
  const allCookies = document.cookie;

  if (allCookies != "") {
    alert('저장된 쿠키의 값은 : ' + allCookies )
  } else {
    alert('저장된 쿠키가 없습니다.')
  }
}


//쿠키생성하기
const setCookie = (cname, cvalue, cexpire) => {
  event.preventDefault();

  //넘어온 값 체크
  if(document.querySelector('#cname').value != '') {
    cname = document.querySelector('#cname').value;
    cvalue = document.querySelector('#cvalue').value;
    cexpire = document.querySelector('#cexpire').value;
  }

  //만료일 생성
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + parseInt(cexpire))

  //쿠키 생성
  //날짜를 쿠키로 저장하기 위해 toUTCString() 메서드 사용
  let cookies = '';
  cookies += `${cname}=${cvalue};`;
  cookies += `expires=${expiration.toUTCString()}`;

  //쿠키 저장하기
  document.cookie = cookies;

  document.getElementById('form').reset(); //힌번에 초기화
  alert('쿠키 생성')
}

//쿠키 삭제하기
const deleteCookie = function(cname) {
  // document.cookie = 'aa=; expires=Sat, 01 Jan 1972 00:00:00 GMT'
  setCookie(cname, "", 0); //기존html에 name인 aa를 삭제하기로 적어놓았기 때문에 name="aa"만 삭제됨
  alert('삭제 완료');
}

//쿠키 전체삭제
const allDeleteCookie = (domain, path) => {
  // const doc = document;
  domain = domain || document.domain;
  path = path || '/';

  const cookies = document.cookie.split('; '); // 배열로 반환
  console.log(cookies);
  const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';

  //반목문 순회하면서 쿠키 전체 삭제
  if (!document.cookie) {
    alert('삭제할 쿠키가 없습니다.');
  } else {
    for (i = 0; i < cookies.length; i++) {
      // const uname = cookies[i].split('=')[0]; //'쿠키의 명'만 필요

      // document.cookie = `${uname}=; expires=${expiration}`;
      document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration;
      
      // document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration + '; domain =' + domain;
    }
    alert('쿠키 전부 삭제완료!!');
  }
}

//addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);
