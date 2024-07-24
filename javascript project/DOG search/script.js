 const image = document.querySelector('img')
 const button = document.querySelector('button')



 button.addEventListener('click', () => {
     const xhr = new XMLHttpRequest ( ) ;
     xhr.open( 'GET' , 'https://dog.ceo/api/breeds/image/random' ) ;
     xhr.responseType = 'json' ;
     xhr.send() ;
     xhr.addEventListener('load',() => {
         image.src = xhr.response.message
       console.log(xhr.response)

     })
})


// callback hell

const makeHttpRequest = (method, url) => {
   
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    const promise = new Promise((resolve,reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        })

    })
    xhr.open(method,url)
    xhr.send();

   return promise
    
}



// 'http://dummyjson.com/users'