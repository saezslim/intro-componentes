/*import Header from './components/Header.jsx'
import Main from './components/Main1.jsx'*/
import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Post from './components/Post'
import Main from './components/Principal'

function App() {


  return (
    <>
      <Header />
      <div className='container'>
        <header>Cristian</header>
        <Main />
        <Aside />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Footer />
      </div>
    </>
  )
}

export default App
