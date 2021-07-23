import { useEffect, useState } from "react";
import { getNewsByCategory } from "../helpers/getNewsByCategory";
import { getNewsBySearch } from "../helpers/getNewsBySearch";

const UseFetchNews = (search, category, language) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (search === "") {
      getNewsByCategory(category, language).then((news) => {
        setState({
          data: news,
          loading: false,
        });
      });
    } else {
      getNewsBySearch(search, language).then((news) => {
        setState({
          data: news,
          loading: false,
        });
      });
    }
  }, [search, category, language]);

  return state;
};

export default UseFetchNews;
