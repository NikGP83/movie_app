  #Стажировка Aston(ex Andersen)

  Внимание, для запуска или просмотра сайта нужно включить VPN, так как для запросов используется API TMDB.

Техническое задание TMDB Portal.
Цель: получить опыт работы с Rest API в React, Redux/RTK/RTK Query, Redux Thunk, React Router, а
также попрактиковать хуки.
Необходимо создать приложение TMDB Portal. Для этого нужно зарегистрироваться на TMDB,
чтобы получить ключ к API. Так же вам может быть потребуется воспользоваться VPN, поскольку
сервис заблокирован для пользователей из РФ и, возможно, других стран. Сама документация API
находится здесь https://developers.themoviedb.org/3/getting-started/introduction.
Ключ API можно получить здесь https://www.themoviedb.org/settings/api.
Библиотеки, которые следует использовать для выполнения задачи:
1) Использовать React JS, react hooks, Redux/ RTK/RTK Query, Redux thunk или другую Redux
Middleware, React router, Typescript (опционально).
2) Все остальное - по вашему выбору.
Задача:
Необходимо реализовать приложение, которое состоит из:
1) Главная страница.
На ней должен отображаться список фильмов. Список фильмов можно отфильтровать по
следующим параметрам:
• Фильмы с самым высоким рейтингом на TMDB
• Текущие популярные фильмов на TMDB
• Недавно вышедшие фильмы на TMDB
• И другие (опционально)
Реализовать пагинацию для вывода списка фильмов.
Реализовать поиск фильма по введенной строке из поля поиска.
2) Страница с информацией о конкретном фильме.
3) Страница со списком популярных актеров.
Реализовать пагинацию для вывода списка актеров.
Реализовать поиск актера по введенной строке из поля поиска.
4) Страница с информацией о конкретном актере.
5) 404 страница.
6) Страница для Error Boundary.
Так же необходимо предусмотреть навигацию по сайту, пагинацию или ленивую подгрузку

контента, лоадеры, обернуть приложение в Error Boundary (https://ru.legacy.reactjs.org/docs/error-
boundaries.html#introducing-error-boundaries).

При создании поля поиска не забудьте реализовать debounce, если вешаете запросы на onChange
инпута, либо делайте кнопку для отправки запроса и очищайте после этого поле поиска.
Конечное приложение должно быть развернуто на каком-нибудь сервере и доступно для
просмотра в интернете. Вы можете использовать Github Pages или любое другое решение.
ТЗ написано максимально кратко. Для вывода контента страницы используйте данные, которые
предоставляет API. Расписывать поля не буду. Я рассчитываю, что у вас получится сайт с приятным
UI интерфейсом и удобной навигацией. Вы можете усложнить приложение, добавив новые
страницы, анимацию, расширив функционал различными фильтрами, сортировками, поиском.
Использование Type Script приветствуется, но не является обязательным, поскольку для
некоторых эта задача может быть очень сложной. Адаптация сайта под мобильные устройства
опциональная, будет плюсом, если реализуете.
Если сложно придумать интерфейс - вдохновляйтесь сайтом TMDB https://www.themoviedb.org/.
Постарайтесь реализовать свои идеи и создать хороший продукт. Хорошего вам кодинга!