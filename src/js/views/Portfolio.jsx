import React, { Component } from 'react'
import { Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import androidIcon from '../../img/icons/android.svg'
import arrowLeftIcon from '../../img/icons/arrow_left.svg'
import arrowLeftWhiteIcon from '../../img/icons/arrow_left_white.svg'
import arrowRightIcon from '../../img/icons/arrow_right.svg'
import arrowRightWhiteIcon from '../../img/icons/arrow_right_white.svg'
import designIcon from '../../img/icons/design.svg'
import serverIcon from '../../img/icons/server.svg'
import webIcon from '../../img/icons/web.svg'
import playIcon from '../../img/icons/google-play.svg'
import githubIcon from '../../img/icons/github.svg'
import githubBlackIcon from '../../img/icons/github-colored.svg'

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  }
}
const mql = window.matchMedia(`(min-width: 768px)`)

/**
* Portfolio page rendering data dynamically
*/
class Portfolio extends Component {
  categories = ['All', 'Web', 'Android', 'Design', 'Backend']
  state = {
    currentCat: 'All',
    items: this.getItemsOfCategory('All'),
    selectedItem: null,
    showModal: false,
    isSmallScreen: false
  }

  mediaQueryChanged = this.mediaQueryChanged.bind(this)

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql, isSmallScreen: !mql.matches })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  // When screen size changes from sm to md(mql.matches = true) and from md to sm(mql.matches = false)
  mediaQueryChanged() {
    this.setState({isSmallScreen: !this.state.mql.matches})
  }

  handleCategoryOnClick(e, category) {
    e.preventDefault()
    this.setState({
      currentCat: category,
      items: this.getItemsOfCategory(category)
    })
  }

  getItemsOfCategory(category) {
    let allPortfolios = [ ...this.props.allPortfolios ]
    if (category === 'All') {
      return allPortfolios.sort((a, b) => a.order - b.order)
    }
    return allPortfolios.filter(a => a.categories.includes(category)).sort((a, b) => a.order - b.order)
  }

  handleItemOnClick(item) {
    this.setState({
      showModal: true,
      selectedItem: item
    })
  }

  handleModalOnHide() {
    this.setState({
      showModal: false,
      selectedItem: null
    })
  }

  getBackgroundImageStyle(item) {
    return `linear-gradient(-135deg, ${item.style.primaryColor}, ${item.style.secondaryColor})`
  }

  renderCategoryIcons(categories) {
    return categories.map((category, index) => {
      let icon, popover = (
        <Tooltip id="category" className="portfolio-modal-cat-icon-popover">
          {category}
        </Tooltip>
      )
      switch (category) {
        case 'Web':
          icon = webIcon
          break
        case 'Android':
          icon = androidIcon
          break
        case 'Design':
          icon = designIcon
          break
        case 'Backend':
          icon = serverIcon
          break
        default:
          icon = null
      }
      return (
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover} key={index}>
          <img alt={`${category} icon`} src={icon} />
        </OverlayTrigger>
      )
    })
  }

  renderItemLinkButtons(links) {
    return Object.keys(links).map((name, index) => {
      let obj = links[name]
      switch (obj.style) {
        case 'Website':
          return (
            <a className="portfolio-modal-link web-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}>
              <span><img alt="link logo" src={webIcon} />{name}</span>
            </a>
          )
        case 'Github':
          return (
            <a className="portfolio-modal-link github-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}>
              <span><img alt="link logo" src={githubIcon} />{name}</span>
            </a>
          )
        case 'Github Private':
          return (
            <a className="portfolio-modal-link github-private-link card clickable-card"
              key={index}>
              <span><img alt="link logo" src={githubBlackIcon} />{name}</span>
            </a>
          )
        case 'PlayStore':
          return (
            <a className="portfolio-modal-link play-store-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}>
              <span><img alt="link logo" src={playIcon} />Play Store</span>
            </a>
          )
        default:
          return null
      }
    })
  }

  handleModalLeftArrowClick() {
    const { items, selectedItem } = this.state
    this.setState({selectedItem: items[items.indexOf(selectedItem) - 1]})
  }

  handleModalRightArrowClick() {
    const { items, selectedItem } = this.state
    this.setState({selectedItem: items[items.indexOf(selectedItem) + 1]})
  }

  render() {
    const { items, selectedItem, currentCat, showModal, isSmallScreen } = this.state

    return (
      <div className="portfolio">
        <div className="portfolio-title-banner banner-title">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content container">
          <Row>
            <Col xs={12} md={10} mdOffset={1}>
              {/* Category Control */}
              <div className="portfolio-cat-control card">
                {
                  this.categories.map((item, index) => {
                    return (
                      <a className={`portfolio-cat-link ${currentCat === item ? 'portfolio-cat-link-active' : ''}`}
                        key={index}
                        onClick={event => this.handleCategoryOnClick(event, item)} >
                        {item}
                      </a>
                    )
                  })
                }
              </div>

              {/* Items Display */}
              <Row>
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}>
                  {
                    items.map((item, index) => {
                      return (
                        <Col className="portfolio-item-wrapper" xs={6} sm={4} md={3} key={index}>
                          <div className="portfolio-item card clickable-card"
                            onClick={e => this.handleItemOnClick(item)}
                            style={{
                              backgroundImage: this.getBackgroundImageStyle(item)
                            }}>
                            <img alt="logo" src={item.logo} />
                            <h5>{item.title}</h5>
                          </div>
                        </Col>
                      )
                    })
                  }
                </ReactCSSTransitionGroup>
              </Row>

            </Col>
          </Row>
        </div>

        {/* Item Details Modal */}
        <Modal containerClassName="portfolio-modal-wrapper"
          show={showModal}
          onHide={this.handleModalOnHide.bind(this)}
          bsStyle="lg">
          {selectedItem ?
            <Row className="portfolio-modal portfolio-modal-nav-button-vertical-aligner card"
              style={{
                backgroundImage: this.getBackgroundImageStyle(selectedItem)
              }}>
              <Col xs={1}>
                <button className="portfolio-modal-nav-button modal-left-button"
                  style={{
                    display: items.indexOf(selectedItem) <= 0 ? 'none' : 'block'
                  }}
                  onClick={this.handleModalLeftArrowClick.bind(this)}>
                  <img alt="left arrow"
                    src={isSmallScreen ? arrowLeftWhiteIcon : arrowLeftIcon} />
                </button>
              </Col>

              <Col className="portfolio-modal-main" xs={10}>
                <Modal.Header closeButton>
                  <Modal.Title />
                </Modal.Header>
                <ReactCSSTransitionReplace transitionName="fade-up"
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}>
                  <Modal.Body className="portfolio-modal-body" key={selectedItem.order}>
                    <Row>
                      <Col className="portfolio-modal-body-col" xs={12} sm={4}>
                        <img alt="logo" src={selectedItem.logo} />
                        <div className="portfolio-modal-body-cat-icons">
                          {this.renderCategoryIcons(selectedItem.categories)}
                        </div>
                        <div className="portfolio-modal-body-links">
                          {this.renderItemLinkButtons(selectedItem.links)}
                        </div>
                      </Col>
                      <Col className="portfolio-modal-body-col" xs={12} sm={8}>
                        <h2>{selectedItem.title}</h2>
                        <h5>{selectedItem.time}</h5>
                        <div>
                          <p className="portfolio-modal-body-desc">{selectedItem.desc}</p>
                          <p>Keywords:</p>
                          <p>{selectedItem.keywords}</p>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                </ReactCSSTransitionReplace>

              </Col>

              <Col xs={1}>
                <button className="portfolio-modal-nav-button modal-right-button"
                  style={{
                    display: items.indexOf(selectedItem) >= (items.length - 1) ? 'none' : 'block'
                  }}
                  onClick={this.handleModalRightArrowClick.bind(this)}>
                  <img alt="right arrow"
                    src={isSmallScreen ? arrowRightWhiteIcon : arrowRightIcon} />
                </button>
              </Col>
            </Row>
            :
            null
          }
        </Modal>
      </div>
    )
  }
}

export default Portfolio
