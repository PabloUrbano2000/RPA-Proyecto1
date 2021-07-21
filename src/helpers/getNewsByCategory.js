export const getNewsByCategory = async(category) => {

    //const url = `${process.env.REACT_APP_API_URL}/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`;
    const url2 = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a456f85d87e34ec1a63cf9b132408f80`;
    const resp = await fetch(url2);
    const {articles} = await resp.json();

    const news = articles.map( art => {
        return {
            title: art.title,
            author: art.author,
            link: art.url,
            image: art.urlToImage
        }
    });

    return news;
}