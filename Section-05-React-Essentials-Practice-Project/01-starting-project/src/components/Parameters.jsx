import InputGroup from "./InputGroup";

export default function Parameters({ params, changeParams }) {
    return <section id="user-input">
        <div className="input-group">
            <InputGroup label="Initial Investment" value={params.initialInvestment} handleChange={(event) => changeParams(event, 'initialInvestment')} />
            <InputGroup label="Annual Investment" value={params.annualInvestment} handleChange={(event) => changeParams(event, 'annualInvestment')} />
        </div>
        <div className="input-group">
            <InputGroup label="Expected Return" value={params.expectedReturn} handleChange={(event) => changeParams(event, 'expectedReturn')} />
            <InputGroup label="Duration" value={params.duration} handleChange={(event) => changeParams(event, 'duration')} />
        </div>
    </section>
}