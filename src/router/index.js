import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import museum from './museum/index';
import Museum from '../components/Museum';
import credit from './credit/index'
import AllGoods from '../components/AllGoods';
import NotFount from '../components/NotFound';
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/museum',
	    component:Museum,
         // redirect:'/museum/allGoods',
    	children:museum,
    },
	{
	  	path:'*',
		component:NotFount
	}
  ]
});
// router.beforeEach((to,from,next)=>{
// 	console.log('from : ',from);
// 	console.log('to :',to);
//     if(from.meta.a){
// 		next('/museum/allGoods')
// 	}else{
// 		next();
// 	}
// })
export default router;
