import React, {  Component } from "react";
const MyContext = React.createContext();
class MyProvider extends Component {
    state = {
        produts: [
            {id: 1, product: 'APPEL', number: 10 },
            {id: 2, product: 'SAMSUNG', number: 15},
            {id: 3, product: 'ONEPLUS', number: 5},
        ],
        isActive: true
    }  
     toggel=()=>{
             this.setState({isActive:!this.state.isActive})
    }
    update = (e) => {
        let updateProducts = this.state.produts.map(el => {
            console.log(el);
            if (el.id === e.id) {
                return {
                    ...el, number: el.number + 1,
                }
            }
            return el
          
        })
        this.setState({produts: updateProducts})
    }
    dec = (e) => {
        let dec = this.state.produts.map(el => {
            if (el.id === e.id && el.number > 0) {
                return {
                    ...el, number: el.number - 1
                 }
            }
            return el
        })
         this.setState({produts:dec})
       
   }
    render() {
 
        return (
            <MyContext.Provider value={{ state: this.state, toggel: this.toggel ,update:this.update,dec:this.dec}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
    
}

export { MyContext, MyProvider };

// let updatedList = state.todos.map(item => 
// {
//     if (item.id == id) {
//         return {
//             ...item,
//             done: !item.done
//         };
//     }
//     return item;
// });

// this.setState({
//     todos: updatedList
// });
