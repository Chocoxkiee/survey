/* PASSWORD */
const correctPassword = "kyoukalcer";


/* ENTER KEY */
document
.getElementById("password")
.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkPassword();
    }
});


/* LOGIN PROCESS */
function checkPassword(){
    const pass =
    document.getElementById("password").value;
    if(pass === correctPassword){
        const music =
        document.getElementById("bgMusic");

        music.volume = 0.15;

        music.play().catch(() => {});

        document.getElementById("loginPage")
        .style.display = "none";

        document.getElementById("approvedPage")
        .style.display = "flex";

        launchConfetti();

        setTimeout(()=>{
            document.getElementById("approvedPage")
            .style.display = "none";

            document.getElementById("boardingPage")
            .style.display = "flex";

            setTimeout(()=>{
                document.getElementById("boardingPage")
                .style.display = "none";

                document.getElementById("content")
                .style.display = "block";

                startTyping();
            },5000);
        },2500);
    }
    else{
        document.getElementById("error-msg")
        .style.display = "block";
    }
}


/* STARS */
for(let i=0;i<120;i++){
    const star =
    document.createElement("div");

    star.classList.add("star");

    const size =
    Math.random()*3;

    star.style.width =
    size + "px";

    star.style.height =
    size + "px";

    star.style.left =
    Math.random()*100 + "vw";

    star.style.top =
    Math.random()*100 + "vh";

    star.style.animationDelay =
    Math.random()*4 + "s";

    document.body.appendChild(star);
}


/* FLOATING EMOJIS */
const symbols = [
    "🍎",
    "🧡",
    "✨",
    "✈"
];

setInterval(()=>{
    const item =
    document.createElement("div");

    item.classList.add("float-item");

    item.innerHTML =
    symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
    ];

    item.style.left =
    Math.random()*100 + "vw";

    item.style.fontSize =
    (Math.random()*18 + 15) + "px";

    document.body.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },12000);
},1200);


/* TYPING LETTER */
const text = 
`Halo gege Kenn ku❤

🎉Pibesdey buat si Caleb🎉
Makasih banyak yaa gege karena udah berusaha sebaik mungkin menjadi Caleb🍎
Semoga kedepannya semakin banyak hal-hal baik yang datang ke dalam hidup gege.
Terima kasih untuk semua cerita suka & duka gege, keusilan gege, kerandoman gege (+ kata keramat: KA-BOOM💥).
Gege sering tanyain kabar kami gimana, walaupun kadang dibarengi humor gaje tapi kalimatnya selalu sopan.
Gege the most polite person yang aku tau.
Kata makasih & maaf itu ga bakal hilang dari gege tiap hari.
Semua itu adalah moment yang menyenangkan & ga terlupakan bagi kami semua🧡

We know sometimes gege merasa insecure..
Issoke ge, luapkan aja.  Don't forget, we all always here for you.
Tapi jangan sering-sering😭 jangan buat kami khawatir loh yaa ge wkwkwk
Udah deh... Itu aja ✨
Semoga hari ini menjadi awal dari tahun yang luar biasa untukmu.
We proud of you gege Kenn always!🧡

✈ LANDING SAFE AND SOUND IN OUR HEART ❤
See you, Dadahh, Babaii gege Kenn🍏`;


/* TYPING EFFECT */
function startTyping(){
    let i = 0;

    const target =
    document.getElementById("typing");

    target.textContent = "";

    function type(){
        if(i < text.length){
            target.textContent +=
            text.charAt(i);

            i++;

            setTimeout(type,30);
        }
        else{
            removeTypingCursor();
        }
    }
    type();
}


/* REMOVE CURSOR */
function removeTypingCursor(){
    const style =
    document.createElement("style");

    style.innerHTML = `
        #typing::after{
            display:none;
        }
    `;

    document.head.appendChild(style);
}


/* CONFETTI */
function launchConfetti(){
    const colors = [
        "#f6d365",
        "#60a5fa",
        "#34d399",
        "#ffffff",
        "#f472b6"
    ];

    for(let i=0;i<180;i++){
        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

        confetti.style.animationDuration =
        (Math.random()*3 + 2) + "s";

        confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);
    }
}


/* TAB TITLE ANIMATION */
const titles = [
    "✈ KyouKenn 🍎",
    "🎂 Happy Birthday Caleb 🎂",
    "🧡 For Gege Kenn 🧡"
];

let titleIndex = 0;

setInterval(()=>{
    document.title =
    titles[titleIndex];

    titleIndex++;

    if(titleIndex >= titles.length){
        titleIndex = 0;
    }
},3000);


/* PHOTO APPEAR ANIMATION */
window.addEventListener("load", ()=>{
    const photos =
    document.querySelectorAll(".timeline-item");

    photos.forEach((photo,index)=>{
        photo.style.opacity = "0";

        setTimeout(()=>{
            photo.style.opacity = "1";
        }, index * 500);
    });
});
