import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { ToastContainer } from 'react-toastify'

import RootSwitch from './navigation'
import { Fade, FullScreenLoading } from './components'
import { QUERY_ALL_STATIC_CONTENT } from './utils/gql'

import homeBackground from './img/home.jpg'
import resumeBackground from './img/resume.jpg'
import portfolioBackground from './img/portfolio.png'
import contactBackground from './img/contact.jpg'
import BlueLogoTransparentBG from './img/logo/BlueLogoTransparentBG.png'
import WhiteLogoTransparentBG from './img/logo/WhiteLogoTransparentBG.png'

const preloadImages = [
  homeBackground,
  resumeBackground,
  portfolioBackground,
  contactBackground,
  BlueLogoTransparentBG,
  WhiteLogoTransparentBG,
]

/**
 * Root view where it includes the constant navbar and footer
 * and the changing components based on routing
 */
class App extends Component {
  state = {
    imagesLoading: [],
  }

  componentDidMount() {
    preloadImages.forEach(image => this.loadImage(image))
  }

  shouldComponentUpdate(_, nextState) {
    return nextState.imagesLoading.length === preloadImages.length
  }

  loadImage(image) {
    const temp = new Image()
    temp.src = image
    temp.onload = () =>
      this.setState(prevState => ({
        imagesLoading: [...prevState.imagesLoading, true],
      }))
  }

  render() {
    const { imagesLoading } = this.state

    return (
      <Query query={QUERY_ALL_STATIC_CONTENT}>
        {({ loading, error, data }) => (
          <Fade>
            {// Check if API content are fetched and background images are loaded
            !loading &&
            !error &&
            imagesLoading.length === preloadImages.length ? (
              <div key={1}>
                <RootSwitch data={data} />
                <ToastContainer
                  toastClassName="toast-style"
                  closeButton={false}
                  autoClose={5000}
                />
              </div>
            ) : (
              <FullScreenLoading key={2} error={error} />
            )}
          </Fade>
        )}
      </Query>
    )
  }
}

export default App
