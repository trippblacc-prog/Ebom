//document.getElementById('time-counter').textContent = Date.now();

function updateClock() {
    const timeElement = document.getElementById('time-counter');
    if (timeElement) {
        const now = new Date();
        // 24-hour format
        timeElement.textContent = now.toLocaleTimeString('en-GB', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });
    }
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Initial call



const inputfile = document.getElementById('upload-image');
const userimage = document.getElementById('user-image');

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    reveals.forEach(el => observer.observe(el));
});



inputfile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const Imagelink = URL.createObjectURL(file);
        userimage.src = Imagelink;
        console.log('Image Link:', Imagelink);
    }
});



const reveals = document.querySelectorAll('.reveal');


