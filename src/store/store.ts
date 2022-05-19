import {createSlice, configureStore, createAsyncThunk, combineReducers} from '@reduxjs/toolkit'
import {createNavigationContainerRef} from '@react-navigation/native';

const graphqlAPI = (query, variables, accessToken) => fetch("https://api-dev.foodstyles.com/graphql", {
	method: "POST",
	body: JSON.stringify({query, variables}),
	headers: {"Authorization": `Bearer ${accessToken}`, 'Content-Type': 'application/json',}
});

export const signUp = createAsyncThunk("signUpWithEmail", async ({name, email, password}) => {
		const response = await graphqlAPI(
			`
        mutation signUpWithEmail($name: NonEmptyString!, $email: EmailAddress!, $password: Password!) {
        signUpWithEmail(name: $name, email: $email, password: $password){
   user {
     id,
     email,
     name,
     facebookId,
     googleId,
     appleId,
   },
   accessToken,
   refreshToken
 }}`, {name, email, password}
		)

	const data = await response.json();

		return data;
	}
);

export const logIn = createAsyncThunk("logIn", async ({email, password}) => {
		const response = await graphqlAPI(
			`
        mutation loginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
        loginWithEmail(email: $email, password: $password){
   user {
     id,
     email,
     name,
     facebookId,
     googleId,
     appleId,
   },
   accessToken,
   refreshToken
 }}`, {email, password}
		)

	const data = await response.json();

		return data;
	}
);

export const updateUser = createAsyncThunk("updateUser", async ({name, email}, {getState}) => {

	const accessToken = getState().userSlice.accessToken;
	console.log('accessToken', accessToken)
		const response = await graphqlAPI(
			`
        mutation updateUser($email: EmailAddress!, $name: NonEmptyString!) {
        updateUser(email: $email, name: $name){
       id
       name
       email
       facebookId
       googleId
       appleId
 }}`, {email, name}, accessToken
		)

	const data = await response.json();

		return data;
	}
);

export const navigationRef = createNavigationContainerRef();

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		name: '',
		email: '',
		accessToken: '',
		hasError: false,
		signedUp: false
	},
	reducers: {
		clearUserData: state => {
			state.name = '';
			state.email = '';
		},
		setUnsigned: state => {
			state.signedUp = false;
		}
	},
	extraReducers: {
		[signUp.fulfilled]: (state, action) => {
			if (action.payload.errors) {
				console.error('Failed to signIn')
			} else {
				state.hasError = false;
				state.signedUp = true;
			}
		},
		[logIn.fulfilled]: (state, action) => {
			if (action.payload.errors) {
				state.hasError = true;
			} else {
				const {user} = action.payload.data.loginWithEmail;
				state.name = user.name;
				state.email = user.email;
				state.accessToken = action.payload.data.loginWithEmail.accessToken;
				state.hasError = false;
			}
		},
		[updateUser.fulfilled]: (state, action) => {
			if (action.payload.errors) {
				console.error('Failed to Update')
			} else {
				const {user} = action.payload.data.updateUser;
				state.name = user.name;
				state.email = user.email;
			}
		},
	},
})

export const { clearUserData, setUnsigned } = userSlice.actions;

export const store = configureStore({
	reducer: combineReducers({userSlice: userSlice.reducer})
})