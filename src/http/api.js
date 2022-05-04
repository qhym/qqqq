import axios from "axios";
//首页获取数据
export const getListData = params =>{
    return axios.get(`http://www.phonegap100.com/appapi.php`,{params:params});
}

//HomeList 页面获取数据
export const productlist = params =>{
    return axios.get(`http://a.itying.com/api/productlist`,{params:params});
}
//详情接口
export const productcontent = params =>{
    return axios.get(`http://a.itying.com/api/productcontent`,{params:params});
}

