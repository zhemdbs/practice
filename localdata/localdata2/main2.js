window.onload = () => {
  const allViewBtn = document.querySelector(".all_view_btn");
  const localDataWrap = document.querySelector('#localdata_wrap');


  allViewBtn.addEventListener("click", () => {
    // key만 출력
    // console.log(localStorage.key(0)) //color
    // console.log(localStorage.key(1)) //user
    
    //key가 몇개인지 확인
    // console.log(localStorage.length)

    //배열 정보를 동적으로 테이블 생성하여 삽입(tbody)
    // let arr = new Array();
    let result = '';

    //방법1(배열의 형태)
    // for (let j = 0; j < localStorage.length; j++) {
    //   const localKey = localStorage.key([j])
    //   arr.push({
    //     key: localKey,
    //     value: localStorage.getItem(localKey)
    //   });
    // }
    // for (const i in arr) {
    //   result += "<tr>"
    //   result += "<td>" + arr[i].key + "</td>"
    //   result += "<td>" + arr[i].value + "</td>"
    //   result += "<td><button class=removeBtn>Remove</button></td>"
    //   result += "</tr>"
    // }

    //방법2
    for (let j = 0; j < localStorage.length; j++) {
      const localKey = localStorage.key([j])

      result += "<tr>"
      result += "<td>" + localKey + "</td>"
      result += "<td>" + localStorage.getItem(localKey) + "</td>"
      result += "<td><button class=removeBtn>Remove</button></td>"
      result += "</tr>"
    }

    // arr.push({
    //   key: localStorage.key(0),
    //   value: localStorage.value(0)
    // });
    // arr.push({
    //   name: '홍동',
    //   email: 'dong@gmail.com',
    //   age: 35,
    //   pastime: '먹기'
    // });
    // arr.push({
    //   name: '홍길',
    //   email: 'hongdong@gmail.com',
    //   age: 50,
    //   pastime: '자기'
    // });

    //반복문을 순회하면서 배열의 정보를 result에 누적
    // for (const i in arr) {
    //   result += "<tr>"
    //   result += "<td>" + arr[i].name + "</td>"
    //   result += "<td>" + arr[i].email + "</td>"
    //   result += "<td>" + arr[i].age + "</td>"
    //   result += "<td>" + arr[i].pastime + "</td>"
    //   result += "</tr>"
    // }

    //append작업
    // localDataWrap.append(result); //텍스트 문자열 형태로 append
    localDataWrap.innerHTML = result;
    // $('#localdata_wrap').append(result);
  }); 
}
