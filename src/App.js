import {createContext} from "react";
import styles from './App.module.css';
import Index from "./ui/pages";
import {useApp} from "./data/hooks/useApp.page";

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();
  return (
    <>
      <header className={styles['header']}>
          <img className={styles['logo']} src={'images/caveira.jpg'}/>
          <h1>Dust<span>Radio</span></h1>
      </header>
        <AppContext.Provider value={useAppValues}>
                <Index />
        </AppContext.Provider>

    </>
  );
}

export default App;
