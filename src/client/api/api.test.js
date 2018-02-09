import api from './api'

describe('Api', () => {
  it('Fetch items from the server', () => {
    expect.assertions(1)
    return api.getAll()
      .then(d => {
        const isArray = d instanceof Array
        expect(isArray).toBe(true)
      })
  })
  it('Post item to the server', () => {
    expect.assertions(2)
    return api.postItem(mockItem)
      .then(d => {
        expect(typeof d).not.toBe("undefined")
        expect(d.length).not.toBe("1")
      })
  })
  it('Delete item to the server', () => {
    expect.assertions(1)
    return api.findOne().then(item => api.deleteItem(item.id))
      .then(d => expect(d.count).toBe(1))
  })
  it('Create Item, Update it (toggled) and Delete it', () => {
    expect.assertions(2)
    return api.postItem(mockItem)
      .then(item => {
        return api.updateItem({
          ...item,
          checked: true
        }).then(d => {
          expect(d.checked).toBe(true)
          return d
        }).then(d => {
          return api.deleteItem(d.id)
            .then(r => {
              expect(r.count).toBe(1)
            })
        })
      })
  })
})

const mockItem = {
  "text": "Mock Item",
  "created": "2018-02-01T17:43:23.624Z",
  "checked": false
}