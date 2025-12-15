<template>
    <div v-if="introDiv">
        <h2>!Bienvenido Pequeño Aventurero!</h2>
        <p>Bienvenido a tu propia aventura interactiva. En este juego, tú eres el protagonista y tus decisiones determinaran el curso de la historia.</p>

        <h3><strong>¿Cómo Jugar?</strong></h3>
        <ul>
            <li>Lee la historia que se te presenta</li>
            <li>Encontrarás huecos en el texto que debes completar</li>
            <li><strong>Arrastra las opciones</strong> disponibles a los huecos correspondientes</li>
            <li>Una vez completes todos los huecos, pulsa <strong>CONFIRMAR</strong></li>
            <li>Tus elecciones afectarán el desarrollo de la narrativa y te llevarán por caminos diferentes</li>
        </ul>
        <p><strong>*Recuerda* </strong>No hay elecciones correctas o incorrectas, solo diferentes maneras de abordar la aventura</p>
        <button @click="empezar">!Comenzar Aventura!</button>
    </div>
    <div v-if="aventuraDiv">
        <h3>EL COMIENZO DE TU AVENTURA</h3>
        <p>HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA HOLA </p>
        <movidas />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import movidas from './movidas.vue';


const router = useRouter();

const introDiv = ref(true);
const aventuraDiv = ref(false);
function empezar() {
    introDiv.value = false;
    aventuraDiv.value = true;
}

</script>

<style scoped>

</style>
