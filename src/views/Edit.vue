<template>
    <Add v-bind:recipeToEdit="recipe"/>
</template>

<script>
    import db from '../firebase/init'
    import Add from './Add'

    export default {
        name: "Edit",

        components: { Add },

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

</style>