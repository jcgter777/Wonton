"use strict"
welcomeButton = document.body.getElementById('welcome1');
welcomeButton.addEventListener("click",openPage());
//Tabs and Night mode //////////////////////////////////////////////////////
let sites = {
	
};
/*
var pelements = document.querySelectorAll("a");
pelements.target = "_blank";
*/
function logout() {
	firebase.auth().signOut();
	location.reload();
}

function openLinks() {
	var atags = document.querySelectorAll('a');
	var attrib = document.createAttribute('target');
	attrib.value = "_blank";
	atags.setAttributeNode(attrib); 
}

function openSesame() {
	document.getElementById('truediv').classList = 'visible';
	document.getElementById('signinsuccess').classList = 'hidden';
	document.getElementById('googlesignin').classList = 'hidden';
}

function toggle_night_mode() {
	set_night_mode(!config['night_mode']);
}

function set_night_mode(state) {
  if (state) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
  config['night_mode'] = state;
  localStorage.thebutton_config = JSON.stringify(config);
}


function openPage(evt, pageName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}

function openSite(evt, siteName) {
	var l, tabcontent1, tablink;

	tabcontent1 = document.getElementsByClassName("tabcontent1");
	for (l = 0; l < tabcontent1.length; l++) {
		tabcontent1[l].style.display = "none";
		/* document.getElementById(Object.keys(sites)[l]).src = "";*/
	}

	tablinks1 = document.getElementsByClassName("tablinks1");
	for (l = 0; l < tablinks1.length; l++) {
		tablinks1[l].className = tablinks1[l].className.replace(" active", "");
	}

	document.getElementById(siteName).parentElement.style.display = "block";

	document.getElementById(siteName).src = sites[siteName];
	evt.currentTarget.className += " active";
}
