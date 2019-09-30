import * as types from './mutations-type'  //把mutations-type中所有export的内容组成一个对象types返回
export default ({
    [types.GET_ADDRESS]: (state, { address }) => {
        state.address = address;
    },
    [types.GET_FOODTYPES]: (state, { foodtypes }) => {
        state.foodtypes = foodtypes;
    },
    [types.GET_SHOPS]: (state, { shops }) => {
        state.shops = shops;
    }
})