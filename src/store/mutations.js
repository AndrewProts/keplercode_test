/* eslint-disable */
export default {
    setField (state, size) {
        let counter = 0
        let toggler = false
        let numbersArr = new Array(size * size)
            .fill(0)
            .map(e => {
                toggler = !toggler
                if (toggler) counter++
                return e = counter
            }).sort( () => Math.random() - 0.5)
        counter = 0
        let arr = []
        for (let i = 0; i < size; i++ ) {
            arr.push([])
            for(let j = 0; j < size; j++) {
                arr[i][j] = {
                    number: numbersArr[counter++],
                    hidden: true
                }
            }
        }
        state.field = arr
    },
    setCellOpened (state, {row, col}) {
        state.field[row][col].hidden = false
    },
    setCellClosed (state, {row, col}) {
        state.field[row][col].hidden = true
    }
}
