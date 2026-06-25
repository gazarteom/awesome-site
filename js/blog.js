$(document).ready(function() {

    const jsonData = `[
        {
            "image": "1.jpg",
            "title": "Как мы запустили новый проект в 2026 году",
            "text": "В этой статье мы расскажем, как команда AWESOME запустила крупный проект и какие технологии использовали.",
            "date": "15 июня 2026",
            "tags": ["проекты", "новости", "команда"]
        },
        {
            "image": "portfolio/3.jpg",
            "title": "Тренды веб-дизайна 2026 года",
            "text": "Разбираем главные тренды в веб-дизайне этого года: минимализм, тёмные темы и микровзаимодействия.",
            "date": "2 июня 2026",
            "tags": ["дизайн", "тренды", "2026"]
        },
        {
            "image": "portfolio/5.jpg",
            "title": "Почему важно делать адаптивную вёрстку",
            "text": "В 2026 году более 70% трафика приходит с мобильных устройств. Рассказываем, почему адаптивность — это необходимость.",
            "date": "20 мая 2026",
            "tags": ["вёрстка", "адаптив", "мобильные"]
        },
        {
            "image": "portfolio/2.jpg",
            "title": "Как повысить скорость загрузки сайта",
            "text": "Практические советы по оптимизации скорости загрузки сайта.",
            "date": "8 мая 2026",
            "tags": ["оптимизация", "скорость", "технологии"]
        }
    ]`;

    const data = JSON.parse(jsonData);
    drawCards(data);
    initSearch(data);
    initTagsHandler(data);

    function drawCards(data) {
        $('.blog-container').html('');

        data.forEach((item) => {
            let card = $(`
                <section class="blog-card">
                    <div class="blog-header">
                        <div class="blog-cover" style="background-image: url('img/${item.image}')"></div>
                    </div>
                    <div class="blog-body">
                        <div class="blog-title"><h2>${item.title}</h2></div>
                        <div class="blog-text"><p>${item.text}</p></div>
                        <div class="blog-tags"><ul></ul></div>
                        <div class="blog-footer">
                            <div class="blog-published-date">${item.date}</div>
                        </div>
                    </div>
                </section>
            `);

            let tagsHtml = '';
            item.tags.forEach(tag => {
                tagsHtml += `<li><a href="#" class="blog-tag">${tag}</a></li>`;
            });
            card.find('.blog-tags ul').html(tagsHtml);

            $('.blog-container').append(card);
        });

        initTagsHandler(data);
    }

    function initSearch(data) {
        $('.search-do').on('click', function() {
            const searchValue = $('.search-text').val().toLowerCase().trim();
            if (!searchValue) {
                drawCards(data);
                return;
            }
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(searchValue) ||
                item.text.toLowerCase().includes(searchValue) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchValue))
            );
            drawCards(filtered);
        });
    }

    function initTagsHandler(data) {
        $(document).off('click', '.blog-tag');
        $(document).on('click', '.blog-tag', function(e) {
            e.preventDefault();
            const tagValue = $(this).text().toLowerCase();
            const filtered = data.filter(item =>
                item.tags.some(tag => tag.toLowerCase() === tagValue)
            );
            drawCards(filtered);
        });
    }
});
