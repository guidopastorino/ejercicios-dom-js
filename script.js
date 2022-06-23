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
  if(localStorage.getItem('Theme') == null) {
    localStorage.setItem('Theme', 'Light')
  }

  if(localStorage.getItem('Theme') === 'Light') themeLight()
  if(localStorage.getItem('Theme') === 'Dark') themeDark()
})



// 

// Responsive con Javascript
const mq = matchMedia('(max-width: 500px)')
const $mobileContainer = document.querySelector('#mobile')
const $desktopContainer = document.querySelector('#desktop')

const desktopContent = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1655995997862!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/k5HtFdj3Qhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`

const mobileContent = `<a href="#">Ver Video</a> <a href="#">Ver Video</a>`

function checkMedia(){
  if (mq.matches) {
    $mobileContainer.innerHTML = mobileContent
    $desktopContainer.innerHTML = ``
  } else {
    $desktopContainer.innerHTML = `${desktopContent}`
    $mobileContainer.innerHTML = ``
  }
}

mq.addListener(checkMedia)
document.addEventListener('DOMContentLoaded', () => {
  checkMedia()
})


// open web tester

const $form = document.querySelector('.form')
let newWebTab

$form.addEventListener('click', e => {
  let inputUrlValue = $form.querySelector('#ipt-url').value
  let inputWebWidth = $form.querySelector('#ipt-width').value
  let inputWebHeight = $form.querySelector('#ipt-height').value  

  if(e.target.getAttribute('id') == 'btn-open-web'){
    newWebTab = open(inputUrlValue, 'tester', `width=${inputWebWidth},height=${inputWebHeight},left= 50,top= 50`)
    e.preventDefault()
  }

  if(e.target.getAttribute('id') == 'btn-close-web'){
    newWebTab.close()
  }

})



// 