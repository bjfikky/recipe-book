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
                            <input id="cooking-time" type="text"/>
                        </div>
                        <div class="col s6">
                            <label for="servings">Servings:</label>
                            <input id="servings" type="text"/>
                        </div>
                    </div>

                    <div class="field">
                        <label for="description">Description:</label>
                        <textarea id="description" class="materialize-textarea" v-model="recipe.description"></textarea>
                    </div>

                    <h6>Ingredients <small><em>(press 'space' or click the '+' button to add)</em></small></h6>

                    <div class="row field">
                        <div class="col s6">
                            <label for="ingredient">Ingredient:</label>
                            <input id="ingredient" type="text"/>
                        </div>
                        <div class="col s4">
                            <label for="quantity">Quantity:</label>
                            <input id="quantity" type="text"/>
                        </div>
                        <div class="col s2 add-ingredient-btn">
                            <button class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>

                    <h6>Steps <small><em>(press 'space' or click the '+' button to add)</em></small></h6>

                    <div class="row field">
                        <div class="col s10">
                            <label for="step">Step 1:</label>
                            <textarea id="step" class="materialize-textarea"></textarea>
                        </div>

                        <div class="col s2 add-ingredient-btn">
                            <button class="btn-floating btn-small grey darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </div>
                    </div>

                    <div class="switch">
                        <label>
                            Non-vegetarian
                            <input type="checkbox">
                            <span class="lever"></span>
                            Vegetarian
                        </label>
                    </div>

                    <div class="field submit">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
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

                            <h6>Description:</h6>
                            <p>{{ recipe.description }} </p>

                            <div class="steps">
                                <h6>Step 1:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae consequuntur
                                    corporis cum dolorem doloremque eligendi exercitationem iusto laborum nemo nisi nobis
                                    quam repellendus saepe similique suscipit, totam. </p>

                                <h6>Step 2:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae consequuntur
                                    corporis cum dolorem doloremque eligendi exercitationem iusto laborum nemo nisi nobis
                                    quam repellendus saepe similique suscipit, totam. </p>

                                <h6>Step 3:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae consequuntur
                                    corporis cum dolorem doloremque eligendi exercitationem iusto laborum nemo nisi nobis
                                    quam repellendus saepe similique suscipit, totam. </p>

                                <h6>Step 4:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae consequuntur
                                    corporis cum dolorem doloremque eligendi exercitationem iusto laborum nemo nisi nobis
                                    quam repellendus saepe similique suscipit, totam. </p>

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
                }
            }
        }
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
</style>