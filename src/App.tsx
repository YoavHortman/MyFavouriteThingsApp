import * as React from 'react';
import './App.css';
import {FavouriteMovie} from "./models/movie";
import {sleep} from "./utils";
import {data} from "./data";
import {MoveList} from './components/MoveList';

interface AppState {
    movies: FavouriteMovie[] | "LOADING";
    randomRatingMode: boolean;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            movies: "LOADING",
            randomRatingMode: false
        };
        this.getMovies();
    }

    async getMovies() {
        // Mock loading
        await sleep(500);
        this.setState({movies: data})
    }

    onRateClick = (id: number, rating: number) => {
        if (this.state.movies === "LOADING") {
            throw new Error("This can never happen, so to make type script happy we throw");
        }
        const ratedMovies = this.state.movies.map(movie => {
            if (movie.id === id) {
                movie.rating = rating;
            }

            return movie;
        }).sort((movie1,movie2) => movie1.rating - movie2.rating);
        this.setState({movies: ratedMovies});
    }

    public render() {
        return (
            <div className="App">
                {this.state.movies === "LOADING" ?
                    <div>Loading movies</div>
                    :
                    <div>
                        <MoveList
                            movies={this.state.movies}
                            onRateClick={this.onRateClick}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default App;
