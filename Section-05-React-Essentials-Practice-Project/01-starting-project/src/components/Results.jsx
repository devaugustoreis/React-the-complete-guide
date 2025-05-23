import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ params }) {
    const data = calculateInvestmentResults(params)

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            { 
                data.map(row => {
                const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - params.initialInvestment
                const totalAmountInvested = row.valueEndOfYear - totalInterest

                return (
                    <tr key={ row.year }>
                        <td>{ row.year }</td>
                        <td>{ formatter.format(row.valueEndOfYear) }</td>
                        <td>{ formatter.format(row.interest) }</td>
                        <td>{ formatter.format(totalInterest) }</td>
                        <td>{ formatter.format(totalAmountInvested) }</td>
                    </tr>
                )}) 
            }
        </tbody>
    </table>
}