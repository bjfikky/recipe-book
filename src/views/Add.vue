<template>
    <div>
        <h4>Add Recipe</h4>
        <div class="row">
            <div class="col s6">
                <form>
                    <div class="field">
                        <label for="title">Title:</label>
                        <input id="title" type="text" v-model="recipe.title"/>
                    </div>

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

                    <div class="field">
                        <label for="description">Description:</label>
                        <textarea id="description" class="materialize-textarea" v-model="recipe.description"></textarea>
                    </div>

                    <h6>Ingredients <small><em>(press 'space' or click the '+' button to add)</em></small></h6>

                    <div class="row field">
                        <div class="col s6">
                            <label for="ingredient">Ingredient {{ recipe.ingredients.length + 1 }}:</label>
                            <input id="ingredient" type="text" v-model="ingredient.name"/>
                        </div>
                        <div class="col s4">
                            <label for="quantity">Quantity:</label>
                            <input id="quantity" type="text" v-model="ingredient.quantity" v-on:keyup.space="addIngredient"/>
                        </div>
                        <div class="col s2 add-ingredient-btn">
                            <button v-on:click.prevent="addIngredient" class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>

                    <h6>Steps <small><em>(press 'enter' or click the '+' button to add)</em></small></h6>

                    <div class="row field">
                        <div class="col s10">
                            <label for="step">Step {{ stepNumber }}:</label>
                            <textarea id="step" class="materialize-textarea" v-model="step.name" v-on:keyup.enter="addStep(step)"></textarea>
                        </div>

                        <div class="col s2 add-ingredient-btn">
                            <button v-on:click.prevent="addStep" class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>

                    <div class="switch">
                        <label>
                            Non-vegetarian
                            <input type="checkbox" v-model="recipe.vegetarian">
                            <span class="lever"></span>
                            Vegetarian
                        </label>
                    </div>

                    <div class="field submit">
                        <button v-on:click.prevent="addRecipe" class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>

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

                            <h6>Ingredients:</h6>
                            <p>
                                <span v-for="(ing, index) in recipe.ingredients" v-bind:key="index">
                                    {{' ' + ing.quantity }} {{ ing.name }},
                                </span>
                            </p>

                            <h6 style="margin-bottom: 5px">Steps: <small><em class="red-text">(<b>*click*</b> a step to edit, <b>*right-click*</b> to delete)</em></small></h6>
                            <div class="steps">
                                <span v-for="(step, index) in recipe.steps" v-bind:key="index">
                                    <h6>Step {{ recipe.steps.indexOf(step) + 1 }}:</h6>
                                <p v-on:click.exact="pickStep(step, index)" v-on:click.right.prevent="deleteStep(index)" class="preview-step">{{ step.name }} {{ index + 1 }} </p>
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
    export default {
        name: 'add',

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

                ingredient: { name: '', quantity: '' },
                step: {},
                stepEdit: false,
                stepNumber: 1,
            }
        },

        methods: {
            addIngredient() {
                this.recipe.ingredients.push({ name: this.ingredient.name , quantity: this.ingredient.quantity })
                this.ingredient.name = ''
                this.ingredient.quantity = ''
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
                console.log(index)
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
                console.log(this.recipe)
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

    .preview-step:hover {
        cursor: pointer;
        background-color: #f4f4f4;
    }


</style>