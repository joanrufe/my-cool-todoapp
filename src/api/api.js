import { mockTodos } from './mockdata'

export default {
    getAll: () => mockTodos,
    getCategoryById: id => mockTodos[id]
}