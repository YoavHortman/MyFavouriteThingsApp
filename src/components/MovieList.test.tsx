import * as React from "react";
import * as renderer from "react-test-renderer";
import {MoveList} from "./MoveList";

it('Should render empty list', () => {
    const tree = renderer
        .create(
            <MoveList
                movies={[]}
                onRateClick={() => {
                }}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should render a list with 2 items', () => {
    const tree = renderer
        .create(
            <MoveList
                movies={[
                    {
                        id: 10,
                        name: "I like lots of movies9",
                        createdBy: "me",
                        lengthInMinutes: 100,
                        rating: 5
                    }]}
                onRateClick={() => {
                }}
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
