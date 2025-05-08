// 페이드 이미지
let fade = document.querySelectorAll(".slide"); // 여기를 slide로
let currentFade = 0;
let fadeInterval = setInterval(nextFade, 3250);

function nextFade() {
    fade[currentFade].classList.remove("showing"); // showing만 제거
    currentFade = (currentFade + 1) % fade.length;
    fade[currentFade].classList.add("showing"); // showing만 추가
}



//모달 창 ㄹ
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("missionModal");
    const btns = document.querySelectorAll(".mission-btn");
    const closeBtn = document.querySelector(".close");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // 스크롤 잠금
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // 스크롤 해제
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // 스크롤 해제
        }
    });
});


const moonData = [
    {
        img: './img/moon-img.png',
        date: '2025년 4월 23일',
        phase: '보름달 🌕',
        position: '남동쪽 하늘',
        rise: '오후 6:42',
        set: '오전 4:17'
    },
    {
        img: './img/moon-img2.png',
        date: '2025년 4월 24일',
        phase: '상현달 🌗',
        position: '남쪽 하늘',
        rise: '오후 7:03',
        set: '오전 5:12'
    },
    {
        img: './img/moon-img3.png',
        date: '2025년 4월 25일',
        phase: '하현달 🌘',
        position: '남서쪽 하늘',
        rise: '오후 7:58',
        set: '오전 6:00'
    }
];

let current = 0;

function updateMoon(index) {
    const moon = moonData[index];
    document.querySelector('.moon-image').src = moon.img;
    document.querySelector('.moon-date-text').innerText = moon.date;

    document.querySelector('.moon-left').innerHTML = `
      <p><strong>현재 위상:</strong> ${moon.phase}</p>
      <p><strong>위치:</strong> ${moon.position}</p>
    `;

    document.querySelector('.moon-right').innerHTML = `
      <p><strong>지는 시간:</strong> ${moon.set}</p>
      <p><strong>뜨는 시간:</strong> ${moon.rise}</p>
    `;
}

document.querySelector('.arrow.left').addEventListener('click', () => {
    current = (current - 1 + moonData.length) % moonData.length;
    updateMoon(current);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    current = (current + 1) % moonData.length;
    updateMoon(current);
});

// 초기 렌더



//순서대로 
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(cards).indexOf(entry.target); // ✅ DOM 기준 인덱스
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 200);
            } else {
                entry.target.classList.remove('show'); // 반복 등장용
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card) => {
        observer.observe(card);
    });
});




