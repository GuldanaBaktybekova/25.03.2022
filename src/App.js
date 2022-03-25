import ArticleList from './components/ArticleList';

function App() {
  const veggies = ["Carrot", "Potato", "Strawberry"];
  const fruits = [
    {name: "Mango", color: "Yellow"},
    {name: "Apple", color: "Green"},
    {name: "Cherry", color: "Red"},
  ];
  const veggiesList = veggies.map((veggie) =>{
    return<li>{veggie}</li>
  });
  const fruitsList = fruits.map((fruit) => (
    <li>
      {fruit.name}: {fruit.color}
    </li>
  ));

  const articles = [
    {title: "This is an example article", url: "#", teaser: "lorem"},
    {title: "Another article as an example", url: "#", teaser: "lorem"},
    {title: "Last example article", url: "#", teaser: "lorem"},
  ];

  
  
  return (
    <div className="App">
      <h1>Hello world</h1>
     <ul>
     {veggiesList}
     </ul>
     <ol>{veggiesList}</ol>
     <ul>
     {fruitsList}
     </ul>

     <ArticleList src={articles}/>
 
    </div>
  );
}

export default App;
