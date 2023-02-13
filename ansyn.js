
function htmlgetAsync(url,resolve){
    var xmlHttp=new XMLHttpRequest();
    xmlHttp.onreadystatechange=()=>{
        if(xmlHttp.readyState==4 && xmlHttp.status==200) resolve(xmlHttp);
    }
    xmlHttp.open("GET",url,true)
    xmlHttp.send()
}
const currentPromise=new Promise((resolve,reject)=>{
    htmlgetAsync('https://jsonplaceholder.typicode.com/todos/1',resolve);
})

const executer=async ()=>{
    try{
        const  response=await currentPromise;
        console.log(response.response);
    }
    catch(err){
        console.log(err);
    }


}
executer();