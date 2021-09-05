const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const num = []
num.push($('#zero-btn'))
num.push($('#one-btn'))
num.push($('#two-btn'))
num.push($('#three-btn'))
num.push($('#four-btn'))
num.push($('#five-btn'))
num.push($('#six-btn'))
num.push($('#seven-btn'))
num.push($('#eight-btn'))
num.push($('#nine-btn'))

const C = $('#C-btn')
const works = [$('#plus-btn'),$('#minus-btn'),$('#mul-btn'),$('#div-btn')]
const done = $('#equal-btn')


const process = $('#process')
const res = $('#result')

let ans,n,inputing,working

//
C.addEventListener('click',reset)
C.click()

done.addEventListener('click',calc)
for(let i = 0;i<10;i++) num[i].addEventListener('click',input)
for(let i = 0;i<4;i++) works[i].addEventListener('click',work)

function reset() {
  process.innerText = ""
  res.innerText = "0"
  ans = 0
  n = 0
  inputing = false
  working = false
}

function input(e) {
  let x = +e.target.dataset.val
  
  console.log(e.target,e.target.dataset.val)
  console.log(x)
  if(inputing) n = n*10 + x
  else n = x,inputing = true
  res.innerText = `${n}`
}

function work(e) {
  let type = e.target.id || e.target.parentNode.id

  if(type=="plus-btn") {
    if(working) done.click()
    else {
      ans=n
      n=0
      inputing=false
      working = true
    }

    process.innerText = ans + '+'
    res.innerText = "0"
  }
}

function calc() {
  ans+=n
  res.innerText = ans
  n=0
  working = false
}