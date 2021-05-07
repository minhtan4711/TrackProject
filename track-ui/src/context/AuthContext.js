import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api requeset to sign up with that email and password


        // if we signed up, modify our state, and say that we are authenticated

        // if sign up fails, return an error somewhere
    }
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handle success by handling state
        // handle failure by showing error message
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow signout
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
)