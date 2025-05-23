import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";


export default function CoreConceptsList() {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    )
}