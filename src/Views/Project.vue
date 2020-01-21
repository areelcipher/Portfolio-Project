<template>
    <div id="project">
        <Header />
        <Calculator />
        <WhatsappClone />
        <WeatherApp />
        <Footer />
    </div>
</template>

<script>
import Calculator from '../components/Calculator'
import WhatsappClone from '../components/WhatsappClone'
import WeatherApp from '../components/WeatherApp'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
    components: {
        Calculator,
        WhatsappClone,
        WeatherApp,
        Header,
        Footer
    }
    
}
</script>

<style scoped>
    
</style>