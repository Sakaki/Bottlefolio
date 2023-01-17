import {ImageTabsActionTypes} from "./ImageTabsActionTypes";

export const ImageTabsActions = {
    selectTab(selectedIndex) {
        return {
            type: ImageTabsActionTypes.SELECT_TAB,
            payload: {
                selectedIndex: selectedIndex
            }
        }
    }
};
