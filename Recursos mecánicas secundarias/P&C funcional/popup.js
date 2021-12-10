var btnAbrirPopup01 = document.getElementById('btn-abrir-popup01'),
	overlay01 = document.getElementById('overlay01'),
	popup01 = document.getElementById('popup01'),
	btnCerrarPopup01 = document.getElementById('btn-cerrar-popup01');

	btnAbrirPopup02 = document.getElementById('btn-abrir-popup02'),
	overlay02 = document.getElementById('overlay02'),
	popup02 = document.getElementById('popup02'),
	btnCerrarPopup02 = document.getElementById('btn-cerrar-popup02');

	btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

	btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popup4 = document.getElementById('popup4'),
	btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

btnAbrirPopup01.addEventListener('click', function(){
	overlay01.classList.add('active');
	popup01.classList.add('active');
});

btnAbrirPopup02.addEventListener('click', function(){
	overlay02.classList.add('active');
	popup02.classList.add('active');
});

btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
	popup3.classList.add('active');
});

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
	popup4.classList.add('active');
});

btnCerrarPopup01.addEventListener('click', function(e){
	e.preventDefault();
	overlay01.classList.remove('active');
	popup01.classList.remove('active');
});

btnCerrarPopup02.addEventListener('click', function(e){
	e.preventDefault();
	overlay02.classList.remove('active');
	popup02.classList.remove('active');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
	popup3.classList.remove('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
	popup4.classList.remove('active');
});