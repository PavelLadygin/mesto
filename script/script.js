let addButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');


function addPopup() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let valueInputName = nameInput.value;
    let valueInputJob = jobInput.value;
    title.textContent = valueInputName;
    subtitle.textContent = valueInputJob;
    closePopup();    
}

formElement.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', addPopup); 
closeButton.addEventListener('click', closePopup); 