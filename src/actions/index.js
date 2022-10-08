export const LoginStart = (restaurant) => ({
    type : "LOGIN_START"
})

export const LoginSuccess = (restaurant) => ({
    type: "LOGIN_SUCCESS",
    payload: restaurant
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})



////////////////



// export const CustomerLoginStart = (customer) => ({
//     type : "CUSTOMER_LOGIN_START"
// })

// export const CustomerLoginSuccess = (customer) => ({
//     type: "CUSTOMER_LOGIN_SUCCESS",
//     payload: customer
// })

// export const CustomerLoginFailure = () => ({
//     type: "CUSTOMER_LOGIN_FAILURE"
// })

// export const CustomerLogout = () => ({
//     type: "CUSTOMER_LOGOUT"
// })

