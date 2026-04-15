// LOADER
const loadText = "Loading...";
let i = 0;
const loadEl = document.getElementById("loadingText");

function loadAnim() {
    if (i < loadText.length) {
        loadEl.innerHTML += loadText[i];
        i++;
        setTimeout(loadAnim, 100);
    } else {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("main").classList.remove("hidden");
        }, 500);
    }
}
loadAnim();

// TYPING
const text = "Диана ❤️ Сухроб";
let j = 0;
const typing = document.getElementById("typing");

function typeText() {
    if (j < text.length) {
        typing.innerHTML += text[j];
        j++;
        setTimeout(typeText, 80);
    }
}
setTimeout(typeText, 1200);

// SCROLL
const els = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    els.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".grid img").forEach(img => {
    img.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    };
});

modal.onclick = () => modal.style.display = "none";

// CURSOR
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

const trails = [];
for (let i = 0; i < 10; i++) {
    let t = document.createElement("div");
    t.classList.add("cursor-trail");
    document.body.appendChild(t);
    trails.push(t);
}

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    trails.forEach((t, index) => {
        setTimeout(() => {
            t.style.left = e.clientX + "px";
            t.style.top = e.clientY + "px";
        }, index * 30);
    });
});

// HEARTS
document.getElementById("loveBtn").onclick = () => {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "80vh";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
};