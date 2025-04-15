export default function InputGroup({ label, value, handleChange }) {
    return <p>
        <label>{ label }</label>
        <input type="number" required value={value} onChange={ handleChange } />
    </p>
}