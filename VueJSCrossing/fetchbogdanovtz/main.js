// import * as obj from './lets.js'

// console.log(obj.up);

import * as obj from "./lets.js";

function func1() {

  let select = document.querySelector("#oneid").value
  let f = document.querySelector('.one')
  let d = document.querySelector('#textone')

  let checkboxcat = document.querySelector('#c2')
  let textcat = document.querySelector('#texttwo')

  let checkboxsnooty = document.querySelector('#c3')
  let textsnooty = document.querySelector('#textthree')

  let ff = document.querySelector('#c11')
  let dd = document.querySelector('#textonee')

  let checkboxcatt = document.querySelector('#c22')
  let textcatt = document.querySelector('#texttwoo')

  let checkboxsnootyy = document.querySelector('#c33')
  let textsnootyy = document.querySelector('#textthreee')

// ----------------------------------------------------------------------------------------------------------------

  if (select == "villagers") {
      f.style.display = 'block'
      d.style.display = 'block'

      checkboxcat.style.display = 'block'
      textcat.style.display = 'block'

      checkboxsnooty.style.display = 'block'
      textsnooty.style.display = 'block'
      

  } else {
      f.style.display = 'none'
      d.style.display = 'none'

      checkboxcat.style.display = 'none'
      textcat.style.display = 'none'

      checkboxsnooty.style.display = 'none'
      textsnooty.style.display = 'none'
  }

if (select == "houseware") {
    ff.style.display = 'block'
    dd.style.display = 'block'

    checkboxcatt.style.display = 'block'
    textcatt.style.display = 'block'

    checkboxsnootyy.style.display = 'block'
    textsnootyy.style.display = 'block'
    

} else {
    ff.style.display = 'none'
    dd.style.display = 'none'

    checkboxcatt.style.display = 'none'
    textcatt.style.display = 'none'

    checkboxsnootyy.style.display = 'none'
    textsnootyy.style.display = 'none'
}

// ----------------------------------------------------------------------------------------------------------------

fetch("https://acnhapi.com/v1a/" + select)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((data) => {
        let i = 0
        for (i in data) {
            let image = document.createElement("img");
            let text = document.createElement("p");
            let availibilitylocation = document.createElement("p");
            let availibilityrarity = document.createElement("p");
            let price = document.createElement("p");
            let availibilitymontharraynorthern = document.createElement("p");
            let time = document.createElement("p");
            let rarity = document.createElement("p");
            let personality = document.createElement("p");
            let birthday = document.createElement("p");
            let Catchphrase = document.createElement("p");
            let isOrderable = document.createElement("p");
            let Milesprice = document.createElement("p");
            let Source = document.createElement("p");
            let Sourcedetail = document.createElement("p");
            let Tag = document.createElement("p");



            if ("location" in data[i]) {
                availibilitylocation.textContent = data[i].availibility["location"];
                console.log(location)
            }

            if ("rarity" in data[i]) {
                availibilityrarity.textContent = data[i].availibility["rarity"];
                console.log(rarity)
            }

            if ("price" in data[i]) {
                price.textContent = data[i].price;
            }

            if ("month-array-northern" in data[i]) {
                availibilitymontharraynorthern.textContent = data[i].availibility["month-array-northern"][2];
            }

            if ("time" in data[i]) {
                time.textContent = data[i].availibility["time"];
            }

            if ("personality" in data[i]) {
                personality.textContent = data[i].personality;
            }

            if ("birthday" in data[i]) {
                birthday.textContent = data[i].birthday;
            }

            if ("catch-phrase" in data[i]) {
                Catchphrase.textContent = data[i]["catch-phrase"];
            }

            if ("isOrderable" in data[i]) {
                isOrderable.textContent = data[i].isOrderable;
            }


            if (select == "houseware") {
                const e = data.flat(Infinity)
                text.textContent = e[i]['name'][lang.value];
                Tag.textContent = e[i]["tag"]
                image.src = e[i].image_uri;
                Source.textContent = console.error();
                [i]["source"];
                Milesprice.textContent = e[i]["miles-price"];
                Sourcedetail.textContent = e[i]["source-detail"];



            } else {
                text.textContent = data[i].name[lang.value];
                image.src = data[i].image_uri;
            }
            const div = document.createElement('div')
            div.setAttribute('class', text.textContent)
            up.appendChild(div)
            div.append(image, text, availibilitylocation, availibilityrarity, availibilitymontharraynorthern, time, rarity, personality, birthday, Catchphrase, isOrderable, Milesprice, Source, Sourcedetail, Tag);
        }
    });
}

// ----------------------------------------------------------------------------------------------------------------
let up = document.querySelector('.up')
let search = document.querySelector('#search')
let lang = document.querySelector('#nametranslation')
let filter = document.querySelector('#filter')

let body = document.querySelector("body");
let button_check = document.querySelector(".press")
let button_check3 = document.querySelector(".press3")
let button_check4 = document.querySelector(".press4")

obj.button_check.addEventListener("click", function() {
  up.innerHTML = ''
})

obj.button_check.addEventListener("click", func1)

obj.button_check3.addEventListener("click", function() {
  up.innerHTML = ''
})

document.querySelector('#search').oninput = function() {
  let val = this.value.trim();
  let allitemsinup = document.querySelectorAll('.up div')
  if (val != '') {
      allitemsinup.forEach(function(elem) {
          if (elem.innerText.search(RegExp(val, "gi")) == -1) {
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
              console.log(elem)

          }
      })
  } else {
      allitemsinup.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}

// ----------------------------------------------------------------------------------------------------------------
document.querySelector('.one').onclick = function() {
  var chbox;
  chbox = document.querySelector('.one');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Cranky", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Cranky", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}

document.querySelector('#c2').onclick = function() {
  var chbox;
  chbox = document.querySelector('#c2');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Snooty", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Snooty", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}



document.querySelector('#c3').onclick = function() {
  var chbox;
  chbox = document.querySelector('#c3');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Ankha", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Ankha", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}


document.querySelector('#c11').onclick = function() {
  var chbox;
  chbox = document.querySelector('#c11');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Guitar", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Guitar", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}


document.querySelector('#c22').onclick = function() {
  var chbox;
  chbox = document.querySelector('#c22');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Bed", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Bed", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}

document.querySelector('#c33').onclick = function() {
  var chbox;
  chbox = document.querySelector('#c33');
  console.log(chbox.checked)
  if (chbox.checked == true) {
      let divs = document.querySelectorAll('#up div')
      console.log(divs)
      divs.forEach(function(elem) {
          if (elem.innerText.search(RegExp("Table", "gi")) == -1) {
              console.log(elem.innerText.search(RegExp("Table", "gi")) == -1)
              elem.style.display = "none"
          } else {
              elem.style.display = "block"
          }
      })


  } else {
      let divs = document.querySelectorAll('#up div')
      divs.forEach(function(elem) {
          elem.style.display = "block"
      })
  }
}