<template>
    <nav class="navbar brown">
        <div class="nav-wrapper">
            <span><router-link v-bind:to="{ name: 'home' }" class="brand-logo">Recipe Book</router-link></span>
            <router-link v-bind:to="{ name: 'addRecipe' }">
                <button class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                    <i class="material-icons">add</i>
                </button>
            </router-link>

        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    padding: 0 20px;
}
</style>
