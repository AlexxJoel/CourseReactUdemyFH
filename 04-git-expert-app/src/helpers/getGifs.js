export const getGifs=  async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DOIHBUdJx6YZOFi5olxJ8UOwiaTJFxJo&q=${category}&limit=20`
    const resp = await fetch(url); 
    const {data } = await resp.json()

    // console.log(data)

    const gifs = data.map(img=>({
        id: img.id, 
        title: img.title, 
        url : img.images.downsized_medium.url
    }))

    return gifs
}