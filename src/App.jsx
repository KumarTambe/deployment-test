import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import MovieDetail from './MovieDetail.jsx';
import MovieList from './MovieList.jsx';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/movies'>MovieList</Link>
            </nav>
            <Routes>
                <Route path='/movies' element={<MovieList />} />
                <Route path='/movies/:id' element={<MovieDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;