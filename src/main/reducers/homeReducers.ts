import {handleActions} from 'redux-actions';
import homeTypes from '../types/homeTypes';
import {IHomeModel} from "../interface/homeInterface";

const defaultStatus: IHomeModel = {
    title: '之前的首页标题',
}
export const home = handleActions<IHomeModel>({
    [homeTypes.HOME_LIST]: (state: any, action: any) => {
        return {
            title: '之前的首页标题',
        }
    }
}, defaultStatus);
