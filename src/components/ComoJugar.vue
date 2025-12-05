<template>
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
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function empezar() {
    router.push('/aventura');
}

</script>

<style scoped>

</style>
