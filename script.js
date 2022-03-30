
// Insert angka ke textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

//Fungsi Persentase
function percentage(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil / 100;
}

// Clean
function clean(){
	document.form.textarea.value = "";
}
