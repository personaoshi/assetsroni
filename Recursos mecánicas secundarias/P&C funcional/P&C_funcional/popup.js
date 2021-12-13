var btnAbrirPopup01 = document.getElementById('btn-abrir-popup01'),
	overlay01 = document.getElementById('overlay01'),
	popup01 = document.getElementById('popup01'),
	btnCerrarPopup01 = document.getElementById('btn-cerrar-popup01'),

	btnAbrirPopup02 = document.getElementById('btn-abrir-popup02'),
	overlay02 = document.getElementById('overlay02'),
	popup02 = document.getElementById('popup02'),
	btnCerrarPopup02 = document.getElementById('btn-cerrar-popup02');

btnAbrirPopup03 = document.getElementById('btn-abrir-popup03'),
	overlay03 = document.getElementById('overlay03'),
	popup03 = document.getElementById('popup03'),
	btnCerrarPopup03 = document.getElementById('btn-cerrar-popup03');

btnAbrirPopup04 = document.getElementById('btn-abrir-popup04'),
	overlay04 = document.getElementById('overlay04'),
	popup04 = document.getElementById('popup04'),
	btnCerrarPopup04 = document.getElementById('btn-cerrar-popup04');

	btnAbrirPopup05 = document.getElementById('btn-abrir-popup05'),
	overlay05 = document.getElementById('overlay05'),
	popup05 = document.getElementById('popup05'),
	btnCerrarPopup05 = document.getElementById('btn-cerrar-popup05');

	btnAbrirPopup06 = document.getElementById('btn-abrir-popup06'),
	overlay06 = document.getElementById('overlay06'),
	popup06 = document.getElementById('popup06'),
	btnCerrarPopup06 = document.getElementById('btn-cerrar-popup06');

	btnAbrirPopup07 = document.getElementById('btn-abrir-popup07'),
	overlay07 = document.getElementById('overlay07'),
	popup07 = document.getElementById('popup07'),
	btnCerrarPopup07 = document.getElementById('btn-cerrar-popup07');

	btnAbrirPopup08 = document.getElementById('btn-abrir-popup08'),
	overlay08 = document.getElementById('overlay08'),
	popup08 = document.getElementById('popup08'),
	btnCerrarPopup08 = document.getElementById('btn-cerrar-popup08');

	btnAbrirPopup09 = document.getElementById('btn-abrir-popup09'),
	overlay09 = document.getElementById('overlay09'),
	popup09 = document.getElementById('popup09'),
	btnCerrarPopup09 = document.getElementById('btn-cerrar-popup09');

	btnAbrirPopup10 = document.getElementById('btn-abrir-popup10'),
	overlay10 = document.getElementById('overlay10'),
	popup10 = document.getElementById('popup10'),
	btnCerrarPopup10 = document.getElementById('btn-cerrar-popup10');

	btnAbrirPopup11 = document.getElementById('btn-abrir-popup11'),
	overlay11 = document.getElementById('overlay11'),
	popup11 = document.getElementById('popup11'),
	btnCerrarPopup11 = document.getElementById('btn-cerrar-popup11');

	btnAbrirPopup12 = document.getElementById('btn-abrir-popup12'),
	overlay12 = document.getElementById('overlay12'),
	popup12 = document.getElementById('popup12'),
	btnCerrarPopup12 = document.getElementById('btn-cerrar-popup12');


	btnAbrirPopup13 = document.getElementById('btn-abrir-popup13'),
	overlay13 = document.getElementById('overlay13'),
	popup13 = document.getElementById('popup13'),
	btnCerrarPopup13 = document.getElementById('btn-cerrar-popup13');

	btnAbrirPopup14 = document.getElementById('btn-abrir-popup14'),
	overlay14 = document.getElementById('overlay14'),
	popup14 = document.getElementById('popup14'),
	btnCerrarPopup14 = document.getElementById('btn-cerrar-popup14');

	btnAbrirPopup15 = document.getElementById('btn-abrir-popup15'),
	overlay15 = document.getElementById('overlay15'),
	popup15 = document.getElementById('popup15'),
	btnCerrarPopup15 = document.getElementById('btn-cerrar-popup15');

	btnAbrirPopup16 = document.getElementById('btn-abrir-popup16'),
	overlay16 = document.getElementById('overlay16'),
	popup16 = document.getElementById('popup16'),
	btnCerrarPopup16 = document.getElementById('btn-cerrar-popup16');

	btnAbrirPopup17 = document.getElementById('btn-abrir-popup17'),
	overlay17 = document.getElementById('overlay17'),
	popup17 = document.getElementById('popup17'),
	btnCerrarPopup17 = document.getElementById('btn-cerrar-popup17');

	btnAbrirPopup18 = document.getElementById('btn-abrir-popup18'),
	overlay18 = document.getElementById('overlay18'),
	popup18 = document.getElementById('popup18'),
	btnCerrarPopup18 = document.getElementById('btn-cerrar-popup18');

	btnAbrirPopup19 = document.getElementById('btn-abrir-popup19'),
	overlay19 = document.getElementById('overlay19'),
	popup19 = document.getElementById('popup19'),
	btnCerrarPopup19 = document.getElementById('btn-cerrar-popup19');

	btnAbrirPopup20 = document.getElementById('btn-abrir-popup20'),
	overlay20 = document.getElementById('overlay20'),
	popup20 = document.getElementById('popup20'),
	btnCerrarPopup20 = document.getElementById('btn-cerrar-popup20');

	btnAbrirPopup21 = document.getElementById('btn-abrir-popup21'),
	overlay21 = document.getElementById('overlay21'),
	popup21 = document.getElementById('popup21'),
	btnCerrarPopup21 = document.getElementById('btn-cerrar-popup21');

	btnAbrirPopup22 = document.getElementById('btn-abrir-popup22'),
	overlay22 = document.getElementById('overlay22'),
	popup22 = document.getElementById('popup22'),
	btnCerrarPopup22 = document.getElementById('btn-cerrar-popup22');

	btnAbrirPopup23 = document.getElementById('btn-abrir-popup23'),
	overlay23 = document.getElementById('overlay23'),
	popup23 = document.getElementById('popup23'),
	btnCerrarPopup23 = document.getElementById('btn-cerrar-popup23');

	btnAbrirPopup24 = document.getElementById('btn-abrir-popup24'),
	overlay24 = document.getElementById('overlay24'),
	popup24 = document.getElementById('popup24'),
	btnCerrarPopup24 = document.getElementById('btn-cerrar-popup24');

	btnAbrirPopup25 = document.getElementById('btn-abrir-popup25'),
	overlay25 = document.getElementById('overlay25'),
	popup25 = document.getElementById('popup25'),
	btnCerrarPopup25 = document.getElementById('btn-cerrar-popup25');

btnAbrirPopup01.addEventListener('click', function(){
	overlay01.classList.add('active');
	popup01.classList.add('active');
});

btnCerrarPopup01.addEventListener('click', function(e){
	e.preventDefault();
	overlay01.classList.remove('active');
	popup01.classList.remove('active');
});


btnAbrirPopup02.addEventListener('click', function(){
	overlay02.classList.add('active');
	popup02.classList.add('active');
});
btnCerrarPopup02.addEventListener('click', function(e){
	e.preventDefault();
	overlay02.classList.remove('active');
	popup02.classList.remove('active');
});

btnAbrirPopup03.addEventListener('click', function(){
	overlay03.classList.add('active');
	popup03.classList.add('active');
});
btnCerrarPopup03.addEventListener('click', function(e){
	e.preventDefault();
	overlay03.classList.remove('active');
	popup03.classList.remove('active');
});

btnAbrirPopup04.addEventListener('click', function(){
	overlay04.classList.add('active');
	popup04.classList.add('active');
});
btnCerrarPopup04.addEventListener('click', function(e){
	e.preventDefault();
	overlay04.classList.remove('active');
	popup04.classList.remove('active');
});



btnAbrirPopup05.addEventListener('click', function(){
	overlay05.classList.add('active');
	popup05.classList.add('active');
});
btnCerrarPopup05.addEventListener('click', function(e){
	e.preventDefault();
	overlay05.classList.remove('active');
	popup05.classList.remove('active');
});


btnAbrirPopup06.addEventListener('click', function(){
	overlay06.classList.add('active');
	popup06.classList.add('active');
});
btnCerrarPopup06.addEventListener('click', function(e){
	e.preventDefault();
	overlay06.classList.remove('active');
	popup06.classList.remove('active');
});

btnAbrirPopup07.addEventListener('click', function(){
	overlay07.classList.add('active');
	popup07.classList.add('active');
});
btnCerrarPopup07.addEventListener('click', function(e){
	e.preventDefault();
	overlay07.classList.remove('active');
	popup07.classList.remove('active');
});

btnAbrirPopup08.addEventListener('click', function(){
	overlay08.classList.add('active');
	popup08.classList.add('active');
});
btnCerrarPopup08.addEventListener('click', function(e){
	e.preventDefault();
	overlay08.classList.remove('active');
	popup08.classList.remove('active');
});

btnAbrirPopup09.addEventListener('click', function(){
	overlay09.classList.add('active');
	popup09.classList.add('active');
});
btnCerrarPopup09.addEventListener('click', function(e){
	e.preventDefault();
	overlay09.classList.remove('active');
	popup09.classList.remove('active');
});

btnAbrirPopup10.addEventListener('click', function(){
	overlay10.classList.add('active');
	popup10.classList.add('active');
});
btnCerrarPopup10.addEventListener('click', function(e){
	e.preventDefault();
	overlay10.classList.remove('active');
	popup10.classList.remove('active');
});

btnAbrirPopup11.addEventListener('click', function(){
	overlay11.classList.add('active');
	popup11.classList.add('active');
});
btnCerrarPopup11.addEventListener('click', function(e){
	e.preventDefault();
	overlay11.classList.remove('active');
	popup11.classList.remove('active');
});

btnAbrirPopup12.addEventListener('click', function(){
	overlay12.classList.add('active');
	popup12.classList.add('active');
});
btnCerrarPopup12.addEventListener('click', function(e){
	e.preventDefault();
	overlay12.classList.remove('active');
	popup12.classList.remove('active');
});


btnAbrirPopup13.addEventListener('click', function(){
	overlay13.classList.add('active');
	popup13.classList.add('active');
});
btnCerrarPopup13.addEventListener('click', function(e){
	e.preventDefault();
	overlay13.classList.remove('active');
	popup13.classList.remove('active');
});

btnAbrirPopup14.addEventListener('click', function(){
	overlay14.classList.add('active');
	popup14.classList.add('active');
});
btnCerrarPopup14.addEventListener('click', function(e){
	e.preventDefault();
	overlay14.classList.remove('active');
	popup14.classList.remove('active');
});

btnAbrirPopup15.addEventListener('click', function(){
	overlay15.classList.add('active');
	popup15.classList.add('active');
});
btnCerrarPopup15.addEventListener('click', function(e){
	e.preventDefault();
	overlay15.classList.remove('active');
	popup15.classList.remove('active');
});

btnAbrirPopup16.addEventListener('click', function(){
	overlay16.classList.add('active');
	popup16.classList.add('active');
});
btnCerrarPopup16.addEventListener('click', function(e){
	e.preventDefault();
	overlay16.classList.remove('active');
	popup16.classList.remove('active');
});

btnAbrirPopup17.addEventListener('click', function(){
	overlay17.classList.add('active');
	popup17.classList.add('active');
});
btnCerrarPopup17.addEventListener('click', function(e){
	e.preventDefault();
	overlay17.classList.remove('active');
	popup17.classList.remove('active');
});

btnAbrirPopup18.addEventListener('click', function(){
	overlay18.classList.add('active');
	popup18.classList.add('active');
});
btnCerrarPopup18.addEventListener('click', function(e){
	e.preventDefault();
	overlay18.classList.remove('active');
	popup18.classList.remove('active');
});

btnAbrirPopup19.addEventListener('click', function(){
	overlay19.classList.add('active');
	popup19.classList.add('active');
});
btnCerrarPopup19.addEventListener('click', function(e){
	e.preventDefault();
	overlay19.classList.remove('active');
	popup19.classList.remove('active');
});

btnAbrirPopup20.addEventListener('click', function(){
	overlay20.classList.add('active');
	popup20.classList.add('active');
});
btnCerrarPopup20.addEventListener('click', function(e){
	e.preventDefault();
	overlay20.classList.remove('active');
	popup20.classList.remove('active');
});

btnAbrirPopup21.addEventListener('click', function(){
	overlay21.classList.add('active');
	popup21.classList.add('active');
});
btnCerrarPopup21.addEventListener('click', function(e){
	e.preventDefault();
	overlay21.classList.remove('active');
	popup21.classList.remove('active');
});

btnAbrirPopup22.addEventListener('click', function(){
	overlay22.classList.add('active');
	popup22.classList.add('active');
});
btnCerrarPopup22.addEventListener('click', function(e){
	e.preventDefault();
	overlay22.classList.remove('active');
	popup22.classList.remove('active');
});

btnAbrirPopup23.addEventListener('click', function(){
	overlay23.classList.add('active');
	popup23.classList.add('active');
});
btnCerrarPopup23.addEventListener('click', function(e){
	e.preventDefault();
	overlay23.classList.remove('active');
	popup23.classList.remove('active');
});

btnAbrirPopup24.addEventListener('click', function(){
	overlay24.classList.add('active');
	popup24.classList.add('active');
});
btnCerrarPopup24.addEventListener('click', function(e){
	e.preventDefault();
	overlay24.classList.remove('active');
	popup24.classList.remove('active');
});

btnAbrirPopup25.addEventListener('click', function(){
	overlay25.classList.add('active');
	popup25.classList.add('active');
});
btnCerrarPopup25.addEventListener('click', function(e){
	e.preventDefault();
	overlay25.classList.remove('active');
	popup25.classList.remove('active');
});