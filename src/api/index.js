/*与后台交互模块*/
import ajax from './ajax';
/**
* 获取地址信息(根据经纬度串)
*/
export const reqAddres=(geohash)=>ajax(`/position/${geohash}`)

/**
* 获取食品分类列表
*/
export const reqFoodTypes=()=>ajax('/index_category')

/**
* 根据经纬度获取商铺列表
*/
export const reqShopList=(longitude,latitude)=>ajax('/shops',{longitude,latitude})

/**
 * 获取一次性验证码
 */
export const reqOnceCaptch=()=>ajax('/captcha')

/**
* 账号密码登录
*/
export const reqPwdLogin=(name,pwd,captcha)=>ajax('/login_pwd',{name,pwd,captcha},'post')

/**
 * 获取短信验证码
 */
export const reqSendCode=(phone)=>ajax('/sendcode',phone)

/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo=()=>ajax('/userinfo')

/**
 * 请求登出
 */
export const reqLogout=()=>ajax('/logout')