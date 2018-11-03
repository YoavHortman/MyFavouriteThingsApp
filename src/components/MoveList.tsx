import * as React from "react";
import {FavouriteMovie} from "../models/movie";
import {ListItem} from './ListItem';

export interface MovieListProps {
    movies: FavouriteMovie[];
    onRateClick: (id: number, rating: number) => void;
}

export class MoveList extends React.Component<MovieListProps> {
    render() {
        return (
            <div>
                {this.props.movies.map(movie => {
                    return (
                        <ListItem
                            key={movie.id}
                            item={movie}
                            onRateClick={this.props.onRateClick}
                        />
                    )
                })}
            </div>
        )
    }
}

