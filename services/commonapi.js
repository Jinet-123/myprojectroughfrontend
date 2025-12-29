import axios from "axios"


const commonapi = async (httprequest,url,reqbody,reqheader)=>{
    const requestconfig = {
        method : httprequest,
        url,
        data : reqbody,
        headers : reqheader
        

    }
    return await axios(requestconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}

export default commonapi