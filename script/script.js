const editButton = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup_profile');
const closeProfileButton = profilePopup.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.form');

const addButton = document.querySelector('.profile__add-btn');
const cardsPopup = document.querySelector('.popup_cards');
const closeCardsButton = cardsPopup.querySelector('.popup__close');
const cardsForm = cardsPopup.querySelector('.form_add');


let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');


let cardContainerEl = document.querySelector('.gallary-grid');
let templateEl = document.querySelector('.template');
let inputMesto = document.querySelector('.form__input_type_mesto');
let inputImg = document.querySelector('.form__input_type_img');

const imgItem = document.querySelector('.gallary-grid__image');
const popupImage = document.querySelector('.popup_img');
const closeImageButton = popupImage.querySelector('.popup__close');
const titleImage = popupImage.querySelector('.popup-img__title');
const imageEL = popupImage.querySelector('.popup-img__img');

function editPopup() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
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
    let newTitle = newItem.querySelector('.gallary-grid__mesto');
    newTitle.textContent = item.name;

    let newImage =  newItem.querySelector('.gallary-grid__image');
    newImage.src = item.link;
    newImage.alt = item.name;

    const removeBtn = newItem.querySelector('.gallary-grid__delete');
    removeBtn.addEventListener('click', handleDelete);
    
    const likeBtn = newItem.querySelector('.gallary-grid__like');
    likeBtn.addEventListener('click', like);
    
    newImage.addEventListener('click', () => {
      imageEL.src = newImage.src;
      titleImage.textContent = newTitle.textContent;
      openPopup(popupImage);
     
    });
    return newItem;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
}

function handleDelete(event){
  const targetEl = event.target;
  const listItem = targetEl.closest('.gallary-grid__item');
  listItem.remove()
}

function like(evt) {
  evt.target.classList.toggle('gallary-grid__like_active');
}

editButton.addEventListener('click', editPopup); 
closeProfileButton.addEventListener('click', function(){closePopup(profilePopup);}); 
closeCardsButton.addEventListener('click', function(){closePopup(cardsPopup);});
profileForm.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', function(){openPopup(cardsPopup);});
cardsForm.addEventListener('submit', handleAdd);
closeImageButton.addEventListener('click', function(){;closePopup(popupImage);});

render();