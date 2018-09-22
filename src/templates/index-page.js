import React from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go';
import { FaVideo, FaLightbulb, FaGraduationCap, FaClock } from 'react-icons/fa';
import { LanguageConsumer } from '../components/Context'
import VideoPlayer from '../components/VideoPlayer'
import { Link } from 'gatsby'

const VIDEOS = [
  'https://www.youtube.com/watch?v=em3w30_z0dw',
  'https://vimeo.com/150799305',
  'https://www.youtube.com/watch?v=GNXoT_iQJFc',
  'https://www.youtube.com/watch?v=v9Zr8vFbx_A'
]

const INFO_CARDS = [
  {
    Icon: FaVideo,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uteru labore et dolore magna aliqua. Uteru enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    Icon: FaLightbulb,
    title: "Veggie Divina",
    content: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."
  },
  {
    Icon: FaGraduationCap,
    title: "Carne Zest",
    content: "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye."
  },
  {
    Icon: FaClock,
    title: "Viral Dictum",
    content: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
  },
]

export const IndexPageTemplate = ({
  image,
  ...props
}) => (
    <LanguageConsumer>
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
              <GoChevronDown className="down-arrow" onClick={() => scrollToPage(1)} />
            </section>
            <Section className="engagement">
              <h1 className="lead is-size-1-desktop is-size-2-tablet is-size-4-mobile has-text-centered">We are a video production company that helps businesses achieve the best video results.</h1>
            </Section>
            <Section className="miniportfolio">
              <h1 className="title is-size-2">Our recent work</h1>
              <h3 className="subtitle">Take a look at our recent projects</h3>
              <div className="columns is-multiline">
                {VIDEOS.map(url =>
                  <div className="column is-half">
                    <VideoPlayer url={url} />
                  </div>
                )}
              </div>
              <div className="centered-button">
                <Link to="/portfolio" class="button is-medium is-info">View more</Link>
              </div>
            </Section>
            <div className="qualities-background">
              <Section className="qualities">
                <h1 className="title is-size-1 has-text-light has-text-centered">
                  We provide
                  </h1>
                <div className="columns is-multiline">
                  {INFO_CARDS.map(props =>
                    <div className="column is-one-quarter-desktop is-half-tablet">
                      <InfoCard {...props} />
                    </div>
                  )}
                </div>
              </Section>
            </div>
            <Section className="clients">
              <h1 className="title is-size-2 has-text-centered">We worked with</h1>
            </Section>
          </React.Fragment>
        )
      }}
    </LanguageConsumer>
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

InfoCard.propTypes = {
  Icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

const Section = ({ className, children, ...props }) => (
  <section className={`${className} section`} {...props}>
    <div className="container">
      {children}
    </div>
  </section>
)

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const scrollToPage = num => window.scroll({ left: 0, top: num * window.innerHeight, behavior: 'smooth' })