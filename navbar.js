//CALCULADORA

function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado)
    {
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
}

//NAVBAR RESPONSIVO

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLink = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.hadleClick);
  }

  init() {
      if (this.mobileMenu) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();
