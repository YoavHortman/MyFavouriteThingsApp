import * as React from "react";
import {FavouriteMovie} from "../models/movie";
import './ListItem.css'
// @ts-ignore
import StarRatingComponent = require("react-star-rating-component");

export interface ListItemProps {
    item: FavouriteMovie;
    onRateClick: (id: number, rating: number) => void;
}

export class ListItem extends React.Component<ListItemProps> {
    handleStarClick = (nextValue: number) => {
        this.props.onRateClick(this.props.item.id, nextValue)
    }

    renderListItemRow(title: string, body: string | JSX.Element) {
        return (
            <div className={"ListItem_rowContainer"}>
                <span className={"ListItem_rowTitle"}>{title}</span>{body}
            </div>
        );
    }

    render() {
        return (
            <div className={"ListItem_root"}>
                {this.renderListItemRow("Name:", this.props.item.name)}
                {this.renderListItemRow("Created by:", this.props.item.createdBy)}
                {this.renderListItemRow("Rating:",
                    <StarRatingComponent
                        name={"Rating"}
                        value={this.props.item.rating}
                        onStarClick={this.handleStarClick}
                    />
                )}
                {this.renderListItemRow("Duration:", this.props.item.lengthInMinutes + " minutes")}
            </div>
        )
    }
}