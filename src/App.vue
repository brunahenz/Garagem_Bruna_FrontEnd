<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/marca">Marcas</router-link> |
    <router-link to="/categoria">Categorias</router-link> |
    <router-link to="/acessorio">Acessorios</router-link> |
    <router-link to="/cor">Cores</router-link> |
  </header>
  <main>
    <RouterView />
  </main>
</template>