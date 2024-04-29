// 
// ========================= burger =========================
// let burger = document.querySelector('.mobil__burger');
// let burger1 = document.querySelector('.mobil__burger-1');
// let burger2 = document.querySelector('.mobil__burger-2');
// let sidebar = document.querySelector('.sidebar');

// burger.addEventListener('click', function() {
// 	sidebar.classList.toggle('sidebar--active');
// });

let burger = document.querySelector('.burger');
let nav = document.querySelector('.sidebar-wrap');
let main = document.querySelector('.main');

burger.addEventListener('click', rotateBurger); 

function rotateBurger() { 
	burger.classList.toggle('burger-active');
	nav.classList.toggle('sidebar-wrap--active');
	main.classList.toggle('main--blur');
	document.body.classList.toggle('no-scroll');
}

// burger.addEventListener('click', rotateBurger);




// function rotateBurger() { 
//   burger.classList.toggle('burger-active');
// sidebar.classList.add('sidebar--active');


//   document.sidebar.classList.toggle('sidebar--active');
//   document.body.classList.toggle('no-scroll');


  
//   document.body.classList.add('no-scroll');
//   document.body.classList.remove('no-scroll');
// }
