window.onload = () => {
  const setLocalData = document.querySelector(".btnSetLocalData");
  const getLocalData = document.querySelector(".btnGetLocalData");
  const input = document.querySelector("input");
  const removeBtn = document.querySelector(".btnRemove");

  setLocalData.addEventListener("click", () => {
    const inputValue = input.value;

    localStorage.setItem("bb", inputValue);
    input.value = "";
  });

  getLocalData.addEventListener("click", () => {
    const getData = localStorage.getItem("user");
    if (getData) {
      input.value = getData;
    }
  });

  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    // localStorage.clear();
  });
};
