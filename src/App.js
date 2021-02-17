//Modules
import { Grommet, Main } from 'grommet';
import { Route, Switch } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

//Components
import Headed from './components/elements/Header';
import Footed from './components/elements/Footer';

//Pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactPage from './pages/ContactPage/ContactPage';

const theme = {
  global: {
    font: {
      family: 'Helvetica',
    },
  },
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
}

function App() {

  return (
    <Grommet theme={theme}>
      <Headed />
      <Main>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <Route path="/nosotros" component={AboutPage} />
                <Route path="/servicios" component={ServicesPage} />
                <Route path="/contacto" component={ContactPage} />
              </Switch>
            </AnimatePresence>
          )} />
      </Main>
      <Footed />
    </Grommet>
  );
}

export default App;
