<template>
    <div class="home">
        <div class="row">
            <div class="col s6">
                <h4>Recipes </h4>
            </div>
            <div class="col s6">
                <span class="search-bar"><input type="text" placeholder="Search recipes" name="" v-model="searchTerm"></span>
            </div>
        </div>
        <div class="recipes">
            <router-link v-for="recipe in filterBySearchTerm" v-bind:key="recipe.id" v-bind:to="{ name: 'recipe', params: {recipe_id: recipe.id} }">
                <RecipeCard  v-bind:recipe="recipe" v-on:deleteRecipe="deleteRecipe"/>
            </router-link>
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

            searchTerm: ''
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
            let recipeId = payload.recipeId
            db.collection('recipes').doc(recipeId).delete()
                .then(() => {
                    this.recipes = this.recipes.filter(recipe => {
                        return recipe.id !== recipeId
                    })
                })
        },
    },

    computed: {
        filterBySearchTerm() {
            return this.recipes.filter(recipe => {
                return recipe.title.toLowerCase().match(this.searchTerm.trim().toLowerCase())
            })
        }
    },

    created() {
        this.getRecipes()
    },
}
</script>

<style scoped>
.recipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
}

    .card {
        height: 94.4%;
    }

    input {
        display: inline;
    }



</style>
