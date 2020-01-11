const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/auctionapp`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(x => {
    console.log(`Connected to Mongo! Database name "${x.connections[0].name}"`)
})
.catch(err => {
    console.error('Error connecting to mongo', err)
})

//     baseURL: 'http://192.168.1.75:19000:5000'
//