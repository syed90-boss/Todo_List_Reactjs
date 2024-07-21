import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(
  [
    {
      id : 1,
      checked : true,
      item : 'play badminton'
    },{
      id : 2,
      checked : false,
      item : 'Get job'
    },{
      id : 3,
      checked : true,
      item : 'Read books'
    }
  ]);
  //useState(JSON.parse(localStorage.getItem("todo-list")));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(false);
    },2000)
  }, [])


const handleCheck = (id) => {
    const listItems = items.map((item) => {
        return (item.id === id)? { ...item, checked: !item.checked} : item;
    })
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => {
        return (item.id !== id)
    })
    setItems(listItems);
    localStorage.setItem("todo-list", JSON.stringify(listItems));
}

const addItem = (item) => {
  const id = (items.length)?(items[items.length - 1]).id + 1: 1;
  const addNewItem = {id:id, checked:false, item:item};
  const listItems = [...items, addNewItem ]
  setItems(listItems);
  localStorage.setItem("todo-list", JSON.stringify(listItems));
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('');
}

  return (
    <div className="App">
      <Header  title="Todo List" />

      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <SearchItem 
      search={search}
      setSearch={setSearch}
      />

      <main>
      {isLoading && <p style={{marginTop: '12rem'}}>Loading items...</p>}
      {!isLoading  && <Content
      items={items.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      isLoading={isLoading}
      />}
      </main>
      

      <Footer 
      length={items.length}/>
    </div>
  );
}

export default App;


// {
//   id : 1,
//   checked : true,
//   item : 'play cricket'
// },{
//   id : 2,
//   checked : false,
//   item : 'Read books'
// },{
//   id : 3,
//   checked : true,
//   item : 'Get job'
// }

//"homepage": "https://syed90-boss.github.io/Todo_List_Reactjs",
//"predeploy": "npm run build",
//"deploy": "gh-pages -d build",