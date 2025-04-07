import { useState } from 'react';

import { EXAMPLES } from "../data";
import Section from './Section';
import Tabs from './Tabs';
import TabButton from "./TabButton";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton)
    }

    return (
      <Section title={'Examples'} id="examples">
        <Tabs
          buttons={
            <>
              <TabButton isActive={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
              <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
              <TabButton isActive={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
              <TabButton isActive={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </>
          }
        >

        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        </Tabs>

      </Section>
    )
}