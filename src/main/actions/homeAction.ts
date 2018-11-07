import {createAction} from 'redux-actions';
import homeTypes from "../types/homeTypes";
import {IHomeModel} from "../interface/homeInterface";

export const HomeList = createAction<IHomeModel, string>(homeTypes.HOME_LIST, () => {
    return {
        title: '首页',
        description: '首页是我第一个的页面，加油啊！'
    }
})