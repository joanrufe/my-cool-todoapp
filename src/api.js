const mockTodos = [
    {
        catId: 1,
        title: 'Shopping list',
        items: [
            {
                id: 1,
                text: 'Tomato',
                checked: false
            },
            {
                id: 2,
                text: 'Milk',
                checked: true
            }
        ]
    },
    {
        catId: 2,
        title: 'Things to do',
        items: [
            {
                id: 1,
                text: 'Tomato',
                checked: false
            },
            {
                id: 2,
                text: 'Milk',
                checked: false
            }
        ]
    }
]

export default {
    getAll: () => mockTodos,
    getCategories: () => mockTodos.map(cat => {cat.catId, cat.title}),
    getCategoryById: id => mockTodos[id]
}