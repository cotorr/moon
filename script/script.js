// 페이드 이미지
let fade = document.querySelectorAll(".slide"); // 여기를 slide로
let currentFade = 0;
let fadeInterval = setInterval(nextFade, 3250);

function nextFade() {
    fade[currentFade].classList.remove("showing"); // showing만 제거
    currentFade = (currentFade + 1) % fade.length;
    fade[currentFade].classList.add("showing"); // showing만 추가
}