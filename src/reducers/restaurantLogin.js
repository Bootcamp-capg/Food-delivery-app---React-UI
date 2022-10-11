const initialState = {
    restaurant: JSON.parse(localStorage.getItem("restaurant")) || null,
    isFetching: false,
    error: false
}



const customerInitialState = {
    customer: JSON.parse(localStorage.getItem("customer")) || null,
    isFetching: false,
    error: false
}

const Reducer = (state = initialState, action) => {
    
    switch ( action.type ) 
    {
        case "LOGIN_START":
            return {
                restaurant: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                restaurant: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                restaurant: null,
                isFetching: false,
                error: true
            }

        case "LOGOUT":
            return {
                restaurant: null,
                isFetching: false,
                error: false
            }
        
        default :
            return state;
    }
    
}


/////////////

 export const CustomerReducer = (state = customerInitialState, action) => {
    
    switch ( action.type ) 
    {
        case "CUSTOMER_LOGIN_START":
            return {
                customer: null,
                isFetching: true,
                error: false
            }
        case "CUSTOMER_LOGIN_SUCCESS":
            return {
                customer: action.payload,
                isFetching: false,
                error: false
            }
        case "CUSTOMER_LOGIN_FAILURE":
            return {
                customer: null,
                isFetching: false,
                error: true
            }

        case "CUSTOMER_LOGOUT":
            return {
                customer: null,
                isFetching: false,
                error: false
            }
        
        default :
            return state;
    }
    
}


export default Reducer;