import './App.css'
import { Home } from './Home/Home'
import { Navegacion } from './Nav/Navegacion'
import { About } from './About/About'
import { Contact } from './Contact/Contact'

function App() {

  return (
    <>

      {/* Navegacion */}
      <Navegacion />

      {/* Home */}
      <main className='main main-container'>
        <Home />
        <img className='perfil' src='../public/img/perfil-2.png' />
        {/* About */}
      </main>

      <section className='main main-about'>
        <div className='img-about-div'>
          <img src='../public/img/about-2.png' className='about-img' />
        </div>
        <About />
      </section>

      <section className='main main-contact'>
        <Contact />
        <img src='../public/img/br.png' className='thanks-img' />
      </section>

    </>
  )
}

export default App
