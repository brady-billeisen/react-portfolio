import Carousel from 'react-bootstrap/Carousel';
import granularGarden from '../images/Granular-Garden-Feed.png'
import esoClassGuides from '../images/eso-class-guides-app.png'
import JATE from '../images/J-A-T-E.png'

function Home() {
    return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={granularGarden} id='carousel-img' />
          <Carousel.Caption id='home-captions'>
            <h3>Granular Garden</h3>
            <p>A music streaming platform made using the MVC framework, Express.js, Handlebars, and more technologies!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={esoClassGuides} id='carousel-img' />
          <Carousel.Caption id='home-captions'>
            <h3>ESO ClassGuides</h3>
            <p>An app tailored specifically to help players of the game Elder Scrolls Online by pulling the most popular posts relevant to your class choice, from Reddit & Youtube!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={JATE} id='carousel-img' />
          <Carousel.Caption id='home-captions'>
            <h3>JATE (Just Another Text Editor)</h3>
            <p>A progressive web app text editor made for working with JavaScript!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home