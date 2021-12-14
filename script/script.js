let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupCards = document.querySelector('.popup-cards');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let cardContainerEl = document.querySelector('.gallary-grid');
let templateEl = document.querySelector('.template');

let addButton = document.querySelector('.profile__add-btn');
let closeButtonCards = document.querySelector('.popup-cards__close');
let inputMesto = document.querySelector('.form__input_type_mesto');
let inputLink = document.querySelector('.form__input_type_img');

let buttonAddCard = document.querySelector('.form__btn_add');

const popupImage = document.querySelector('.popup-img');
const closeImageButton = popupImage.querySelector('.popup-img__close');
const titleImage = popupImage.querySelector('.popup-img__title');
const imageEL = popupImage.querySelector('.popup-img__img');

function editPopup() {
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

  function openPopupImg() {
      popupImage.classList.add('popup-img_opened');
  }
  
  function closeImagePopup() {
      popupImage.classList.remove('popup-img_opened');
      imageEL.src = '';
      titleImage.textContent = '';
  }
  
function getItem(item){
    const newItem = templateEl.content.cloneNode(true);
    let Mesto = newItem.querySelector('.gallary-grid__mesto');
    Mesto.textContent = item.name;

    let Image =  newItem.querySelector('.gallary-grid__image');
    Image.src = item.link;
    Image.alt = item.name;

    const removeBtn = newItem.querySelector('.gallary-grid__delete');
    removeBtn.addEventListener('click', handleDelete);
    
    const likeBtn = newItem.querySelector('.gallary-grid__like');
    likeBtn.addEventListener('click', like);
    
    Image.addEventListener('click', () => {
      openPopupImg();
      imageEL.src = Image.src;
      titleImage.textContent = Mesto.textContent;
    });
    return newItem;
}

function addPopup() {
    popupCards.classList.add('popup-cards_opened');
}

function closePopupCards() {
    popupCards.classList.remove('popup-cards_opened');
}

function handleAdd(){
  const ValueInputMesto = inputMesto.value;
  const ValueInputLink = inputLink.value;
  const listCard = getItem({name: ValueInputMesto, link: ValueInputLink});
  cardContainerEl.prepend(listCard);
  inputMesto.value ='';
  inputLink.value ='';
  closePopupCards();
}

function handleDelete(event){
  const targetEl = event.target;
  const listItem = targetEl.closest('.gallary-grid__item');
  listItem.remove()
}

function like(evt) {
  evt.target.classList.toggle('gallary-grid__like_active');
}

addButton.addEventListener('click', addPopup); 
closeButtonCards.addEventListener('click', closePopupCards); 
formElement.addEventListener('submit', formSubmitHandler); 
editButton.addEventListener('click', editPopup); 
closeButton.addEventListener('click', closePopup); 
buttonAddCard.addEventListener('click', handleAdd);
closeImageButton.addEventListener('click', closeImagePopup);
  

render();