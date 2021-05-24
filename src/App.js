import './App.css'
import {Home, SearchPage, Header, Footer, NotFound} from './GetComponents'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <div className='app'>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/search'>
                            <SearchPage />
                        </Route>
                        <Route path='*'>
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </>
    )
}

export default App
