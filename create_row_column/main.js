window.onload = () => {
  const addBtn = document.querySelector('.add_view_btn');
  addBtn.addEventListener('click', () => {
    const localDataWrap = document.querySelector('#localdata_wrap');
    const dataTable = document.querySelector('#data_table')
    // const category = document.querySelectorAll('.category')

    const newRow = localDataWrap.insertRow();

    const newCell = newRow.insertCell();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();

    const allRow = dataTable.rows.length - 1; //thead를 제외한 tbody쪽의 row만 확인하기 위해 -1
    const allCell = dataTable.rows[allRow].cells.length; //row에 몇개의 cell이 있는지 확인
    
    const keyInner = localDataWrap.rows[allRow - 1].cells[0];
    const valueInner = localDataWrap.rows[allRow - 1].cells[1];
    
    const random = Math.floor(Math.random() * localStorage.length);

    const keyData = localStorage.key(random);
    const removeBtn = '<button class="removeBtn" type="button">Remove</button>';

    keyInner.innerHTML = keyData;
    valueInner.innerHTML = localStorage.getItem(keyData);
    newCell2.innerHTML = removeBtn;

    const remove = document.querySelectorAll('.removeBtn');
    remove.addEventListener('click', (e)=>{
      console.log(localDataWrap.children);
      const currentRow = remove.parentNode.parentNode;
      currentRow.deleteRow();
    })
    // for (let j = 0; j < allCell; j++) {
    //   const keyInner = localDataWrap.rows[allRow - 1].cells[0];
    //   const valueInner = localDataWrap.rows[allRow - 1].cells[1];
      
    //   const random = Math.floor(Math.random() * localStorage.length);

    //   console.log(random, localStorage.length);
    //   const keyData = localStorage.key(random);
    //   const removeBtn = '<button class="removeBtn" type="button">Remove</button>';

    //   keyInner.innerHTML = keyData;
    //   valueInner.innerHTML = localStorage.getItem(keyData);
    //   newCell2.innerHTML = removeBtn;
    // }
    
  })
}