<template>
    <div>
        <h4>{{ recipeToEdit ? 'Edit' : 'Add'}} Recipe</h4>
        <div class="row">

<!-- ====== ADD RECIPE FORM SECTION =================================================================================-->
            <div class="col s6">
                <form>
                    <!-- TITLE -->
                    <div class="field">
                        <label for="title">Title:</label>
                        <input id="title" type="text" v-model="recipe.title"/>
                    </div>


                    <!-- COOKING TIME and SERVING-->
                    <div class="row field">
                        <div class="col s6">
                            <label for="cooking-time">Cooking Time:</label>
                            <input id="cooking-time" type="text" v-model="recipe.cookingTime"/>
                        </div>
                        <div class="col s6">
                            <label for="servings">Servings:</label>
                            <input id="servings" type="text" v-model="recipe.serving"/>
                        </div>
                    </div>


                    <!-- DESCRIPTION -->
                    <div class="field">
                        <label for="description">Description:</label>
                        <textarea id="description" class="materialize-textarea" v-model="recipe.description"></textarea>
                    </div>


                    <!-- INGREDIENTS -->
                    <h6>Ingredients</h6>
                    <div class="row field">
                        <div class="col s6">
                            <label for="ingredient">{{ ingredientEdit ? 'Editing ' : '' }}Ingredient:</label>
                            <input id="ingredient" type="text" v-model="ingredient.name"/>
                        </div>

                        <div class="col s4">
                            <label for="quantity">Quantity:</label>
                            <input id="quantity" type="text" v-model="ingredient.quantity"/>
                        </div>

                        <div class="col s2 add-ingredient-btn">
                            <button v-on:click.prevent="addIngredient(ingredient)" class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>


                    <!-- STEPS -->
                    <h6>Steps</h6>
                    <div class="row field">
                        <div class="col s10">
                            <label for="step">{{ stepEdit ? 'Editing ' : '' }}Step {{ stepNumber }}:</label>
                            <textarea id="step" class="materialize-textarea" v-model="step.name" v-on:keyup.enter="addStep(step)"></textarea>
                        </div>

                        <div class="col s2 add-ingredient-btn">
                            <button v-on:click.prevent="addStep(step)" class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>


                    <!-- VEGETARIAN -->
                    <div class="switch">
                        <label>
                            Non-vegetarian
                            <input type="checkbox" v-model="recipe.vegetarian">
                            <span class="lever"></span>
                            Vegetarian
                        </label>
                    </div>


                    <!-- SUBMIT BUTTON-->
                    <div class="field submit">
                        <button v-on:click.prevent="addRecipe" class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

<!-- ====== PREVIEW SECTION ======================================================================================== -->

            <div class="col s6">
                <div class="preview">
                    <h6>Preview</h6>
                    <div class="card">
                        <div class="card-content">
                            <h6>Title:</h6>
                            <p>{{ recipe.title }}</p>

                            <h6>Vegetarian:</h6>
                            <p>{{ recipe.vegetarian ? 'yes' : 'no' }}</p>

                            <h6 style="margin-bottom: 10px">Cooking Time: <span>{{ recipe.cookingTime }}</span> Servings: <span>{{ recipe.serving }}</span></h6>

                            <h6>Description:</h6>
                            <p>{{ recipe.description }} </p>

                            <h6>Ingredients: <small><em class="red-text">(<b>*click*</b> an ingredient to edit, <b>*right-click*</b> to delete)</em></small></h6>
                            <p>
                                <span class="preview-ingredient" v-for="(ing, index) in recipe.ingredients" v-bind:key="index" v-on:click="pickIngredient(ing, index)" v-on:click.right.prevent="deleteIngredient(index)">
                                    {{' ' + ing.quantity }} {{ ing.name }},
                                </span>
                            </p>

                            <h6 style="margin-bottom: 5px">Steps: <small><em class="red-text">(<b>*click*</b> a step to edit, <b>*right-click*</b> to delete)</em></small></h6>
                            <div class="steps">
                                <span v-for="(step, index) in recipe.steps" v-bind:key="index">
                                    <h6>Step {{ recipe.steps.indexOf(step) + 1 }}:</h6>
                                <p v-on:click.exact="pickStep(step, index)" v-on:click.right.prevent="deleteStep(index)" class="preview-step">{{ step.name }}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import db from '../firebase/init'

    export default {
        name: 'add',

        props: ['recipeToEdit'],

        data() {
            return {
                recipe: {
                    title: '',
                    description: '',
                    cookingTime: '',
                    serving: '',
                    ingredients: [

                    ],
                    steps: [],
                    vegetarian: false,
                },

                ingredient: {},
                ingredientEdit: false,

                step: {},
                stepEdit: false,
                stepNumber: 1,
            }
        },

        methods: {
            addIngredient(ingredient) {
                if(this.ingredientEdit) {
                    this.recipe.ingredients.splice(ingredient.index, 1, { name: this.ingredient.name , quantity: this.ingredient.quantity, index: ingredient.index })
                    this.ingredientEdit = false
                } else {
                    this.recipe.ingredients.push({ name: this.ingredient.name , quantity: this.ingredient.quantity, index: this.recipe.ingredients.length })
                }

                this.ingredient = {}
            },

            deleteIngredient(index) {
                this.recipe.ingredients.splice(index, 1)
            },

            pickIngredient(ingredient, index) {
                ingredient.index = index
                this.ingredient = ingredient
                this.ingredientEdit = true
            },

            addStep(step) {
                if(this.stepEdit) {
                    this.recipe.steps.splice(step.index, 1, { name: this.step.name, index: step.index })
                    this.stepEdit = false
                } else {
                    this.recipe.steps.push({ name: this.step.name, index: this.recipe.steps.length })
                }

                this.step = {}
                this.stepNumber = this.recipe.steps.length + 1
            },

            deleteStep(index) {
                this.recipe.steps.splice(index, 1)
                this.stepNumber = this.recipe.steps.length + 1
            },

            pickStep(step, index) {
                step.index = index
                this.step = step
                this.stepEdit = true
                this.stepNumber = index + 1
            },

            addRecipe() {
                if (this.recipeToEdit) {
                    db.collection('recipes').doc(this.$route.params.recipe_id).update(this.recipe).then(() => {
                        this.$router.push({ name: 'home' })
                    })
                } else {
                    db.collection('recipes').add(this.recipe).then(() => {
                        this.$router.push({ name: 'home' })
                    })
                }

            }
        },

        watch: {
            recipeToEdit() {
                this.recipe = this.recipeToEdit
            }
        },

    }
</script>

<style scoped>
    .field {
        padding: 10px 0;
    }

    .add-ingredient-btn {
        margin-top: 20px;
    }

    .submit {
        padding: 30px 0;
    }

    .preview {
        margin-left:30px;
        font-size: .8em;
    }

    .card h6 {
        margin: 0;
    }

    .card p {
        margin-bottom: 10px;
    }

    .steps h6 {
        font-size: .9em;
        font-weight: bold;
    }

    h6 span {
        font-size: .65em;
        font-style: italic;
    }

    .preview-step:hover, .preview-ingredient:hover {
        cursor: pointer;
        background-color: #ccc;
    }



</style>