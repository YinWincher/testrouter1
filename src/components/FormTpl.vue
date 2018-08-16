<template>
    <div>
        <el-form @submit="">
            <form-item v-for="item in models" :model="item.model" :value="item.value"></form-item>
        </el-form>
    </div>
</template>

<script>
    import FormItem from './FormItem';

	export default {
		name: "FormTpl",
        components : {
			FormItem,
        },
        props:{
			//表单模型
			models : Array
        },
        data(){
			return {
				formData : {
					goodId : '',
                    goodName : '',
                    skuId : '',
                    status : '',
					category : '',
                }
            }
        },
        methods : {
            formSubmit(){
                this.$emit('formSubmit')
            }
        }
	}
</script>

<style scoped>

</style>
