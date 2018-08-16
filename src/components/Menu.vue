<template>
    <div>
        <el-tree
            :props="defaultProps"
            :data="ta"
            accordion
            @node-click="handleClick"
        ></el-tree>

    </div>
</template>

<script>
    const ta = [
        {
        	label : '博物馆',

            children : [
                {
                	label : '商品管理',
                    children : [
                        {
                        	label : '全部',
                            url : '/museum/allGoods'
                        },
                        {
                        	label : '新增',
	                        url : '/museum/addGood'
                        },
                        {
                        	label : '规则',
                            url : '/museum/deliverRule'
                        }
                    ]
                },
                {
	                label : '积分商城',
	                children : [
		                {
			                label : '商品',
                            url : '/credit/goodList'
		                },
		                {
			                label : '积分',
                            url : '/credit/goodList'
		                },
		                {
			                label : '订单',
                            url : '/credit/goodList'
		                }
	                ]
                }
            ]
        }
    ]
    export default {
        name: "Menu",
        data(){
        	return {
        		ta,
                defaultProps : {
        			label : 'label',
                    children : 'children'
                }
            }
        },
        methods : {
        	handleClick(node){
        		const {url} = node;
        		if(!url){
        			return ;
                }
        		console.log(node);
        		this.$router.push(url);
            }
        }
    }


</script>

<style scoped>

</style>
