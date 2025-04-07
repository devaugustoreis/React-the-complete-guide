export default function Log({ turns }) {
    function renderTurns() {
        return turns.map((turn) => {
            const { square, player } = turn
            const { row, col } = square
 
            return <li key={`${row},${col}`}>
                {player} jogou em {row}, {col}
            </li>
        })
    }
    
    return <ol id="log">
        { renderTurns() }
    </ol>
}