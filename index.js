let counthome = 0
let countguest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function home1() {
    counthome += 1
    homeEl.textContent = counthome
    
}

function home2() {
    counthome += 2
    homeEl.textContent = counthome
    
}

function home3() {
    counthome += 3
    homeEl.textContent = counthome
    
}

function guest1() {
    countguest += 1
    guestEl.textContent = countguest
    
}

function guest2() {
    countguest += 2
    guestEl.textContent = countguest
    
}

function guest3() {
    countguest += 3
    guestEl.textContent = countguest
    
}