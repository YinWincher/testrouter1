<template>
    <el-form-item
        label="label"
    >
        <el-input
                @change="changeFunction"
                v-if="type === 'input'"
                v-model="currentValue"
                placeholder="placeholder"
        >
        </el-input>
    </el-form-item>

</template>

<script>
	export default {
		name: "FormItem",
        props:{
			type:'',
            label:'',
            placeholder:'',
            value:[Array,Number,String],
        },
        data(){
			return {
				currentValue: this.value.text || '',
            }
        },
        methods : {
			setValue(){
			    this.currentValue = this.value;
            },
	        changeFunction(value){
	        	this.$emit('input',this.currentValue)
            }
        },
        watch : {
			'value' : function(){
				this.setValue()
            }
        }
	}
</script>

<style scoped>

</style>
