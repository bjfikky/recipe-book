<template>
    <div id="app">
        <Navbar/>
        <div id="nav">
            <!--<router-link to="/">Home</router-link> |-->
            <!--<router-link to="/about">About</router-link>-->
        </div>
        <div class="container">
            <router-view/>
        </div>

    </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        components: {
            Navbar
        }
    }
</script>

<style scoped>
.container {
    padding: 20px 0;
}
</style>

