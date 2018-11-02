import * as React from 'react';
import './App.css';
import {FavouriteMovie} from "./models/Movie";
import {sleep} from "./utils";
import {data} from "./data";
import {MoveList} from './components/MoveList';

interface AppState {
    movies: FavouriteMovie[] | "LOADING";
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            movies: "LOADING"
        };
        this.getMovies();
    }

    async getMovies() {
        // Mock loading
        await sleep(500);
        this.setState({movies: data})
    }

    public render() {
        return (
            <div className="App">
                {this.state.movies === "LOADING" ?
                    <div>Loading movies</div>
                    :
                    <div>
                        <MoveList movies={this.state.movies} />
                    </div>
                }
            </div>
        );
    }
}

export default App;
