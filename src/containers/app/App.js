import React, {Component} from 'react';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

class App extends Component{
    state = {
        input: ''
    };

    handleOnClick = () =>{
        console.log('Button was clicked')
    };
    handleChange = () =>{
        console.log('Input Was Changed', event.target.value);
    };
    
    render() {
        return (
            <div>
                <List todoList = {[]} />
                <Input onChange = {event => this.handleOnChange(event)} />
                <Button onClick={()=> this.handleOnClick()}>
                Adicionar
                </Button>
            </div>
        );
    }
}

export default App;