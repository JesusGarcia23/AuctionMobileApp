import React, { Component } from 'react';
const io = require('socket.io-client');
import api from '../services/api';

const Context = React.createContext();

const socket = io('http://192.168.1.75:5000')

 class Provider extends Component {
    state = {
        user: null,
        auctions: [],
        notifications: [],
        auctionTitle: '',
        auctionStartingPrice: '',
        imageProduct: null,
        bid: '',
        auctionDescription: '',

        logIn: this.logIn
    }

componentDidMount(){
    socket.emit('init_communication');
    api.get('/loggedin', {withCredentials: true})
    .then(response => {
        if(response.data){
            this.setState({user: response.data})
        }

    }).catch(err => {
        console.error(err);
    });
    // socket.on('reload', reload)
};

logIn({email, password}){

    api.post('/login', {email, password}, {withCredentials: true})
    .then(response => {
        console.log(response)
        if(response.data.message);
        else {
            window.location = '/dashboard'
        }
        this.setState({user: response.data.user})
    }).catch((err) => {console.log(`An unexpected error ocurred while login ${err}`);
})

}

signUp({firstName, lastName, email, password}){

    api.post('/signup', {firstName, lastName, email, password})
    .then(response => {
        
        if(response.data.message) setMessage(response.data.message);

        else if(response.data.done) {
             alert("Your account was successfully created!"); 
             window.location = '/login';}

        else { }
    }).catch(err => console.error(err));

}


logOut(){
    api.delete('/logout', {withCredentials: true})
    .then(response => {
    }).catch(err => console.error(`An error happened while trying to log out`));
   
}

newProduct({description}){
    // api.post('/newBonsai', {description})
    // .then(response => {
    //     console.log(response);
    // }).catch(err => console.error(err));
}

async uploadNewImage(e){
    e.preventDefault();
    console.log(imageUpload)
    const time = new Date();
    console.log(time)
    const imageName = `${currentUser.firstName}${imageUpload.name}`
    imageUpload.owner = imageName;
    const uploadData = new FormData();
    await uploadData.append("imageUrl", imageUpload)
    console.log(uploadData)
    // api.post('/uploadNewImg', uploadData, {withCredentials: true})
    // .then(response => {
    //     console.log(response)
    // }).catch(err => console.error(err))
}

handler(data, type, props){
    console.log(type)
    switch(type){
        case "login": {
            logIn(data);
            break;
        }

        case "signup": {
            signUp(data);
            break;
        }

        case "newProduct": {
            newProduct(data);
            break;
        }
        default:
            return null;   
    }
}

// const reload = () => socket.emit('init_communication')
render(){
    return (<Context.Provider value={this.state}>{this.props.children}</Context.Provider>);
}

}

export const ContextConsumer = Context.Consumer

export { Context , Provider }

