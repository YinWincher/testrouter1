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
    import {login} from './api/login';
    login({
        account : '18038384237',
        smsCode : '111111'
    });

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
    padding-right: 20px;
}
.main{
    display: flex;
}
.menu {
    width: 300px;
    flex-shrink: 0;
}
    .wrap{
        flex-grow: 1;
    }
</style>
