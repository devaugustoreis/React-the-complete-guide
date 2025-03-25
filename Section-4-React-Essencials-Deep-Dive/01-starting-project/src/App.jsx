import Header from "./components/Header/Header";
import CoreConceptsList from './components/CoreConceptsList';
import Examples from './components/Examples';


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsList />
        <Examples />
      </main>
    </>
  );
}

export default App;