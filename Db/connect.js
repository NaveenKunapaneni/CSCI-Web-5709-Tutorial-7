const mongodb = require('mongoose')

const connectDB = (url) => {

    return mongodb
            .connect(url, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true
            })
}

module.exports = connectDB