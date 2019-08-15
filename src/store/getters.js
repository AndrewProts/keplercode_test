export default {
    getField: state => state.field,
    getGameEnd: state => {
        let isWin = true
        state.field.map(e => {
            e.map(x => {
                if (x.hidden) isWin = false
            })
        })
        return isWin
    }
}
