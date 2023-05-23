import './App.css';
import Loja from './app/Loja'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='sec'>
          <nav className='navbar fixed-top navbar-dark'>
            <a class="navbar-brand" href=''><img src='https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png' class="d-inline-block"></img>Amogus</a>
              <div className='nav-links'>
                  <ul>
                    <li class="nav-item"><a class="nav-link" href=''>HOME</a></li>
                    <li class="nav-item"><a class="nav-link" href=''>About</a></li>
                    <li class="nav-item"><a class="nav-link" href=''>Course</a></li>
                    <li class="nav-item"><a class="nav-link" href=''>IDK</a></li>
                    <li class="nav-item"><a class="nav-link" href=''>HOE</a></li>
                  </ul>
              </div>
              <div className='blur'></div> 
          </nav>
          <Loja/>
        </div>
      </header>
    </div>
  );
}

export default App;
