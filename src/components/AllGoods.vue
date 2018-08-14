<template>
    <div>
        <header>
            <el-form @keydown.enter.native="onSubmit" :inline="true" :model="form">
                <el-row>
                    <el-col :span="8">
                        <FormItem
                            label="输入"
                            placeholder="请输入"
                            type="input"
                            :value="val"
                        >
                        </FormItem>
                        <el-form-item label="商品编号">
                            <el-input v-model.number.trim="form.id"></el-input>
                        </el-form-item>
                    </el-col>
                <el-col :span="8">
                    <el-form-item label="商品名称" >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-button @click="onSubmit">查询</el-button>
                        <el-button @click="onReset">重置</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
            </el-form>
        </header>
        <main>
            <el-table
                :data="tableData | transform"
                height="700"
                border
                align="center"
            >

                <el-table-column type="expand">
                    <template scope="props">

                        <el-table :data="props.row.skuList">
                            <el-table-column
                                label="图片"
                            >
                                <img :src="skuImg" >
                            </el-table-column>
                            <el-table-column
                                label="SKUID"
                                prop="skuId"
                            ></el-table-column>
                            <el-table-column
                                label="SKU名称"
                                prop="skuProperty"
                            ></el-table-column>
                            <el-table-column
                                label="SKU成本"
                                prop="costPriceYuan"
                            ></el-table-column>
                            <el-table-column
                                label="耀卡价"
                            ></el-table-column>
                            <el-table-column
                                label="剩余库存"
                                prop="stock"
                            ></el-table-column>
                            <el-table-column
                                label="正价售卖库存"
                                prop="total"
                            ></el-table-column>
                            <el-table-column
                                label="常售价"
                                prop="regularPrice"
                            ></el-table-column>
                            <el-table-column
                                label="促销价"
                            ></el-table-column>
                            <el-table-column
                                label="供应商SKUID"
                            ></el-table-column>
                            <el-table-column
                                    label="供应商"
                            ></el-table-column>
                        </el-table>
                    </template>

                </el-table-column>
                <el-table-column
                        label="ID"
                        prop="productId">
                </el-table-column>
                <el-table-column
                        label="商品名称"
                        width="200"
                        prop="title">
                </el-table-column>
                <el-table-column
                        label="所属类目"
                        width="200"
                        prop="allCategoryName">
                </el-table-column>
                <el-table-column
                        label="剩余总库存"
                        prop="totalStock">
                </el-table-column>
                <el-table-column
                        label="正价售卖库存"
                        prop="stock">
                </el-table-column>
                <el-table-column
                        label="仓库名称"
                        prop="productId">
                </el-table-column>
                <el-table-column
                        label="上架时间"
                        prop="onlineTime">
                </el-table-column>
                <el-table-column
                        label="操作"
                        prop="productId">
                </el-table-column>
                <el-table-column
                        label="当前状态"
                        prop="productId">
                </el-table-column>
            </el-table>
            <el-pagination>

            </el-pagination>
        </main>
    </div>
</template>

<script>
    import mockData from '../mockData/goodLists';
    import FormItem from './FormItem';

    import {transformDate} from '../api/index';


    console.log(mockData)
    export default {
        name: "AllGoods",
	    components: {FormItem},
	    data() {
        	return {
        		form: {
        			id: '',
                    name: ''
                },
                tableData : mockData.list,
                val: {
        			text:''
                }
            }
        },
        methods: {
        	onSubmit(){
                console.log(this.form)
            },
            onReset(){
        		this.form = {
			        id: '',
			        name: ''
		        };
            }
        },
        filters: {
        	transform(value){
        		return value.map((item)=>{
                    item.onlineTime = transformDate(item.onlineTime);
                    return item;
                })
            }
        }
    }
</script>

<style scoped>
    .table{
        font-size: 0;
    }
    .table label {
        width: 90px;
        color: #99a9bf;
    }
    .table .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        /*width: 50%;*/
    }
</style>
