<template>
    <div class="home">
        <h4>Recipes</h4>
        <div class="recipes">
            <RecipeCard v-for="recipe in recipes" v-bind:key="recipe.id" v-bind:recipe="recipe" v-on:deleteRecipe="deleteRecipe"/>
        </div>
    </div>
</template>

<script>
import db from '../firebase/init'
import RecipeCard from '../components/recipe/recipe-card'

export default {
    name: 'home',

    data() {
        return {
            recipes: [],
        }
    },

    components: {
        RecipeCard
    },

    methods: {
        getRecipes() {
            db.collection('recipes').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let recipe = doc.data()
                    recipe.id = doc.id
                    this.recipes.push(recipe)
                })
            })
        },

        deleteRecipe(payload) {
            console.log(payload.recipeId)
            let recipeId = payload.recipeId
            db.collection('recipes').doc(recipeId).delete()
                .then(() => {
                    this.recipes = this.recipes.filter(recipe => {
                        return recipe.id !== recipeId
                    })
                })
        }
    },

    created() {
        this.getRecipes()
    },
}
</script>

<style>
.recipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
</style>
