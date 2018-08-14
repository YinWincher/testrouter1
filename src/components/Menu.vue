<template>
    <div>
        <ul>
            <router-link to="/museum/allGoods">博物馆</router-link>
            <li>
                商品管理
                <ul>
                    <router-link tag="li" to="/museum/allGoods">全部</router-link>
                    <router-link tag="li" to="/museum/addGood">新增</router-link>
                    <router-link tag="li" to="/museum/deliverRule">规则</router-link>
                </ul>
            </li>
            <li>
                <router-link to="/credit/goodList">积分商城</router-link>
                <ul>
                    <router-link tag="li" to="/credit/goodList">商品</router-link>
                    <router-link tag="li" to="/credit/creditArea">积分</router-link>
                    <router-link tag="li" to="/credit/orderList">订单</router-link>
                </ul>
            </li>
        </ul>
        <ul></ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Menu"
    }
    // async function z(){
	//     var b = await axios.post('http://testadmin.wehotel.com:8888/mall-admin-web/TbProduct/list.do',{
	// 	    headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://testadmin.wehotel.com'}
    //
	//     });
    //     // b = await b.json();
    //     console.log(b);
    // }
    // z();

</script>

<style scoped>

</style>
