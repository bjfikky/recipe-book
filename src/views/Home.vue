<template>
    <div class="home">
        <h4>Recipes</h4>
        <div class="recipes" v-for="recipe in recipes" v-bind:key="recipe.id">
            <RecipeCard v-bind:recipe="recipe"/>
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

    },
    created() {
        db.collection('recipes').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let recipe = doc.data()
                    recipe.id = doc.id
                    this.recipes.push(recipe)
                })
            })
    }
}
</script>

<style>
.recipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
</style>
