import React from 'react';
import css from './Burger.module.css'
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngrediant key={igKey + i} type={igKey}></BurgerIngrediant>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={css.Burger}>
            <BurgerIngrediant type="bread-top"></BurgerIngrediant>
            {transformIngredients}
            <BurgerIngrediant type="bread-bottom"></BurgerIngrediant>

        </div>
    );
}

export default burger;