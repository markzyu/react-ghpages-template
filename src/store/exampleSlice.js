import { createSlice } from "@reduxjs/toolkit";
import { getAgreementRead } from "../localStorage";

const initialState = {
    hasAgreed: getAgreementRead(),
    showError: false,
    errMessage: null,
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setAgreementUiStatus(state, action) {
            state.hasAgreed = action.payload;
        },
        dismissError(state) {
            state.errMessage = null;
            state.showError = false;
        },
        showError(state, action) {
            state.errMessage = action.payload;
            state.showError = true;
        },
    }
});

export const { setAgreementUiStatus, dismissError, showError } = exampleSlice.actions;
export default exampleSlice.reducer;