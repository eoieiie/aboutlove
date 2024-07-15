document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("changing-image");
    const images = [
        "KakaoTalk_20240715_195604973.jpg",
        "KakaoTalk_20240715_195643144.jpg",
        "KakaoTalk_20240715_195739458.jpg"
    ];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds

    function generateCalendar() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const calendarBody = document.getElementById("calendar-body");
        const monthYear = document.getElementById("month-year");
        
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];

        monthYear.innerText = `${monthNames[month]} ${year}`;

        calendarBody.innerHTML = ""; // Clear previous cells

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDay) {
                    cell.classList.add("prev-month");
                    cell.innerText = new Date(year, month, j - firstDay + 1).getDate();
                } else if (date > lastDate) {
                    cell.classList.add("next-month");
                    cell.innerText = new Date(year, month + 1, date - lastDate).getDate();
                    date++;
                } else {
                    cell.innerText = date;
                    if (date === today.getDate()) {
                        cell.classList.add("selected");
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    generateCalendar();
});
