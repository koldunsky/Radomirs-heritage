# gameShowCases

ММО-шная плитка на главной Фогейма

## Параметры

### items *array*

Массив с играми

```javascript
[
  {
    id: 'kuf-ru',                                                                       // id игры
    coverUrl: {
      large: '//ftp.inn.eu/frontend/frontend/mmo_covers/KUF_large.jpg',                 // url большой картинки
      small: '//ftp.inn.eu/frontend/frontend/mmo_covers/KUF_small.jpg'                  // url маленькой картинки
    },
    logoUrl: [{
      resolution: '1x',                                                                 // Логотип игры в @1x
      path: '//ftp.inn.eu/frontend/frontend/mmo_logos/KUF_small.png'
    }, {
      resolution: '2x',                                                                 // Логотип игры в @2x
      path: '//ftp.inn.eu/frontend/frontend/mmo_logos/KUF.png'
    }],
    title: 'Kingdom under Fire II',                                                     // Название игры
    description: 'Уникальный гибрид MMORPG и&nbsp;стратегии в&nbsp;стиле даркфэнтези',  // Описание игры
    tags: ['Новинка'],                                                                  // Теги
    path: '/kuf2'                                                                       // url игры
  }
]
```

### linkComponent *ComponentClass*
