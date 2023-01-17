import {ImageTabsActionTypes} from "./ImageTabsActionTypes";

export const initialTabState = {
    selectedIndex: '1'
}

export const ImageTabsReducer = (state, action) => {
    switch (action.type) {
        case ImageTabsActionTypes.RESET_TABS: {
            return initialTabState;
        }
        case ImageTabsActionTypes.SELECT_TAB: {
            return {
                selectedIndex: action.payload.selectedIndex
            };
        }
        default: {
            return state;
        }
    }
}
