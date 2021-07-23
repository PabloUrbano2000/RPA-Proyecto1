export const getNewsBySearch = async (search, language) => {
  const url2 = `https://newsapi.org/v2/everything?q=${search}&language=${language}&sortBy=publishedAt&pageSize=20&apiKey=8add536625044b2ab1104ac79335aa2c`;
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
