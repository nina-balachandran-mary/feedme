import * as React from "react";
import {Ingredient} from "./ingredient";
import "./../../styles/app.css";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList: ['Eggs', 'Milk', 'Cheese']
        }
    }

    addIngredient() {

    }

    removeIngredient(e) {
        console.log('some event', e);
    }

    render() {
        const items = this.state.ingredientList.map((item) => {
            return <Ingredient name={item} key={item}/>
        });

        return(
            <div>
                <input type="text" className="ingredient-search" placeholder="Enter ingredients here"/>
                <div className="ingredient-list">
                    {items}
                </div>
                <button className={"get-recipes"} type={"submit"}>Get Recipes</button>
            </div>
        );
    }
}
