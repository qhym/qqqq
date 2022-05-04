import React, { useState, useEffect } from 'react'
import { useParams, Link} from "react-router-dom";
import { productcontent } from "../http/api";
function Pcontent(){
    const { id } = useParams();//获取传参
    let [ a, setA ] = useState(0);
    let [ datalist, setDatalist ] = useState([]);
    function getData(){
        productcontent({id:id}).then(res =>{
            console.log(res.data.result[0])
            setDatalist(res.data.result[0])
        })
    }
    //componentDidMount
    useEffect(() => {
        getData();
    },[]);
    //componentDidMount && componentDidUpdate
    useEffect(() => {
         getData();
         console.log("1111")
     });
    //componentDidUpdate
    useEffect(() => {
         console.log("2222222")
     }, [a]);
    //componentWillUnmount
    useEffect(() => {
          return ()=>{
              console.log("333333")
          }
      },[a]);

    return(
        <div className="back">
            <Link to='/'>返回</Link>
            <div className="p_content">
                <div className="p_info">
                    <img src={`http://a.itying.com/${datalist.img_url}`} alt=""/>
                    <h2>{datalist.title}</h2>
                    <p className="price">{datalist.price}</p>
                </div>
                <div className="p_detail">
                    <h3>商品详情</h3>
                    <div className="p_content" dangerouslySetInnerHTML={{__html:datalist.content}}></div>
                </div>
            </div>
        </div>
    )
}
export default Pcontent;
