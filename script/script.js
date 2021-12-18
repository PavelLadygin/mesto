const editButton = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup_profile');
const closeProfileButton = profilePopup.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.form');

const addButton = document.querySelector('.profile__add-btn');
const cardsPopup = document.querySelector('.popup_cards');
const closeCardsButton = cardsPopup.querySelector('.popup__close');
const cardsForm = cardsPopup.querySelector('.form_add');
const cardsBtn = cardsPopup.querySelector('.form__btn');


const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');


const cardContainerEl = document.querySelector('.gallary-grid');
const templateEl = document.querySelector('.template');
const inputMesto = document.querySelector('.form__input_type_mesto');
const inputImg = document.querySelector('.form__input_type_img');

const imgItem = document.querySelector('.gallary-grid__image');
const popupImage = document.querySelector('.popup_img');
const closeImageButton = popupImage.querySelector('.popup__close');
const titleImage = popupImage.querySelector('.popup-img__title');
const imageEL = popupImage.querySelector('.popup-img__img');

const editBtn = profileForm.querySelector('.form__btn');

const inputError = Array.from(document.querySelectorAll('.form__input-error'));
const inputs = Array.from(document.querySelectorAll('.form__input'));

function editPopup() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    editBtn.disabled = false;
    editBtn.classList.remove('form__btn_disabled');
    openPopup(profilePopup);
}


function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(profilePopup);    
}


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 


function render() {
      const html = initialCards
        .map((item) => {
            return getItem(item);
        });
        cardContainerEl.append(...html);
  }

function getItem(item){
    const newItem = templateEl.content.cloneNode(true);
    const newTitle = newItem.querySelector('.gallary-grid__mesto');
    newTitle.textContent = item.name;

    const newImage =  newItem.querySelector('.gallary-grid__image');
    newImage.src = item.link;
    newImage.alt = item.name;

    const removeBtn = newItem.querySelector('.gallary-grid__delete');
    removeBtn.addEventListener('click', handleDelete);
    
    const likeBtn = newItem.querySelector('.gallary-grid__like');
    likeBtn.addEventListener('click', like);
    
    newImage.addEventListener('click', () => {
      imageEL.src = item.link;
      imageEL.alt = item.name;
      titleImage.textContent = newTitle.textContent;
      openPopup(popupImage);
     
    });
    return newItem;
}

function openPopup(popup) {
  document.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
  popup.classList.remove('popup_opened');
}

function resetPopup(popup) {
  inputError.forEach((error) => {
    error.textContent = '';
  });
  inputs.forEach((errorLine) => {
    errorLine.classList.remove('form__input_error');
  });
}

function handleAdd(evt){
  evt.preventDefault();
  const valueInputMesto = inputMesto.value;
  const valueInputImg = inputImg.value;
  const listCard = getItem({name: valueInputMesto, link: valueInputImg});
  cardContainerEl.prepend(listCard);
  inputMesto.value ='';
  inputImg.value ='';
  closePopup(cardsPopup);
  cardsForm.reset();
  cardsBtn.classList.add('form__btn_disabled');
  cardsBtn.disabled = true;
 
}

function handleDelete(event){
  const targetEl = event.target;
  const listItem = targetEl.closest('.gallary-grid__item');
  listItem.remove()
}

function like(evt) {
  evt.target.classList.toggle('gallary-grid__like_active');
}

function closePopupEsc(evt) {
  if(evt.key === 'Escape') {
    const popupEnable = document.querySelector('.popup_opened');
    closePopup(popupEnable);
  }
}

function closePopupOverlay(evt) {
  if(evt.path[0].classList.contains('popup__overlay')) {
    const popupEnable = document.querySelector('.popup_opened');
    closePopup(popupEnable);
  }
}

editButton.addEventListener('click', () => {
  resetPopup(profilePopup); 
  editPopup(profilePopup);
});

closeProfileButton.addEventListener('click', function(){
  closePopup(profilePopup);
}); 

closeCardsButton.addEventListener('click', function(){
  closePopup(cardsPopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', function(){
  resetPopup(cardsPopup); 
  openPopup(cardsPopup);
});
cardsForm.addEventListener('submit', handleAdd);
closeImageButton.addEventListener('click', function(){
  closePopup(popupImage);
});



render();