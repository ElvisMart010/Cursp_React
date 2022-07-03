import logo from '../logo.svg';




function Header (props){
    

let description = "Este es un sitio dedicado al aprendizaje de los estudiantes de Talendig"

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >{props.tittel_app}
          </a>
            
            <p>{description}</p>
        </header>
      </div>

    )
}

export default Header;