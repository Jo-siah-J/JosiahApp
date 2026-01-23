
function List(props){

const category = props.category;

const itemList = props.items;

 //-----Props(Reusable) List 
 const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.calories}</b>
    </li>
  )); 


/*---- Personal list    

functioin List(){

const fruits = [
    {id: 1, name: "apple",  calories: 95 }, 
    {id: 2, name: "orange", calories: 45 }, 
    {id: 3, name: "cherry", calories: 100 }, 
    {id: 4, name: "melon",  calories: 185 }, 
    {id: 5, name: "banana", calories: 105 }, 
]; */

/*sort method 
    fruits.sort();    
*/

//fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort Alphabetical
//fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphbetical
//fruits.sort((a,b) => a.calories - b.calories); // Numeric/ Asending
//fruits.sort((a,b) => b.calories - a.calories); // Reverse Numeric/ Desending

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Low Cal Fruits
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // High Cal Fruits

/* --- Filter List Items
 const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;<b>{fruit.calories}</b>
    </li>
  )); */


/*----- Filter HighCalFruits
const listItems = highCalFruits.map((highCalFruit) => (
    <li key={highCalFruit.id}>
      {highCalFruit.name}:&nbsp;<b>{highCalFruit.calories}</b>
    </li>
  ));
 /*<ol> */ 
    return( <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>); 

/*<ul> 
   return (<ul>{listItems}</ul>); */

List.defaultProps = {
    category: "Category",
    items: [],
}

}
export default List 