window.onload = () => {
  const inputKey = document.querySelector('.input_key');
  const inputValue = document.querySelector('.input_value');

  const setData = document.querySelector('.btnSetLocalData');
  const getData = document.querySelector('.btnGetLocalData');
  const allViewData = document.querySelector('.all_view_btn');
  const dataWrap = document.querySelector('.localdata_wrap')

  // redrawInner(); //새로고침시.....

  //로컬 데이터 저장
  setData.addEventListener('click', () => {
    localStorage.setItem(inputKey.value, inputValue.value)
    inputKey.value = '';
    inputValue.value = '';
  })

  //전체 데이터 보여주기
  allViewData.addEventListener('click', () => {
    redrawInner(); 

    removeData();
  })

  //동적생성 데이터 삭제
  function removeData() {
    const removeBtns = document.querySelectorAll('.removeBtn');

    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener('click', (e) => {
        console.log('클릭');
        const removeWrap = e.target.parentNode.parentNode;
        const localKey = removeWrap.firstChild;
        
        for (let i = 0; i < localStorage.length; i++) {
          if (localKey.textContent === localStorage.key([i])) {
            localStorage.removeItem(localKey.textContent)

            redrawInner();
          }
        }
      })
    })
  }

  //동적으로 생성 
  function redrawInner() {
    let result = '';

    for (let i = 0; i < localStorage.length; i++) {
      const keyData = localStorage.key([i]);

      result += '<tr>'
      result += '<td>' + keyData + '</td>'
      result += '<td>' + localStorage.getItem(keyData) + '</td>'
      result += '<td><button class="removeBtn" type="button">Remove</button></td>'
      result += '</tr>'
    }
    dataWrap.innerHTML = result;

    removeData();
  }


  //무작위로 로컬데이터 가져오기
  getData.addEventListener('click', (e) => {
    e.preventDefault();

    const dataArr = new Array();
    for (let j = 0; j < localStorage.length; j++) {
      dataArr.push({
        key: localStorage.key([j]),
        value : localStorage.getItem(localStorage.key([j]))
      })
    }

    const random = Math.floor(Math.random() * dataArr.length)

    inputKey.value = dataArr[random].key;
    inputValue.value = dataArr[random].value;
  })
}