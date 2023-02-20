
// const getImagePromise = () => new Promise((resolve )=>resolve('https://joel.com'))


const getImage = async ()=>{
    try{
        const API_KEY = 'DOIHBUdJx6YZOFi5olxJ8UOwiaTJFxJo';
        const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} = await resp.json()
        const {url} = data.images.original

        const  img = document.createElement("img");
        img.src = url
        document.body.append(img)
    }catch (e){console.error(e)}
}

getImage().then( console.log)