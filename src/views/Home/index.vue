<template>
    <div class="home">
        <h3>Select field size</h3>
        <el-select v-model="value" placeholder="Select field size">
            <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
        </el-select>
        <router-link :to="{name: 'game', params: {size: value}}">
            <el-button>Start</el-button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                options: [4,6,8,10],
                value: 4
            }
        }
    }
</script>

<style lang="sass" src="./styles.sass" scoped></style>
