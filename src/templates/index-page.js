import React from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go';
import { FaVideo, FaLightbulb, FaCompass, FaClock } from 'react-icons/fa';
import Context from '../components/Context'
import ReactPlayer from 'react-player'

export const IndexPageTemplate = ({
  image,
  ...props
}) => (
    <Context.Consumer>
      {({ language }) => {
        const content = props[language]
        return (
          <React.Fragment>
            <div className="landing background-image" />
            <section className="landing hero is-fullheight">
              <div className="landing hero-body">
                <div className="container">
                  <h1 className="title has-text-light is-size-1">{content.title}</h1>
                  <h2 className="subtitle has-text-grey-light">{content.heading}</h2>
                </div>
              </div>
              <GoChevronDown className="down-arrow" onClick={() => alert('hey')} />
            </section>
            <section className="section engagement">
              <div className="container">
                <h1 className="lead is-size-1-desktop is-size-2-tablet is-size-4-mobile has-text-centered">We are a video production company that helps businesses achieve the best video results.</h1>
              </div>
            </section>
            <section className="miniportfolio hero">
              <div className="miniportfolio hero-body">
                <div className="container">
                  <h1 className="title is-size-2">Our recent work</h1>
                  <h2 className="subtitle">Take a look at our recent projects</h2>
                  <div className="columns is-desktop is-multiline">
                    <div className="column is-half">
                      <ReactPlayer url='https://www.youtube.com/watch?v=em3w30_z0dw' controls />
                    </div>
                    <div className="column is-half">
                      <ReactPlayer url='https://vimeo.com/150799305' />
                    </div>
                    <div className="column is-half">
                      <ReactPlayer url='https://www.youtube.com/watch?v=GNXoT_iQJFc' />
                    </div>
                    <div className="column is-half">
                      <ReactPlayer url='https://www.youtube.com/watch?v=v9Zr8vFbx_A' />
                    </div>
                  </div>
                  <div className="centered-button">
                    <a class="button is-medium is-info">View more</a>
                  </div>
                </div>
              </div>
            </section>
            <div className="qualities-background">
              <section className="section qualities">
                <div className="container">
                  <div className="columns is-multiline">
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <InfoCard Icon={FaVideo} title="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uteru labore et dolore magna aliqua. Uteru enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <InfoCard Icon={FaClock} title="Veggie Divina" content="Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip." />
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <InfoCard Icon={FaLightbulb} title="Carne Zest" content="Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye." />
                    </div>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <InfoCard Icon={FaCompass} title="Viral Dictum" content="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris." />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </React.Fragment>
        )
      }}
    </Context.Consumer>
  )

const InfoCard = ({ Icon, title, content }) => (
  <div style={{ boxShadow: "none" }} className="card is-inverted">
    <div className="card-content">
      <div style={{ padding: "1em 0" }}>
        <Icon size="2em" className="has-text-grey-light has-icon-centered" />
      </div>
      <div style={{ paddingTop: "0.5em", paddingBottom: "1.5em" }}>
        <p class="title has-text-light has-text-centered">{title}</p>
      </div>
      <p style={{ lineHeight: 1.5 }} class="subtitle has-text-grey-light">{content}</p>
    </div>
  </div>
)

const contentShape = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

IndexPageTemplate.propTypes = {
  image: PropTypes.string,
  pl: PropTypes.shape(contentShape).isRequired,
  en: PropTypes.shape(contentShape).isRequired
}