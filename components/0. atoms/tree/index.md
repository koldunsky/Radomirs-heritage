# Раскрывающийся список

## Параметры

### node *array*

Дерево

```javascript
[
  { name: 'Главное' },                // Обычный элемент
  { name: 'Наборы для новичков' },
  {
    name: 'Пушки',                    // Элемент с детьми
    children: [                       // Список детей
      { name: 'Пистолеты' },
      { name: 'Винтовки' }
    ]
  }
]
```

### selectNode *array*

Обработка нажатия на нод