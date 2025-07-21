import './App.css'
import list from '../public/list.js'

function App() {
  const categories = [...new Set(list.map((list) => list.category))];
  return (
    <>
      <div className="App">
        <h1>Grouped ToDo List</h1>
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            {list
              .filter((list) => list.category === category)
              .map((list) => (
                <div key={list.id} className="todo-item">
                  <p>
                    {list.completed ? '✅' : '❌'} {list.title}
                  </p>
                  <p className="todo-description">{list.description}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App