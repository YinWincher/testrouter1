<template>
    <el-form-item
        :label="model.label"
    >
        <el-input
            @change="changeFunction"
            v-if="model.type === 'input'"
            v-model="currentValue"
            v-bind="model"
        ></el-input>
        <el-input-number
            @change="changeFunction"
            v-model="currentValue"
            v-else-if="model.type === 'inputNumber'"
            v-bind="model"
        ></el-input-number>
        <el-radio-group
            v-model="currentValue"
            @change="changeFunction"
            v-bind="model"
            v-else-if="model.type === 'radio'"
        >
            <el-radio :key="item.value" v-for="item in model.options" :label="item.value">{{item.label}}</el-radio>
        </el-radio-group>
        <el-switch
            v-model="currentValue"
            v-bind="model"
            @change="changeFunction"
            v-else-if="model.type === 'switch'"
        ></el-switch>
        <el-checkbox-group
            v-model="currentValue"
            v-else-if="model.type === 'checkbox'"
            v-bind="model"
            @change="changeFunction"
        >
            <el-checkbox :key="item.value" v-for="item in model.options" :label="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>
        <el-select
            v-model="currentValue"
            v-else-if="model.type === 'select'"
            v-bind="model"
            @change="changeFunction"
        >
            <el-option :key="item.value" v-for="item in model.options" v-bind="item"></el-option>
        </el-select>
        <el-cascader
            v-model="currentValue"
            @change="changeFunction"
            v-bind="model"
            v-else-if="model.type === 'cascader'"
        >
        </el-cascader>
    </el-form-item>

</template>

<script>
	export default {
		name: "FormItem",
        props:{
			//表单模型
			model : Object,
            //值
            value:[Array,Number,String],
        },
        data(){
			const {model} = this;
			let currentValue ;
			switch (model.type) {
                case 'checkbox':
                	// debugger
                	currentValue = (Array.isArray(this.value)) ? this.value : [];
                	break;
                case 'cascader' :
	                currentValue = (Array.isArray(this.value)) ? this.value : [];
	                break;
                default :
                	currentValue = this.value || '';
			}
			return {
				currentValue ,
            }
        },
        methods : {
	        changeFunction(value){
	        	this.$emit('input',value)
            }
        },

	}
</script>

<style scoped>

</style>
