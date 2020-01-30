import React, { Component, useEffect, useState } from 'react';
const io = require('socket.io-client');
import api from '../services/api';

const Context = React.createContext();

const socket = io('http://192.168.1.20:5000')

 const Provider = (props) => {

    const [currentUser, setCurrentUser] = useState(null);

    //New auction values
    const [imageProduct, setImageProduct] = useState(null);

    const [productTitle, setProductTitle] = useState("");

    const [productCondition, setProductCondition] = useState("");

    const [productDescript, setProductDescript] = useState("");

    const [startPrice, setStartPrice] = useState(0);

    const [reserve, setReserve] = useState(0);

    const [buyNow, setBuyNow] = useState(0)

    const [limitDay, setLimitDay] = useState(1);

    // CONDITIONALS WHEN MAKING NEW AUCTIONS
    const [isBuyCheck, setIsBuyCheck] = useState(false);

    const [isReserve, setIsReserve] = useState(false);



    useEffect(() => {
        socket.emit('init_communication');
           
    api.get('/loggedin', {withCredentials: true})
    .then(response => {
        if(response.data){
            // this.setState({user: response.data})
            setCurrentUser(response.data);
        }

    }).catch(err => {
        console.error(err);
    });
    }, []) 
    // socket.on('reload', reload)

const updatePicture = (theImg, props) => {
    console.log("THIS IS PICTURE");
    console.log(theImg.uri);
    setImageProduct(theImg);
    props.navigation.navigate('Create');
}

const logIn = ({email, password}) => {

    api.post('/login', {email, password}, {withCredentials: true})
    .then(response => {
        console.log(response)
        if(response.data.message);
        else {
            window.location = '/dashboard'
        }
        setCurrentUser(response.data.user)
    }).catch((err) => {console.log(`An unexpected error ocurred while login ${err}`);
})

}

const signUp = ({firstName, lastName, email, password}) => {

    api.post('/signup', {firstName, lastName, email, password})
    .then(response => {
        
        if(response.data.message) setMessage(response.data.message);

        else if(response.data.done) {
             alert("Your account was successfully created!"); 
             window.location = '/login';}

        else { }
    }).catch(err => console.error(err));

}


const logOut = () => {
    api.delete('/logout', {withCredentials: true})
    .then(response => {
    }).catch(err => console.error(`An error happened while trying to log out`));
   
}

const newProduct = async () => {

    const uploadData = new FormData();
    const pictureName = imageProduct.uri.split('/')
    const theName = pictureName[pictureName.length - 1];
    await uploadData.append('imageUrl', {
        uri: imageProduct.uri,
        type: imageProduct.type,
        name: theName
    });

    api.post('/uploadImg', uploadData, {withCredentials: true})
    .then(response => {

        const {imageUrl, publicId, _id} = response.data
     
    const data = {
        title: productTitle,
        description: productDescript,
        productCondition: productCondition,
        startingPrice: startPrice,
        reserve: reserve,
        buyNow: buyNow,
        duration: limitDay,
        isBuyCheck: isBuyCheck,
        isReserve: isReserve,
        imageUrl: imageUrl,
        publicId: publicId,
        imageId: _id,
    }

    return api.post('/newAuction', data , { withCredentials: true })
   
    }).then(response => {
        if(response.data) {
            console.log("THIS WAS RETURNED");
            console.log(response.data);
            return response.data;
        }

    }).catch(err => {console.log(err); })


}

const handler = (data, type, props) => {
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

const data = {
    currentUser,
    logIn,
    imageProduct,
    setImageProduct,
    updatePicture,
    productCondition,
    setProductCondition,
    productTitle, 
    setProductTitle,
    productDescript,
    setProductDescript,
    startPrice,
    setStartPrice,
    reserve,
    setReserve,
    limitDay,
    setLimitDay,
    buyNow,
    setBuyNow,
    isBuyCheck,
    setIsBuyCheck,
    isReserve,
    setIsReserve,
    newProduct
}

// const reload = () => socket.emit('init_communication')

    return (<Context.Provider value={data}>{props.children}</Context.Provider>);


}

export const ContextConsumer = Context.Consumer

export { Context , Provider }

// const uploadNewImage = async (e) => {
//     e.preventDefault();
//     console.log(imageUpload)
//     const time = new Date();
//     console.log(time)
//     const imageName = `${currentUser.firstName}${imageUpload.name}`
//     imageUpload.owner = imageName;
//     const uploadData = new FormData();
//     await uploadData.append("imageUrl", imageUpload)
//     console.log(uploadData)
    // api.post('/uploadNewImg', uploadData, {withCredentials: true})
    // .then(response => {
    //     console.log(response)
    // }).catch(err => console.error(err))
//}
