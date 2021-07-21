import { useEffect, useState } from 'react';
import {getNewsByCategory} from '../helpers/getNewsByCategory';

const useFetchNews = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getNewsByCategory(category)
            .then(news => {
                setState({
                    data: news,
                    loading: false
                })
            });
            
    }, [category]);
    return state;
}

export default useFetchNews;