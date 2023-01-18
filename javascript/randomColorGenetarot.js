function randomColorGenerator() {
    randomNumber = Math.floor(Math.random() * (11 - 1) ) + 1;
    console.log(randomNumber);

    switch (randomNumber) {
        case 1: return 'cyan'
        break;
        case 2: return 'red'
        break;
        case 3: return 'green'
        break;
        case 4: return 'blue'
        break;
        case 5: return 'yellow'
        break;
        case 6: return 'orange'
        break;
        case 7: return 'brown'
        break;
        case 8: return 'pink'
        break;
        case 9: return 'purple'
        break;
        case 10: return 'lime'
        break;
    }
}