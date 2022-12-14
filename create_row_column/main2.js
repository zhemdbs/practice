window.onload = () => {
  //테이블의 열과 줄을 동적으로 생성하여 삽입
  const addBtn = document.querySelector('.add_view_btn');

  addBtn.addEventListener('click', () => {
    const tBody = document.querySelector('#localdata_wrap');

    //javascript table row and column
    //-> insert a row at the end of table
    const newRow = tBody.insertRow();

    //-> insert a cell at the end of the row
    const newcell0 = newRow.insertCell();
    const newcell1 = newRow.insertCell();
    const newcell2 = newRow.insertCell();

    //Append - 텍스트 노드를 새롭게 생성한 cell에 붙이기
    const newText = document.createTextNode('홍길동');
    const newText1 = document.createTextNode('남자');
    const newText2 = document.createTextNode('remove');

    newcell0.appendChild(newText);
    newcell1.appendChild(newText1);
    newcell2.appendChild(newText2);

    //테이블 row 구하기
    const table = document.querySelector('#data_table');
    // console.log(table, table.rows.length - 1);

    //cell이 몇개인지 파악
    const rowLine = table.rows.length - 1;
    const cellLine = table.rows[rowLine].cells.length;

    //반복문 순회하면서 각cell에 정보 값을 셋팅
    for (let i = 0; i < cellLine; i++) {
      tBody.rows[rowLine-1].cells[i].innerHTML = `[${rowLine-1}][${i}]`
    }
  })
}