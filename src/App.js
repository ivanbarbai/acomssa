//Modules
import { Grommet, Main } from 'grommet';
import { Route, Switch } from 'react-router';
import { AnimatePresence } from 'framer-motion';

//Components
import Headed from './components/elements/Header';
import Footed from './components/elements/Footer';
import { Motioned } from './components/framer/Styles';

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

function App() {

  return (
    <Grommet theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Headed />
        <Main>
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <HomePage />} />
                <Route path="/nosotros" render={() => <AboutPage />} />
                <Route path="/servicios" render={() => <ServicesPage />} />
                <Route path="/contacto" component={ContactPage} />
              </Switch>
            )} />
        </Main>
        <Footed />
      </AnimatePresence>
    </Grommet>
  );
}

export default App;
