// src/redux/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInfo, IdTokenClaims } from '@azure/msal-browser';
import { updateAuthState, AuthPayload, AuthStatus } from './authActions';

interface IAuthState {
    isAuthenticated: boolean;
    user: AccountInfo | null;
    token: string | null;
    claims: IdTokenClaims | null;
    error: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    claims: null,
    error: null,
};

/**
 * Represents the authentication slice of the Redux store.
 */
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateAuthState, (state, action: PayloadAction<AuthPayload>) => {
            if (action.payload.status === AuthStatus.SUCCESS) {
                state.isAuthenticated = true;
                state.user = action.payload.user || null;
                state.token = action.payload.token || null;
                state.claims = action.payload.claims || null;
                state.error = null;
            } else if (action.payload.status === AuthStatus.FAILURE) {
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
                state.claims = null;
                state.error = action.payload.error || null;
            }
        });
    },
});

export default authSlice.reducer;