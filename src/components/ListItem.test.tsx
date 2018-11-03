import * as React from "react";
import * as renderer from "react-test-renderer";
import {ListItem} from "./ListItem";

it('Should render empty list', () => {
    const tree = renderer
        .create(
            <ListItem
                item={{
                    id: 10,
                    name: "I like lots of movies9",
                    createdBy: "me",
                    lengthInMinutes: 100,
                    rating: 5
                }}
                onRateClick={() => {
                }}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});