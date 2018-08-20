<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title"><h4>{{ recipe.title }}</h4></span>
            <p>{{ recipe.description }}</p>

            <div>
                <h5 class="details">Cooking Time: <span>{{ recipe.cookingTime }}</span>Servings: <span>{{ recipe.serving }}</span> Vegetarian: <span>{{ recipe.vegetarian ? 'yes' : 'no'}}</span></h5>
            </div>

            <!--TODO: Iterate over ingredients and steps-->

            <div class="ingredients">
                <h5>Ingredients:</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut, cum cumque dolore, fuga
                    fugit illum laudantium maxime molestiae neque non possimus recusandae, repellendus soluta suscipit vel voluptas voluptates!</p>
            </div>

            <div class="steps">
                <h5>Steps:</h5>

                <span>
                    <h6>Step 1:</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut, cum cumque dolore, fuga
                    fugit illum laudantium maxime molestiae neque non possimus recusandae, repellendus soluta suscipit vel voluptas voluptates!</p>
                </span>

                <span>
                    <h6>Step 2:</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut, cum cumque dolore, fuga
                    fugit illum laudantium maxime molestiae neque non possimus recusandae, repellendus soluta suscipit vel</p>
                </span>

            </div>
        </div>

        <div class="card-action blue-grey darken-1">
            <a href="">Edit</a>
            <a href="" v-on:click.prevent="deleteRecipe(recipe.id)" class="right">Delete</a>
        </div>
    </div>
</template>

<script>
    import db from '../firebase/init'

    export default {
        name: "Recipe",

        data() {
            return {
                recipe_id: this.$route.params.recipe_id,
                recipe: {}
            }
        },

        methods: {
            getRecipe() {
                db.collection('recipes').doc(this.recipe_id).get().then(doc => {
                    this.recipe = doc.data()
                    console.log(this.recipe)
                })
            }
        },

        created() {
            this.getRecipe()
        }
    }
</script>

<style scoped>
    h5 span {
        font-size: .6em;
        margin-right: 25px ;
        font-style: italic;
        color: rgba(0,0,0,0.87);
    }

    .card-content div {
        padding: 10px 0;
    }

    .steps span h6 {
        text-decoration: underline;
    }

    .details {
        margin-bottom: -15px;
    }

    h6, h5, h4 {

    }
</style>