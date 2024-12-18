const cardWrapper = document.querySelector(".content-cards");

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/film.png' 
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/film.png' 
    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/film.png' 
    },
];

const render = () => {
    cardWrapper.innerHTML = ''

    films.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <div>test</div>
            `)
        
    })
}

render ()