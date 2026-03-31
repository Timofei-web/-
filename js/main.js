// === main.js ===

// Находим нужные элементы на странице
const container = document.getElementById('memes-container');
const counter = document.getElementById('total-memes');

// Главная функция отрисовки карточек
function renderItems() {
    const memes = getData(); // Получаем свежие данные из базы
    
    container.innerHTML = ''; // Очищаем контейнер перед отрисовкой
    counter.textContent = memes.length; // Обновляем счетчик

    // Перебираем массив и создаем карточку для каждого мема
    memes.forEach(meme => {
        // Создаем div для карточки
        const card = document.createElement('div');
        // Добавляем класс 'learned', если мем изучен
        card.className = `meme-card ${meme.isLearned ? 'learned' : ''}`;

        // Заполняем карточку HTML-кодом
        card.innerHTML = `
            <img src="${meme.imageUrl}" alt="${meme.title}">
            <span class="category">${meme.category}</span>
            <h3>${meme.title}</h3>
            <div class="meme-card-actions">
                <label class="checkbox-wrapper">
                    <input type="checkbox" onchange="toggleStatus(${meme.id})" ${meme.isLearned ? 'checked' : ''}>
                    Изучено
                </label>
                <button class="delete-btn" onclick="deleteMeme(${meme.id})">УДАЛИТЬ</button>
            </div>
        `;
        
        // Вставляем готовую карточку на страницу
        container.appendChild(card);
    });
}

// Функция изменения статуса "Изучено"
function toggleStatus(id) {
    const memes = getData(); // Достаем массив
    const meme = memes.find(item => item.id === id); // Ищем мем по ID
    
    if (meme) {
        meme.isLearned = !meme.isLearned; // Меняем статус на противоположный
        saveData(memes); // Сохраняем обновленный массив
        renderItems(); // Перерисовываем страницу
    }
}

// Функция удаления мема
function deleteMeme(id) {
    // Всплывающее окно подтверждения (Как требует ТЗ!)
    if (confirm("Вы точно хотите удалить этот мем из базы?")) {
        let memes = getData();
        // Фильтруем массив, оставляя все мемы, КРОМЕ того, который удаляем
        memes = memes.filter(item => item.id !== id);
        
        saveData(memes); // Сохраняем базу без этого мема
        renderItems(); // Перерисовываем страницу
    }
}

// Запускаем отрисовку сразу, как только страница загрузится
document.addEventListener('DOMContentLoaded', renderItems);