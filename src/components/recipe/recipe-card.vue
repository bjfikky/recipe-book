<template>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ recipe.title }}</span>
            <p>{{ recipe.description }}</p>
        </div>
        <div class="ingredients">
            <div class="chip" v-for="(ingredient, index) in trimIngredients" v-bind:key="index">
                {{ ingredient.name }}
            </div>
        </div>
        <div class="card-action">
            <a href="">Edit</a>
            <a href="" v-on:click.prevent="deleteRecipe(recipe.id)" class="right">Delete</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecipeCard',

        props: ['recipe'],

        methods: {
            deleteRecipe(recipeId) {
                this.$emit('deleteRecipe', {recipeId})
            }
        },

        computed: {
            trimIngredients() {
                let more = this.recipe.ingredients.length - 4

                let trimedIngredients = this.recipe.ingredients.filter(ingredient => {
                    return ingredient.index < 4
                })

                trimedIngredients.push({name: `... ${more} others`})

                return trimedIngredients
            }
        },

        created() {

        }
    }
</script>

<style scoped>
    .card-title {
        color: #ffab40;
    }

    .ingredients {
        padding: 0 10px;
    }

    .chip {
        font-size: .7em;
    }
</style>