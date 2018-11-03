import * as React from 'react';
import './App.css';
import {FavouriteMovie} from "./models/movie";
import {getRandomInt, sleep} from "./utils";
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
        this.setState({movies: data.sort(this.sortMovies)});
    }

    sortMovies = (movie1: FavouriteMovie, movie2: FavouriteMovie) => {
        // This makes the sort "stable" (https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)
        if (movie1.rating === movie2.rating) {
            return movie2.id - movie1.id;
        }
        return movie2.rating - movie1.rating;
    }

    rateMovie(id: number, rating: number) {
        if (this.state.movies === "LOADING") {
            throw new Error("This can never happen, so to make type script happy we throw");
        }
        const ratedMovies = this.state.movies.map(movie => {
            if (movie.id === id) {
                movie.rating = rating;
            }

            return movie;
        }).sort(this.sortMovies);
        this.setState({movies: ratedMovies});
    }

    onRateClick = (id: number, rating: number) => {
        this.rateMovie(id, rating);
    }

    async randomRater() {
        // This function is using the state and not receiving the list of movies
        // because if the list changes during the random rate it might break
        if (this.state.movies === "LOADING") {
            throw new Error("This can never happen, so to make type script happy we throw");
        }
        await sleep(getRandomInt(3000));
        if (this.state.randomRatingMode) {
            const movieToRate = this.state.movies[getRandomInt(this.state.movies.length)];
            const rating = getRandomInt(6);
            this.rateMovie(movieToRate.id, rating);
            this.randomRater();
        }
    }

    toggleRandomRatingMode = () => {
        this.setState({randomRatingMode: !this.state.randomRatingMode}, () => {
            if (this.state.randomRatingMode) {
                this.randomRater();
            }
        })
    }

    public render() {
        return (
            <div className={"App_root"}>
                <div className={"App_header"}>
                    Favourite Movie List
                </div>
                {this.state.movies === "LOADING" ?
                    <div className={"App_loading"}>
                        Loading movies...
                    </div>
                    :
                    <div className={"App_bodyContainer"}>
                        <div
                            className={"App_randomButton"}
                            onClick={this.toggleRandomRatingMode}
                        >
                            {this.state.randomRatingMode ? "Turn random mode OFF" : "Turn random mode ON"}
                        </div>
                        {/* App body will flex to bottom, content inside will scroll properly*/}
                        <div className={"App_body"}>
                            <MoveList
                            movies={this.state.movies}
                            onRateClick={this.onRateClick}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
