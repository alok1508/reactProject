import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    useEffect(() => {
        try {
            const search = async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    }
                });
                setResults(data.query.search);
            };
            if(term && !results.length)
            {
                search();
            }else{
                const timeoutId = setTimeout(()=>{
                    if(term){
                        search();
                    }
                },500);
                return () =>{
                    clearTimeout(timeoutId);
                };
                
                
            }
          
        }
        catch (error) {
            console.log("Error in wiki : ", error);
        }

    }, [term]);
    const renderedResults = results.map((result) => {
        return <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
            <div key={result.pageid} className="header">
                {result.title}
            </div>
            <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
           
        </div>
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Wikipedia Search Here</label>
                    <input 
                        className="input"
                        // value={term}
                        // onChange={(e) => setTerm(e.target.value)}
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />

                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
