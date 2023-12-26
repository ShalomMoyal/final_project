function getRequest(url){
    return new Promise((resolve, reject) => {
        const xmlHttpObj = new XMLHttpRequest();
        xmlHttpObj.open('GET', url);
        xmlHttpObj.addEventListener('load', function(){
            resolve(JSON.parse(this.responseText));
        });
        xmlHttpObj.addEventListener('error',function(){
            reject(this.error);
        });
        xmlHttpObj.send();
    });
}

getRequest().then(rseult =>{

}).catch(error =>{

})

function search() {
    var searchQuery = document.getElementById('query').value;

    
}