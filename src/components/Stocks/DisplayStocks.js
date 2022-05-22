import React, {useEffect} from 'react';
import {Articles} from './Articles';

export const DisplayStocks = () => {
    const [stockArticles, setStockArticles] = React.useState([]);

    useEffect(() => {
        fetch("https://api.polygon.io/v2/reference/news?apiKey=VE1kr4U6aIAbGiRYYQJn24BsMKPTmeC9")
        .then((response) => response.json())
        .then((data) => setStockArticles(data.results));
    }, [])

    return (
        <div className = "stocks">
                    {stockArticles.map((stock, index) => (
                        <Articles 
                        key = {index}
                        index = {index}
                        image = {stock.image_url}
                        title = {stock.title}
                        desc = {stock.description}
                        article = {stock.article_url}
                        >

                        </Articles>
                    ))}
        </div>
    )
    
}