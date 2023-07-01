import {createStore} from 'redux'

const dummyReducer=()=>{
    return 1000
}
// you can use like this 
// const store=createStore(()=>{
//     return 1000
// })

// or you can use like this
const store=createStore(dummyReducer)

export default store