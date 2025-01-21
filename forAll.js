// الكود السابق الخاص بك
document.addEventListener("DOMContentLoaded", () => {
    // 1. Captcha simulation (كما هو موجود)
    const simulateCaptchaCheck = () => {
        console.log("تحقق من الإنسان تم في الخلفية.");
    };
    simulateCaptchaCheck();

    // 2. Honeypot protection
    const honeypotField = document.createElement('input');
    honeypotField.type = 'text';
    honeypotField.name = 'honeypot';
    honeypotField.style.display = 'none';
    document.body.appendChild(honeypotField);

    document.addEventListener("submit", (e) => {
        if (honeypotField.value !== "") {
            e.preventDefault();
            console.error("تم الكشف عن بوت باستخدام honeypot!");
        }
    });

    // 3. Behavioral analysis
    document.addEventListener("mousemove", (e) => {
        console.log("حركة الفأرة:", e.clientX, e.clientY);
    });

    // 4. Time-based interaction
    const startTime = Date.now();
    document.addEventListener("submit", () => {
        const timeSpent = Date.now() - startTime;
        console.log("الوقت الذي استغرقه المستخدم:", timeSpent, "ms");
        if (timeSpent < 1000) {
            alert("تم الكشف عن نشاط مشبوه بناءً على الوقت!");
        }
    });
});

// الأكواد الإضافية

// 5. تمرير سلس للنقرات على الروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 6. التحقق من البريد الإلكتروني
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (!/\S+@\S+\.\S+/.test(input.value)) {
            input.setCustomValidity("يرجى إدخال بريد إلكتروني صالح.");
        } else {
            input.setCustomValidity("");
        }
    });
});

// 7. تغيير لون الروابط عند نسخها
document.addEventListener('copy', () => {
    document.querySelectorAll('a').forEach(link => {
        link.style.color = 'red';
    });
});

/*
// 8. تنبيه عند محاولة الخروج من الصفحة
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'هل أنت متأكد من رغبتك في مغادرة الصفحة؟';
});
*/
// 9. إظهار الوقت الحالي على الموقع
setInterval(() => {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = new Date().toLocaleTimeString();
    }
}, 1000);

// 10. تصغير القائمة عند التمرير
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.height = window.scrollY > 50 ? '50px' : '100px';
    }
});

// 11. عرض رسالة ترحيب مرة واحدة
if (!localStorage.getItem('welcomeMessageShown')) {
    alert('مرحبًا بك في موقعنا!');
    localStorage.setItem('welcomeMessageShown', 'true');
}

// 12. تشغيل فيديو تلقائيًا عند ظهوره على الشاشة

const videos = document.querySelectorAll('video');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}); 

videos.forEach(video => observer.observe(video));

// 13. تعطيل النقر بزر الفأرة الأيمن
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('النقر بزر الفأرة الأيمن معطل.');
});

// 14. الكشف عن نسخ النصوص
document.addEventListener('copy', () => {
    console.log('تم نسخ النصوص من الموقع.');
});

// 15. زر العودة إلى الأعلى
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.display = 'none';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// 16. منع تكرار الإرسال في النماذج
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            setTimeout(() => submitButton.disabled = false, 3000);
        }
    });
});

// 17. حفظ النص المكتوب في الحقول محليًا
document.querySelectorAll('input, textarea').forEach(field => {
    const savedValue = localStorage.getItem(field.name);
    if (savedValue) field.value = savedValue;

    field.addEventListener('input', () => {
        localStorage.setItem(field.name, field.value);
    });
});

// 18. عرض رسالة عند انتهاء العد التنازلي
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
    let countdown = 10; // عدد الثواني
    const interval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            alert('انتهى العد التنازلي!');
        }
    }, 1000);
}

// 19. تعطيل الحقول أثناء التحميل
document.addEventListener('DOMContentLoaded', () => {
    const fields = document.querySelectorAll('input, textarea, select, button');
    fields.forEach(field => field.disabled = true);
    setTimeout(() => fields.forEach(field => field.disabled = false), 2000);
});

// 20. تغيير خلفية الصفحة بناءً على الوقت
const hour = new Date().getHours();
document.body.style.backgroundColor = hour < 12 ? '#FFD700' : '##323232';
