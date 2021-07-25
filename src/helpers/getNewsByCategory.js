export const getNewsByCategory = async (category, language) => {
  const url2 = `https://newsapi.org/v2/top-headlines?category=${category}&language=${language}&apiKey=a456f85d87e34ec1a63cf9b132408f80`;
  const resp = await fetch(url2);
  const { articles } = await resp.json();

  let news = [];
  if (articles !== undefined) {
    news = articles.map((art) => {
      return {
        title: art.title,
        author: art.author,
        url: art.url,
        image: art.urlToImage,
        description: art.description,
      };
    });
  } else {
    console.log("aca se cayó");
  }

  return news;
};
