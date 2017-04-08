export const testAction = (data) => {
    return {
        type: 'testAction',
        // testValue: [4, 3, 2, 1]
        testValue: data
    }
}



export const login = (username, password, pwdIsVisible) => {
    return {
        type: 'login',
        username,
        pwdIsVisible
    }
}