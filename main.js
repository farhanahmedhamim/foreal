const hoverlist = document.querySelectorAll(".navbar-container")

hoverlist.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
        hoverlist.forEach(inner => {
            inner.classList.remove("leave")
        })
        item.classList.add("enter")
    })
    item.addEventListener("mouseout", () => {
        item.classList.remove("enter")
        item.classList.add("leave")
    })

});




// console.log(window.innerWidth - hoverlist[2].getBoundingClientRect().left);
hoverlist[2].querySelector(".hover-container").style = `right:-${window.innerWidth - hoverlist[2].getBoundingClientRect().left - hoverlist[2].clientWidth - 18}px;`;
hoverlist[3].querySelector(".hover-container").style = `right:-${window.innerWidth - hoverlist[3].getBoundingClientRect().left - hoverlist[3].clientWidth - 18}px;`;
hoverlist[4].querySelector(".hover-container").style = `right:-${window.innerWidth - hoverlist[4].getBoundingClientRect().left - hoverlist[4].clientWidth - 18}px;`;
hoverlist[5].querySelector(".hover-container").style = `right:-${window.innerWidth - hoverlist[5].getBoundingClientRect().left - hoverlist[5].clientWidth - 18}px;`;





const singleWorks = document.querySelectorAll(".single-works")

singleWorks.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.querySelector(".circle-icon").classList.add("active")
    })
    item.addEventListener("mouseout", () => {
        item.querySelector(".circle-icon").classList.remove("active")
    })
});









const master = document.querySelector(".master")
const counts = document.querySelectorAll(".counts")


let countInd = []
counts.forEach((val, i) => {
    countInd[i] = 0
})
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight > master.offsetTop) {
        counts.forEach((val, i) => {
            const interval = setInterval(() => {
                countInd[i]++
                if (countInd[i] >= val.getAttribute("count")) {
                    clearInterval(interval)
                    countInd[i] = val.getAttribute("count")
                }

                counts[i].innerHTML = countInd[i]

            }, 50);
        })
    }
});









const setting = document.querySelector(".settings")
const infinity = document.querySelector(".infinity")

setting.addEventListener("click", () => {
    infinity.classList.toggle("active")
});








const scrolls = document.querySelector(".top")

scrolls.addEventListener("click", () => {
    window.scrollTo(0, 0)
})


window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
        scrolls.classList.add("add")
    } else {
        scrolls.classList.remove("add")
    }
});










const heade = document.querySelector("header")


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        heade.classList.add("addheader")
    } else {
        heade.classList.remove("addheader")
    }
});



const bar = document.querySelector(".menus")
const container = document.querySelector(".main-list")


bar.addEventListener("click", () => {
    container.classList.toggle("active")
});





const optional = document.querySelectorAll(".optional")
const second = document.querySelectorAll(".second-list")
const first = document.querySelectorAll(".first-item")
// const seconditem = document.querySelectorAll(".second-item")
// const optionalss = document.querySelectorAll(".optionalss")
// const third = document.querySelectorAll(".third-list")




let lsind = -1
optional.forEach((val, i) => {
    val.addEventListener("click", () => {
        first.forEach(f => {
            f.style = `height: 45px`
        })
        first[i].style = `height: ${second[i].clientHeight + val.clientHeight}px`
        lsind = i
    })
})



// optionalss.forEach((val, i) => {
//     val.addEventListener("click", () => {
//         seconditem.forEach(s => {
//             s.style = `height: 45px`
//         })
//         seconditem[i].style = `height: ${third[i].clientHeight + val.clientHeight}px`

//         const a = second[lsind].querySelectorAll(".second-item")
//         const hei = [...a].map(val => {
//             return val.clientHeight
//         })
//         console.log(hei);
//         const final = hei.reduce((total, item) => {
//             return total + 45
//         }, 0)
//         console.log(final);
//         first[lsind].style = `height: ${final + third[i].clientHeight}px`

//     })
// })







const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons span");

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    const date = new Date(currYear, currMonth, 1);
    let firstDayofMonth = date.getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
            currMonth = currMonth < 0 ? 11 : 0;
        }

        renderCalendar();
    });
});