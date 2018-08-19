<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title"><h4>Potato Salad</h4></span>
            <p>This is potato salad the old-fashioned way, with eggs, celery and relish. It's really good to serve with chili.</p>

            <div>
                <h5 class="details">Cooking Time: <span>40 minutes</span>Servings: <span>5</span> Vegetarian: <span>yes</span></h5>
            </div>

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
    export default {
        name: "Recipe"
    }
</script>

<style scoped>
    h5 span {
        font-size: .6em;
        margin-right: 25px ;
        font-style: italic;
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
</style>