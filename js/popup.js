const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e){
			const popupName = popupLink.getAttribute('href').replace('#','');
			const curentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
		}
	}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.Length>0){
	for (let index = 0; index < popupCloseIcon.length; index++){
	}
}
