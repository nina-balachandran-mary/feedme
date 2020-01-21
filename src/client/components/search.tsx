import * as React from "react";
import "./../styles/app.css";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList: ['Eggs', 'Milk', 'Bacon']
        }
    }

    onSearchChanged(e: Event) {

    }

    removeIngredient(ingredient: string) {
        const ingredients = this.state.ingredientList;
        const index = ingredients.indexOf(ingredient);
        if (index !== -1) {
            ingredients.splice(index, 1);
            this.setState({ingredientList: ingredients});
        }
    };

    addIngredient(ingredientName: string) {
        const ingredients = this.state.ingredientList;
        ingredients.push(ingredientName);
        this.setState({ingredientList: ingredients});
    }

    render() {
        const items = this.state.ingredientList.map((item) => {
            return <Ingredient name={item} key={item}></Ingredient>
        });

        return(
            <div>
                <div className="ingredient-search-container">
                    <input type="text" className="ingredient-search" onChange={this.onSearchChanged.bind(this)} placeholder="Search by ingredient name"/>
                </div>
                <div className="ingredient-list">
                    {items}
                </div>
                <FetchRecipes/>
            </div>
        );
    }
}

export class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="ingredient">
                <span className="ingredient-name">{this.props.name}</span>
                <span className="ingredient-cancel" onClick={this.props.removeIngredient}>X</span>
            </div>
        );
    }
}

export class FetchRecipes extends React.Component {
    // TODO: Handles page route to recipes, fires an API call as well
    render() {
        return <button className={"get-recipes"} type={"submit"}>Get Recipes</button>
    }
}