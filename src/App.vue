<template>
  <div id="app">
      <Header></Header>
      <main class="main">
          <Menu class="menu"></Menu>
          <keep-live class="wrap">
              <router-view />
          </keep-live>
      </main>

  </div>
</template>

<script>
    import Header from './components/Header';
    import Menu from './components/Menu';
export default {
  name: 'App',
    components:{
      Header,
        Menu
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
    display: flex;
}
.menu {
    width: 400px;
}
    .wrap{
        flex: 1;
    }
</style>
