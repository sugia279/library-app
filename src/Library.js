import React from 'react';
import PropsType from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'
class Library extends React.Component
{
    //Using setState
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         open: false
    //     }
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    // }
    constructor(props){
        super(props);
        this.mounted = false;
        this.updatedNumber = 0;
    }
    
    state = {        
        open:true,
        freeBookmark: false,
        hiring: false,
        data: [],
        loading: false
    }
    componentDidMount(){
        console.log("The component is now mounted.")        
        this.mounted = true;
        this.setState({loading:true});
        //Using fetch to update UI
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }
    
    componentDidUpdate(){
        console.log("The component just updated.")        
        this.updatedNumber = this.updatedNumber + 1;
    }

    //Using setState
    // Arrow function will automatically bind this inside of the context of this
    toggleOpenClosed = () =>    {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    
    render(){
        const books = this.props.books;
        //Pass state as props
        //freeBookmark = {this.state.freeBookmark}/>
        //Condition rendering
        //{this.state.hiring ? <Hiring />: <NotHiring />}
        return(
            <div>
                {this.state.hiring ? <Hiring />: <NotHiring />}
                <h1>The Library is {this.state.open? 'open': 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Chance</button>
                <h1>React lifecycle methos diagram http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</h1>
                <p>Mounted variable: {this.mounted? 'yes!': 'no!'}</p>
                <p>Updated Number variable: {this.updatedNumber}</p>

                <p>Mounted by loading in state: {this.state.loading? 'yes!': 'no!'}</p>
                
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return(
                                <div key={product.id}>
                                    <h3>Library product of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}/>
                                </div>
                            )
                        })}
                    </div>
                }
                {books.map(
                    (book, i) => 
                    <Book 
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark = {this.state.freeBookmark}/>
                )}
            </div>
        )
    }    
}


Library.propTypes = {
    books: PropsType.array
}

Book.propTypes = {
    title: PropsType.string,
    author: PropsType.string,
    pages: PropsType.number,
    freeBookmark: PropsType.bool
}

export default Library