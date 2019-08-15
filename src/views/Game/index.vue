<template>
    <div class="game">
        <div class="wrap" v-if="!invalidSize">
            <div class="field" v-if="!getGameEnd">
                <div class="row" v-for="(row, rowIndex) in getField" :key="row.id" >
                    <div
                            class="cell"
                            :class="{'hide': col.hidden}"
                            v-for="(col, colIndex) in row"
                            :key="col.id"
                            @click="openCell(col.number, rowIndex, colIndex)">
                        <div class="front">{{col.number}}</div>
                        <div class="back">?</div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h3>You won</h3>

            </div>
            <div class="actions">
                <el-button @click="restart()">Restart</el-button>
                <router-link :to="{name: 'home'}">
                    <el-button>Select other field size</el-button>
                </router-link>
            </div>
        </div>
        <div v-else>
            <h3>Invalid Field size</h3>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'game',
    data () {
          return {
              size: parseInt(this.$route.params.size),
              lastStep: null,
              allowClick: true,
              invalidSize: false
          }
    },
    computed: {
        ...mapGetters(['getField', 'getGameEnd'])
    },
    methods: {
        ...mapMutations(['setField', 'setCellOpened', 'setCellClosed']),
        restart () {
            this.lastStep = null
            this.allowClick = true
            this.setField(this.size)
        },
        openCell (number, row, col) {
            if (!this.allowClick) return
            if (this.lastStep) {
                if (row == this.lastStep.row && col == this.lastStep.col) return
                this.setCellOpened({row, col})
                if (number == this.lastStep.number) {
                    this.lastStep = null
                } else {
                    this.allowClick = false
                    setTimeout(() => {
                        this.setCellClosed({row, col})
                        this.setCellClosed({row: this.lastStep.row, col: this.lastStep.col})
                        this.allowClick = true
                        this.lastStep = null
                    }, 1000)
                }
            } else {
                this.lastStep = {
                    number: number,
                    row: row,
                    col: col
                }
                this.setCellOpened({row, col})
            }

        }
    },
    created () {
        if (parseInt(this.$route.params.size)%2) this.invalidSize = true
        this.setField(parseInt(this.$route.params.size))
    }
}
</script>

<style lang="sass" src="./styles.sass"></style>
