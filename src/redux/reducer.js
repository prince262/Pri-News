const intialState = {
    data: [],
    error: '',

}
export const reducer = (state = intialState, action) => {
    // console.log('action',action.payload)
    switch (action.type) {
        case 'LOAD': return {
            ...state,
            loading: true
        }
        case 'SUCSEES':

            return {

                data: action.d==1?action.payload:action.page == 1 ? action.payload : [...state.data, ...action.payload],
                loading: false,



                //data: action.payload
            }


        case 'ERROR':

            return {
                ...state,
                error: action.payload,
                loading: false

                //data: action.payload
            }



        default: return state;
    }

}