function checkSelfLinks() {
    // Получаем все элементы <a> на странице
    const links = document.getElementsByTagName('a');

// Получаем текущий URL страницы
    const currentURL = window.location.href;

// Создаем массив для хранения self-ссылок
    const selfLinks = [];

// Перебираем все найденные ссылки
    for (let i = 0; i < links.length; i++) {
        // Получаем значение атрибута href каждой ссылки
        const href = links[i].getAttribute('href');

        // Проверяем, является ли ссылка self-ссылкой
        if (href && href === currentURL) {
            selfLinks.push(links[i]);
        }
    }

// Выводим найденные self-ссылки
    if (selfLinks.length > 0) {
        console.log('Найдены self-ссылки:');
        for (let j = 0; j < selfLinks.length; j++) {
            console.log(selfLinks[j]);
        }
    } else {
        console.log('На странице нет self-ссылок.');
    }
}