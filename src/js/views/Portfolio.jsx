import React, { Component } from 'react'
import { Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import { Footer } from '../components'

window.matchMedia = window.matchMedia || {
  matches: false,
  addListener: () => {},
  removeListener: () => {},
}
const mql = window.matchMedia(`(min-width: 768px)`)

/**
 * Portfolio page rendering data dynamically
 */
class Portfolio extends Component {
  mediaQueryChanged = this.mediaQueryChanged.bind(this)

  categories = ['All', 'Web', 'Android', 'Design', 'Backend']

  state = {
    currentCat: 'All',
    items: this.getItemsOfCategory('All'),
    selectedItem: null,
    showModal: false,
    isSmallScreen: false,
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql, isSmallScreen: !mql.matches })
  }

  componentWillUnmount() {
    const { mql } = this.state
    mql.removeListener(this.mediaQueryChanged)
  }

  getBackgroundImageStyle(item) {
    return `linear-gradient(-135deg, ${item.style.primaryColor}, ${
      item.style.secondaryColor
    })`
  }

  getItemsOfCategory(category) {
    const { allPortfolios } = this.props
    if (category === 'All') {
      return allPortfolios.sort((a, b) => a.order - b.order)
    }
    return allPortfolios
      .filter(a => a.categories.includes(category))
      .sort((a, b) => a.order - b.order)
  }

  handleModalOnHide = () => {
    this.setState({
      showModal: false,
      selectedItem: null,
    })
  }

  handleCategoryOnClick(e, category) {
    e.preventDefault()
    this.setState({
      currentCat: category,
      items: this.getItemsOfCategory(category),
    })
  }

  handleItemOnClick(item) {
    this.setState({
      showModal: true,
      selectedItem: item,
    })
  }

  // When screen size changes from sm to md(mql.matches = true) and from md to sm(mql.matches = false)
  mediaQueryChanged() {
    this.setState(prevState => ({ isSmallScreen: !prevState.mql.matches }))
  }

  handleModalLeftArrowClick() {
    const { items, selectedItem } = this.state
    this.setState({ selectedItem: items[items.indexOf(selectedItem) - 1] })
  }

  handleModalRightArrowClick() {
    const { items, selectedItem } = this.state
    this.setState({ selectedItem: items[items.indexOf(selectedItem) + 1] })
  }

  renderCategoryIcons(categories) {
    let icon
    let popover

    return categories.map(category => {
      popover = (
        <Tooltip id="category" className="portfolio-modal-cat-icon-popover">
          {category}
        </Tooltip>
      )

      switch (category) {
        case 'Web':
          icon = 'web'
          break
        case 'Android':
          icon = 'android'
          break
        case 'Design':
          icon = 'design'
          break
        case 'Backend':
          icon = 'server'
          break
        default:
          icon = null
      }
      return (
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="bottom"
          overlay={popover}
          key={category}
        >
          <span className={`portfolio-category-icon icon-${icon}`} />
        </OverlayTrigger>
      )
    })
  }

  renderItemLinkButtons(links) {
    return Object.keys(links).map(name => {
      const obj = links[name]
      switch (obj.style) {
        case 'Website':
          return (
            <a
              className="portfolio-modal-link web-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={obj.url}
            >
              <div>
                <span className="font-icon icon-web" />
                <p>{name}</p>
              </div>
            </a>
          )
        case 'Github':
          return (
            <a
              className="portfolio-modal-link github-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={obj.url}
            >
              <div>
                <span className="font-icon icon-github" />
                <p>{name}</p>
              </div>
            </a>
          )
        case 'Github Private':
          return (
            <a
              className="portfolio-modal-link github-private-link card clickable-card"
              key={obj.url}
              href={obj.url}
            >
              <div>
                <span className="font-icon icon-github" />
                <p>{name}</p>
              </div>
            </a>
          )
        case 'PlayStore':
          return (
            <a
              className="portfolio-modal-link play-store-link card clickable-card"
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={obj.url}
            >
              <div>
                <span className="font-icon icon-android" />
                <p>Play Store</p>
              </div>
            </a>
          )
        default:
          return null
      }
    })
  }

  render() {
    const {
      items,
      selectedItem,
      currentCat,
      showModal,
      isSmallScreen,
    } = this.state

    return (
      <div className="portfolio">
        <div className="portfolio-title-banner banner-title">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content container">
          <Row>
            <Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
              {/* Category Control */}
              <div className="portfolio-cat-control card">
                {this.categories.map(item => (
                  <button
                    className={`portfolio-cat-link ${
                      currentCat === item ? 'portfolio-cat-link-active' : ''
                    }`}
                    key={item}
                    type="button"
                    onClick={event => this.handleCategoryOnClick(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Items Display */}
              <Row>
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}
                >
                  {items.map((item, index) => (
                    <Col
                      className="portfolio-item-wrapper"
                      xs={6}
                      sm={4}
                      md={3}
                      key={item._id}
                    >
                      <div
                        className="portfolio-item card clickable-card"
                        onClick={() => this.handleItemOnClick(item)}
                        onKeyPress={() => this.handleItemOnClick(item)}
                        role="button"
                        tabIndex={index + 10}
                        style={{
                          backgroundImage: this.getBackgroundImageStyle(item),
                        }}
                      >
                        <img alt="logo" src={item.logo} />
                        <h5>{item.title}</h5>
                      </div>
                    </Col>
                  ))}
                </ReactCSSTransitionGroup>
              </Row>
            </Col>
          </Row>
        </div>

        {/* Item Details Modal */}
        <Modal
          containerClassName="portfolio-modal-wrapper"
          show={showModal}
          onHide={this.handleModalOnHide}
          bsStyle="lg"
        >
          {selectedItem ? (
            <Row
              className="portfolio-modal portfolio-modal-nav-button-vertical-aligner card"
              style={{
                backgroundImage: this.getBackgroundImageStyle(selectedItem),
              }}
            >
              <Col xs={1}>
                <button
                  className="portfolio-modal-nav-button modal-left-button"
                  style={{
                    display:
                      items.indexOf(selectedItem) <= 0 ? 'none' : 'block',
                  }}
                  type="button"
                  onClick={this.handleModalLeftArrowClick.bind(this)}
                >
                  <span
                    className={`portfolio-modal-arrow icon-left-open ${
                      isSmallScreen ? 'white' : 'blue'
                    }`}
                  />
                </button>
              </Col>

              <Col className="portfolio-modal-main" xs={10}>
                <Modal.Header closeButton>
                  <Modal.Title />
                </Modal.Header>
                <ReactCSSTransitionReplace
                  transitionName="fade-up"
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}
                >
                  <Modal.Body
                    className="portfolio-modal-body"
                    key={selectedItem.order}
                  >
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
                          <p className="portfolio-modal-body-desc">
                            {selectedItem.desc}
                          </p>
                          <p>Keywords:</p>
                          <p>{selectedItem.keywords}</p>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                </ReactCSSTransitionReplace>
              </Col>

              <Col xs={1}>
                <button
                  className="portfolio-modal-nav-button modal-right-button"
                  style={{
                    display:
                      items.indexOf(selectedItem) >= items.length - 1
                        ? 'none'
                        : 'block',
                  }}
                  type="button"
                  onClick={this.handleModalRightArrowClick.bind(this)}
                >
                  <span
                    className={`portfolio-modal-arrow icon-right-open ${
                      isSmallScreen ? 'white' : 'blue'
                    }`}
                  />
                </button>
              </Col>
            </Row>
          ) : null}
        </Modal>

        <Footer />
      </div>
    )
  }
}

export default Portfolio
