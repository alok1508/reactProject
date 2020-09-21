import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from '../components/ImagesList';

class App extends React.Component {
    state={
        images:[]
    };
    onSearchSubmit = async(term) => {
            console.log(term);
            try{
                const response = await Unsplash.get('https://api.unsplash.com/search/photos',
                {
                    params:{query:term},
                  
                })
                console.log(response.data.results);
                this.setState({images:response.data.results});
            }catch(err){
                    console.log("Error in api => ",err);
            }
            
    };
    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar
            onSubmit={this.onSearchSubmit}

            />
            Found : {this.state.images.length} images
            <ImageList images={this.state.images}/>
        </div>
    );
    }
};

export default App;
