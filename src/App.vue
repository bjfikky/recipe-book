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
        <Footer/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    export default {
        components: {
            Footer,
            Navbar
        }
    }
</script>

<style scoped>
.container {
    padding: 20px 0;
}
</style>

