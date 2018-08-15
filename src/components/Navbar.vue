<template>
    <nav class="navbar">
        <div class="nav-wrapper">
            <span><router-link to="/" class="brand-logo">Recipe Book</router-link></span>
            <button class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                <i class="material-icons">add</i>
            </button>
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
