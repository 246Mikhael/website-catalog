let categsImages = [
    "../images/icons/news.png",
    "../images/icons/sport.png",
    "../images/icons/hobby.png",
    "../images/icons/learning.png"
  ];
  
  let subcategsImages = {
    1: [
      "../images/icons/politic.png",
      "../images/icons/criminal.png",
      "../images/icons/economic.png",
      "../images/icons/technology.png"
    ],
    2: [
      "../images/icons/football.png",
      "../images/icons/ice_hockey.png",
      "../images/icons/basketball.png",
      "../images/icons/fighting.png"
    ],
    3: [
      "../images/icons/computer_games.png",
      "../images/icons/table_games.png",
      "../images/icons/creativity.png",
      "../images/icons/traveling.png"
    ],
    4: [
      "../images/icons/programming.png",
      "../images/icons/school.png",
      "../images/icons/music.png",
      "../images/icons/drawing.png"
    ]
  };

  let categories = [
    { name:'news',
      values: [ 
        'политика', 
        'криминал', 
        'экономика', 
        'технологии' 
      ] 
    },
    { name:'sport',
      values: [ 
        'футбол', 
        'хоккей', 
        'баскетбол', 
        'боевые искусства',
        'другое' 
      ] 
    },
    { name:'hobby',
      values: [ 
        'компьютерные игры', 
        'настольные игры', 
        'творчество', 
        'путешествия' 
      ] 
    },
    { name:'learning',
      values: [ 
        'кодинг', 
        'школьная программа', 
        'музыка', 
        'рисование' 
      ] 
    }
];

export { categsImages, subcategsImages, categories }