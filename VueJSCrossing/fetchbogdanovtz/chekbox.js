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