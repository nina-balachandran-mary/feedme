import * as React from "react";

export class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"ingredient"}>
                <span className={"ingredient-name"}>{this.props.name}</span>
                <span className={"ingredient-cancel"} onClick={this.props.removeIngredient}>X</span>
            </div>
        )
    }
}