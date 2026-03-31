// === form.js ===

const form = document.getElementById('add-meme-form');

// Слушаем событие отправки формы
form.addEventListener('submit', function(event) {
    // Останавливаем стандартную перезагрузку страницы браузером
    event.preventDefault();

    // Получаем значения из полей ввода и убираем лишние пробелы по краям (.trim())
    const titleValue = document.getElementById('meme-title').value.trim();
    const categoryValue = document.getElementById('meme-category').value;
    const urlValue = document.getElementById('meme-url').value.trim();

    // проверяем что все поля заполнены
    if (titleValue === '' || categoryValue === '' || urlValue === '') {
        alert('Ошибка! Пожалуйста, заполните все обязательные поля.');
        return; // Останавливаем выполнение функции, если есть пустые поля
    }

    // Создание оъекта
    const newMeme = {
        id: Date.now(), // Генерируем уникальный ID на основе текущего времени
        title: titleValue,
        category: categoryValue,
        imageUrl: urlValue,
        isLearned: false // По умолчанию мем еще не "изучен"
    };

    // Сохранение данных в локал стораге
    const memesArray = getData(); // Получаем текущий массив из storage.js
    memesArray.push(newMeme); // Добавляем в конец массива новый мем
    saveData(memesArray); // Сохраняем обновленный массив в LocalStorage

//    Возврат на главную страницу после добавления нового мема
    // После успешного сохранения перекидываем пользователя на главную страницу
    window.location.href = 'index.html';
});