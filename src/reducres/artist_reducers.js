export default function(state={},action){
    switch(action.type){
        case 'Get_Artists_All':
            return {...state,artistList:action.payload}
        case 'Get_Artists':
            return {...state,artistList:action.payload}
        default:
            return state;
    }
}