import  {reqAddress,reqFoodTypes,reqShopList} from '../api/index';
import { GET_ADDRESS ,GET_FOODTYPES,GET_SHOOPS} from './mutations-types';

export default({
    async  getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude;
        const result=await reqAddress(geohash);
        commit('GET_ADDRESS',{address:result.data})
    },
    async  getFoodTypes({commit}){
        const result=await reqFoodTypes();
        commit('GET_FOODTYPES',{foodtypes:result.data})
    },
    async  getShopList({commit,state}){
        const {latitude,longitude}=state;
        const result=await reqShopList({latitude,longitude});
        commit('GET_SHOOPS',{shops:result.data})
    },
   
})