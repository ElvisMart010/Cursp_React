import Header from "../Component/Header";

let titles = {
    'Tittle-1':'Curso intensivo de React - Talendig',
    'Tittle-2':'Hello world'

  }




  function HomePage() {
    return (

         <Header tittel_app={titles['Tittle-1']}/>

    );
  }

  export default HomePage;