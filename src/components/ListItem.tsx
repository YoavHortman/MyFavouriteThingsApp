import * as React from "react";
import {FavouriteMovie} from "../models/movie";
// @ts-ignore
import StarRatingComponent from "react-star-rating-component";

export interface ListItemProps {
    item: FavouriteMovie;
    onRateClick: (id: number, rating: number) => void;
}

export class ListItem extends React.Component<ListItemProps> {
    handleStarClick = (nextValue: number) => {
        this.props.onRateClick(this.props.item.id, nextValue)
    }

    render() {
        return (
            <div>
                {this.props.item.name}
                {this.props.item.createdBy}
                <StarRatingComponent
                    name={"Rating"}
                    value={this.props.item.rating}
                    onStarClick={this.handleStarClick}
                />
                {this.props.item.rating}
                {this.props.item.lengthInMinutes}
            </div>
        )
    }
}