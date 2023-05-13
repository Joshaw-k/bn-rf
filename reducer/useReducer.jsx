export const initialState = {
    icon:'',
    title:''
}

export const reducer = (state,action) => {
    if(action.type === "CONNECT_WALLET"){
        return {...state,icon:action.payload.icon,title:action.payload.title}
    }
}