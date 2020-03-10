import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
let bookList = [
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

// class FavoriteColorForm extends React.Component{
//     state ={value:''};

//     newColor = e => 
//         this.setState({value: e.target.value})

//     submit = e => {
//         console.log(`New Color: + ${this.state.value}`)
//         e.preventDefault()
//     }
    
//     render(){
//         return(
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input type="color" onChange={this.newColor}/>                    
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// } 

// Library.propTypes = {
//     books: PropsType.array
// }

// Book.propTypes = {
//     title: PropsType.string,
//     author: PropsType.string,
//     pages: PropsType.number,
//     freeBookmark: PropsType.bool
// }

ReactDOM.render(
    //<FavoriteColorForm />
    <Library books={bookList}/>,
    document.getElementById("root")
);


