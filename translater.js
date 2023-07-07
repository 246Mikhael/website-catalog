

let words = {
    'news': 'новости',
    'sport': 'спорт',
    'hobby': 'хобби',
    'learning': 'обучение',
    'politic': 'политика',
    'economic': 'экономика',
    'technology': 'технологии',
    'football': 'футбол',
    'ice_hockey': 'хоккей',
    'basketball': 'баскетбол',
    'fighting': 'боевые искусства',
    'another': 'другое',
    'computer_games': 'компьютерные игры',
    'table_games': 'настольные игры',
    'creativity': 'творчество',
    'traveling': 'путешествия',
    'programming': 'программирование',
    'school': 'школьная программа',
    'music': 'музыка',
    'drawing': 'рисование',
}

export function translater (word){
    if(/[a-zA-Z]/.test(word)){
        word = words.word
    } else {
        word = Object.keys(words).find(key => words[key] === word);
    }
    return word;
}