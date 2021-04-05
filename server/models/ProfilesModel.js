const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    topics: {
        type: Array,
        default: [],
    }
})

// const testReq = {
//   username: 'JasonLee4206969',
//   password: 'test',
//   topics: [
//     {'Oauth': {'url' : 'description'}},
//     {'Recursion': {'url' : 'description'}},
//     {'Closure': {'url' : 'description'}},
//   ]
// }


module.exports = mongoose.model("Profiles", ProfileSchema)