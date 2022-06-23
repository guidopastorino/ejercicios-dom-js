const $btnOpenMenu = document.querySelector("#btnOpenMenu");
const $menu = document.querySelector("#menu");

$btnOpenMenu.addEventListener("click", () => {
  $btnOpenMenu.classList.toggle("open");
  $btnOpenMenu.classList.toggle("close");

  $menu.classList.toggle("menu-open");
  $menu.classList.toggle("menu-close");
});

$menu.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    $menu.classList.replace("menu-open", "menu-close");
    $btnOpenMenu.classList.replace("close", "open");
  }
});

// 

const $clock = document.querySelector('#temporizador')
const $audio = document.createElement('audio')
let intervalClock;

document.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') == 'btn-start-clock') {
    
    intervalClock = setInterval(() => {
      let fecha = new Date()
      $clock.innerHTML = `<h2>${fecha.toLocaleTimeString()}</h2>`
    }, 1000);

    e.target.disabled = true
  }

  if (e.target.getAttribute('id') == 'btn-stop-clock') {
    clearInterval(intervalClock)
    $clock.innerHTML = ``
    document.querySelector('#btn-start-clock').disabled = false
  }

  if (e.target.getAttribute('id') == 'btn-start-alarm') {
    $audio.src = 'assets/sonidoalarma.mp3'
    $audio.play()
    e.target.disabled = true
  }
  
  if (e.target.getAttribute('id') == 'btn-stop-alarm') {
    $audio.removeAttribute('src')
    $audio.pause()
    $audio.currentTime = 0
    document.querySelector('#btn-start-alarm').disabled = false
  }
})


// 

const $pitch = document.querySelector('.pitch')
const $ball = document.querySelector('.ball')

let x = 0,
y = 0;


document.addEventListener('keydown', (e) => {
  let campoLimite = $pitch.getBoundingClientRect()
  let ballLimite = $ball.getBoundingClientRect()

  if(e.key == 'ArrowUp'){
    if(ballLimite.top > campoLimite.top){
      y--
      e.preventDefault()
    }
  }

  if(e.key == 'ArrowDown'){
    if(ballLimite.bottom < campoLimite.bottom){
      y++
      e.preventDefault()
    }
  }

  if(e.key == 'ArrowLeft'){
    if(ballLimite.left > campoLimite.left){
      x--
    }
  }

  if(e.key == 'ArrowRight'){
    if(ballLimite.right < campoLimite.right){
      x++
    }
  }

  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
})


// 

// const $spanDays = document.querySelector('#days')
// const $spanHours = document.querySelector('#hours')
// const $spanMinutes = document.querySelector('#minutes')
// const $spanSeconds = document.querySelector('#seconds')

// document.querySelector('.countdown').style.fontSize = '30px'

// const MILISECONDS_SECOND = 1000
// const MILISECONDS_MINUTE = MILISECONDS_SECOND * 60
// const MILISECONDS_HOUR = MILISECONDS_MINUTE * 60
// const MILISECONDS_DAY = MILISECONDS_HOUR * 24


// const TARGET_DAY = new Date(2023, 1, 11)

// let interval = setInterval(() => {
  
//   let CURRENT_TIME = new Date()
//   let RESULT = TARGET_DAY - CURRENT_TIME

//   let RESULT_DAYS = Math.floor(RESULT / MILISECONDS_DAY)
//   let RESULT_HOURS = Math.floor((RESULT % MILISECONDS_DAY) / MILISECONDS_HOUR)
//   let RESULT_MINUTES = Math.floor((RESULT % MILISECONDS_HOUR) / MILISECONDS_MINUTE)
//   let RESULT_SECONDS = Math.floor((RESULT % MILISECONDS_MINUTE) / MILISECONDS_SECOND)


//   $spanDays.textContent = `${RESULT_DAYS} Days`
//   $spanHours.textContent = `${RESULT_HOURS} Hours`
//   $spanMinutes.textContent = `${RESULT_MINUTES} Minutes`
//   $spanSeconds.textContent = `${RESULT_SECONDS} Seconds`

//   if(RESULT_SECONDS < 0){
//     document.querySelector('.countdown').innerHTML = `Feliz Cumpleaños, Guido del 2023! 😄`
//     clearInterval(interval)
//   }
  
// }, MILISECONDS_SECOND);







// 
const $btnScroll = document.querySelector('.btn-scroll')
document.addEventListener('scroll', (e) => {
  
  if(window.scrollY > 350){
    $btnScroll.classList.replace('no-visible', 'visible')
  } else {
    $btnScroll.classList.replace('visible', 'no-visible')
  }
})





// 
const $btnTheme = document.querySelector('.btn-theme button')


function themeDark() {
  $btnTheme.children[1].style.display = 'block'
  $btnTheme.children[0].style.display = 'none'

  document.body.style.background = '#222'

  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.color = '#fff'
  })

  document.querySelectorAll('span').forEach(span => {
    span.style.color = '#fff'
  })

  $pitch.style.background = '#fff'
  // 
  localStorage.setItem('Theme', 'Dark')
}

function themeLight() {
  $btnTheme.children[0].style.display = 'block'
  $btnTheme.children[1].style.display = 'none'

  document.body.style.background = '#fff'

  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.color = '#000'
  })

  document.querySelectorAll('span').forEach(span => {
    span.style.color = '#000'
  })

  $pitch.style.background = '#222'

  // 
  localStorage.setItem('Theme', 'Light')
}


$btnTheme.children[1].style.display = 'none'
$btnTheme.addEventListener('click', () => {

  // moon
  $btnTheme.classList.toggle('moon')
  if($btnTheme.classList.contains('moon')){
    themeDark()
  }

  // sun (default)
  $btnTheme.classList.toggle('sun')
  if($btnTheme.classList.contains('sun')){
    themeLight()
  }
})


// local storage
document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage.getItem('Theme'))
  if(localStorage.getItem('Theme') == null) {
    localStorage.setItem('Theme', 'Light')
  }

  if(localStorage.getItem('Theme') === 'Light') themeLight()
  if(localStorage.getItem('Theme') === 'Dark') themeDark()
})