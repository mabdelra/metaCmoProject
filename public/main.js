const navOpenBtn = document.querySelector('.nav__btn');
console.log(navOpenBtn)

const menu = document.querySelector('.menu')

navOpenBtn.addEventListener("click", () => {
    navOpenBtn.classList.toggle('open');
})

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 175 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
    //   delta = this.period;
    //   this.isDeleting = true;
    // } else if (this.isDeleting && this.txt === "") {
    //   this.isDeleting = false;
    //   this.loopNum++;
    //   delta = 500;
      const line = document.getElementsByName("style");
      console.log(line);

    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";

    var fullTxt = this.toRotate[i];

    if(this.txt === fullTxt){
      css.innerHTML = ".typewriter > .wrap { border-right: transparent}";
    }
    else{
      css.innerHTML = ".typewriter > .wrap { border-right: 0.08em solid hsl(316, 83%, 30%); left: 1em; opacity: 100%}";
    }
    document.body.appendChild(css);
  };

//   Nav BTN

const logo = document.querySelectorAll('#meta path')

console.log(logo)

for(let i = 0; i<logo.length; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}
  

// Teams


  // Grabbing Path
  let path = document.querySelector('.path');
  // Path Length
  let pathLength = path.getTotalLength();

  console.log(path)

  path.style.strokeDasharray = pathLength + '' + pathLength

  // Offset dash that appears hidden entirely
  path.style.strokeDasharray = pathLength;

  window.addEventListener('scroll', () =>{
      var scrollPercentage = (document.documentElement.scrollTop + document.querySelector('.animation').scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);

      var drawLength = pathLength * scrollPercentage;

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;
  })



// 

const blockchain = document.querySelector('#blockchain');
const tokenomics = document.querySelector('#tokenomics');
const whitepaper = document.querySelector('#whitepaper');
const litepaper = document.querySelector('#litepaper');
const audits = document.querySelector('#audits');

// const activeBtn = document.querySelector('.btn-primary-selected')

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const list = document.querySelector('.list').children
const listCount = document.querySelector('.list').childElementCount

const buttonPosition = () => {
  if(blockchain.className === 'btn-primary-selected'){
    prevBtn.disabled = true;
    console.log("Previous button has been disabled");
  }
  if(audits.className === 'btn-primary-selected'){
    nextBtn.disabled = true;
    console.log("Next button has been disabled");
  }
  else{
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    console.log("No button has been disabled");
  }
}


buttonPosition()