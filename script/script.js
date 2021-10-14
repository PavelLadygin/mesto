let addButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close');

function addPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
}

function closePopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}

addButton.addEventListener('click', addPopup); 
closeButton.addEventListener('click', closePopup); 

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let valueInputName = nameInput.value;
    let valueInputJob = jobInput.value;
    console.log(valueInputName);
    // Выберите элементы, куда должны быть вставлены значения полей

    let title = document.querySelector('.profile__title');// Воспользуйтесь инструментом .querySelector()
    let subtitle = document.querySelector('.profile__subtitle');// Воспользуйтесь инструментом .querySelector()

    // Вставьте новые значения с помощью textContent

    title.textContent = valueInputName;
    subtitle.textContent = valueInputJob;
    closePopup();    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 


function addLike() {
    let like = document.querySelector('.gallary-grid__like');
    like.classList.add('gallary-grid__like_on');
}

formElement.addEventListener('click', addLike); 
