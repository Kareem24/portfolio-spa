import { useEffect } from 'react';
import Header from '../layout/Header';
import Hero from '../components/hero/Hero';
import Service from '../components/service/Service';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Portfolio from '../components/portfolio/Portfolio';
import News from '../components/news/News';
import Contact from '../components/contact/Contact';
import Footer from '../layout/Footer';
import { useDispatch } from 'react-redux';
import { setLight } from '../store/counter/ImageSlice';

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLight())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <About />
      <Experience />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
