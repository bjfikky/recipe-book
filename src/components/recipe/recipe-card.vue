<template>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ recipe.title }}</span>
            <p>{{ recipe.description }}</p>
        </div>
        <div class="ingredients">
            <div class="chip" v-for="(ingredient, index) in recipe.ingredients" v-bind:key="index">
                {{ ingredient.name }}
            </div>
        </div>
        <div class="card-action">
            <a href="">Edit</a>
            <a href="" v-on:click="deleteRecipe(recipe.id)" class="right">Delete</a>
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
</style>