<template>
    <div v-show="list.length">
        <div class="list-control">
            <div class="list-control-order">
                <span>排序：</span>
                <span
                    class="list-control-order-item"
                    :class="{on:order === ''}"
                    @click="handleOrderDefault"
                >
                    默认
                </span>

                <span
                    class="list-control-order-item"
                    :class="{on:order === 'sales'}"
                    @click="handleOrderSales"
                >
                    销量
                    <template v-if="order === 'sales'">下降</template>
                </span>

                <span
                    class="list-control-order-item"
                    :class="{on:order.indexOf('cost')>-1}"
                    @click="handleOrderCost"
                >
                    价格
                    <template v-if="order === 'cost-asc'">上升</template>
                    <template v-if="order === 'cost-desc'">下降</template>
                </span>

            </div>
        </div>
        <Product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></Product>

        <div
            class="product-not-found"
            v-show="!filteredAndOrderedList.length"
        >
            暂无相关商品
        </div>

    </div>
</template>

<script>
//导入商品简介组件
import Product from '../components/product.vue'
export default {
    data () {
        return {
            //排序依据
            //sales 销量
            //cost-desc 价格降序
            //cost-asc 价格升序
            order:''
        }
    },
    components: {
        Product
    },
    computed: {
        list(){
            //从vuex获取商品列表数据
            return this.$store.state.productList
        },
        filteredAndOrderedList(){
            //复制原始数据
            let list = [...this.list];
            //排序
            if(this.order!==''){
                if(this.order === 'sales'){
                    list = list.sort((a,b)=>b.sales - a.sales);
                }else if(this.order === 'cost-desc'){
                    list = list.sort((a,b)=>{b.cost - a.cost});
                }else if(this.order === 'cost-asc'){
                    list = list.sort((a,b)=>{a.cost - b.cost});
                }
            }
            return list;
        }
    },
    mounted () {
        //初始化，action请求数据
        this.$store.dispatch('getProductList');
    },
    methods: {
        handleOrderDefault(){
            this.order = '';
        },
        handleOrderSales(){
            this.order = 'sales'
        },
        handleOrderCost(){
            if(this.order === 'cost-desc'){
                this.order = 'cost-asc'
            }else{
                this.order = 'cost-desc'
            }
        }
    }
}
</script>

<style scoped>
.product-not-found{
    text-align: center;
    padding: 32px;
}
.list-control{
    background: #fff;
    border-radius: 6px;
    margin: 16px;
    padding: 16px;
    box-shadow : 0 1px 1px rgba(0,0,0,.2);
}
.list-control-filter{
    margin-bottom: 16px;
}
.list-control-filter-item,.list-control-order-item{
    cursor: pointer;
    display: inline-block;
    border:1px solid #e9eaec;
    border-radius: 4px;
    margin-right: 6px;
    padding: 2px 6px;
}
.list-control-filter-item.on,.list-control-order-item.on{
    background: #f2352e;
    border: 1px solid #f2352e;
    color: #fff;
}
</style>