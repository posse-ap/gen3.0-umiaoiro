const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// // モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

function modalButtonClick(e) {
  let checkbox = document.getElementById("twShare");
  let text= document.getElementById("twComment").value;
  if(checkbox.checked){
    console.log("check");
    var turl = "https://twitter.com/intent/tweet?text="+text;
	  window.open(turl,'_blank');
    } else {
        console.log('チェックなし');
    };
  }


  const modalEasy = document.getElementById("record");
  const modalRecord = document.getElementById("modal-body");
  modalEasy.addEventListener("click", () => {
    modalRecord.style.visibility = "hidden";
    const loading = document.getElementById("loading"); //未完成
    loading.classList.add("loading"); //未完成
    setTimeout(function(){
      loading.classList.remove("loading");
      const complete = document.getElementById("postingCompleted");
      const comp = document.getElementById("appear");
      complete.classList.remove("block");
      complete.classList.add("layout");

    },3000);
  });
