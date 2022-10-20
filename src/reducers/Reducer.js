const initialState = {
    content:[]
};

function Reducer (state=initialState,action) {
    switch(action.type){
        case "Cards":
            return (
                {
                    ...state,content:JSON.parse(localStorage.getItem("oct-task-1"))
                }
            );
        case "Props":
            return (
                {
                    ...state,type:action.productType,options:action.options,FirstProductname:action.FirstProductname
                }
            );
        default:
            return state;
    }
};

export default Reducer;