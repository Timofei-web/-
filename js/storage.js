// Тестовый массив данных (загрузится при первом входе)
const defaultMemes = [
    {
        id: 1700000000001, // Уникальный ID
        title: "Превед, Медвед!",
        category: "2000-е",
        imageUrl: "./images/медвед.gif",
        isLearned: false // Статус (изучено или нет)
    },
    {
        id: 1700000000002,
        title: "Doge (Доге)",
        category: "2010-е",
        imageUrl: "./images/doge-meme.webp",
        isLearned: true
    },
    {
        id: 1700000000003,
        title: "Гарольд, скрывающий боль",
        category: "2010-е",
        imageUrl: "./images/Garold-meme.webp",
        isLearned: false
    }
];

// Функция получения данных из LocalStorage
function getData() {
    const data = localStorage.getItem('memology_data');
    if (data) {
        return JSON.parse(data); // Если данные есть, расшифровываем их
    } else {
        saveData(defaultMemes); // Если пусто (первый вход), сохраняем дефолтные
        return defaultMemes;
    }
}

// Функция сохранения данных в LocalStorage
function saveData(memesArray) {
    localStorage.setItem('memology_data', JSON.stringify(memesArray));
}