function createMatch(team1, hour, team2) {
    return `
        <li>
            <img src="./img/${team1}-flag.svg" alt="${team1}'s flag." />
            <strong>${hour}</strong>
            <img src="./img/${team2}-flag.svg" alt="${team2}'s flag." />
        </li>
    `
}

let delay = 0;

function createCard(date, day, match) {
    delay = delay + 0.8;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${match}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('24 Nov', 'thursday',
        createMatch('switzerland', '07:00', 'cameroon') +
        createMatch('brazil', '16:00', 'serbia')
    ) +
    createCard('28 Nov', 'monday',
        createMatch('cameroon', '07:00', 'serbia') +
        createMatch('brazil', '13:00', 'switzerland')
    ) +
    createCard('02 Dec', 'friday',
        createMatch('serbia', '16:00', 'switzerland') +
        createMatch('cameroon', '16:00', 'brazil')
    ) 