//나사 프리셋 스타일 
document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles-js", {
        fullScreen: { enable: false },
        particles: {
            number: { value: 35 },
            color: { value: "#ffffff" },
            opacity: { value: 0.25, random: true },
            size: { value: 2.5, random: true },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                outModes: { default: "out" }
            }
        },
        interactivity: {
            events: {
                onHover: { enable: false },
                onClick: { enable: false }
            }
        },
        background: {
            color: "transparent"
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles-js", {
        fullScreen: { enable: false },
        background: { color: "transparent" },

        particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            opacity: { value: 0.4 },
            size: { value: 2, random: true },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                outModes: { default: "out" }
            }
        },
    });
});

//시차 프리렛
document.addEventListener("DOMContentLoaded", () => {
    // 페이지 로드 완료 후 particles 실행
    tsParticles.load("particles-mission", {
        // 🔹 전체화면 설정 해제 → 특정 div 내에서만 효과 적용
        fullScreen: { enable: false },

        // 🔹 입자 설정 시작
        particles: {
            number: { value: 100 }, // 입자 개수 (적당한 별의 수)

            color: { value: "#ffffff" }, // 입자 색 → 흰색 (별빛 느낌)

            shape: { type: "circle" }, // 입자 모양 → 원형

            opacity: {
                value: 0.4,       // 입자 기본 투명도
                random: true      // 입자마다 다른 밝기로 보여 반짝임 느낌
            },

            size: {
                value: 2,         // 기본 크기 (작게 설정)
                random: true      // 크기 랜덤 → 자연스러운 별 효과
            },

            // 🔹 입자 간 연결선 설정
            links: {
                enable: true,         // 선 연결 활성화
                distance: 120,        // 연결 가능한 거리
                color: "#ffffff",     // 연결선 색상
                opacity: 0.2,         // 연결선의 투명도 → 강조되지 않게
                width: 1              // 선 두께
            },

            // 🔹 움직임 설정
            move: {
                enable: true,         // 입자가 움직이도록 설정
                speed: 0.3,           // 천천히 움직이는 속도 (우주 부유감)
                direction: "none",    // 랜덤한 방향으로 이동
                outModes: {
                    default: "out"      // 밖으로 나가면 삭제되고 새로 생성됨
                }
            }
        },

        // 🔹 고해상도 디스플레이에서 선명하게
        detectRetina: true
    });
});


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

// today 섹션 효과
document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles-today", {
        fullScreen: { enable: false },
        particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            opacity: {
                value: 0.3,
                random: true
            },
            size: {
                value: 1.2,
                random: true
            },
            move: {
                enable: true,
                speed: 0.1,
                direction: "none",
                outModes: { default: "out" }
            }
        },
        detectRetina: true
    });
});





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


//글씨 나타나게 
const title = document.querySelector('.main-title');
const titleHeight = title.getBoundingClientRect().y;

document.addEventListener('DOMContentLoaded', () => {
    titleText()
});

window.addEventListener("scroll", () => {
    if (titleHeight < window.scrollY) {
        titleText();
    }
});

function titleText() {
    const text = title.textContent.trim();
    title.textContent = ''; // 기존 텍스트 비움

    // 한 글자씩 <span>으로 감싸기
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('fade-in-char');
        title.appendChild(span);
    });
}


//about 텍스트 
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-title", {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            markers: false
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // 첫 번째 이미지 (missions-1)
    gsap.from(".missions-1", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
         delay: 0.9,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".missions-1 img",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        }
    });

    // 두 번째 이미지 (missions-2) — 약간 딜레이 느낌
    gsap.from(".missions-2", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2, // 💡 약간 늦게 등장하는 느낌
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".missions-2 img",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        }
    });
});





