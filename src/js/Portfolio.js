import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import androidIcon from '../img/icons/android.svg';
import designIcon from '../img/icons/design.svg';
import serverIcon from '../img/icons/server.svg';
import webIcon from '../img/icons/web.svg';
import playIcon from '../img/icons/google-play.svg';
import githubIcon from '../img/icons/github.svg';

/**
* Portfolio page rendering data dynamically
*/
class Portfolio extends Component {
  categories = ['All', 'Web', 'Android', 'Design', 'Backend'];
  state = {
    currentCat: 'All',
    items: this.getItemsOfCategory('All'),
    selectedItem: null,
    showModal: false
  }

  handleCategoryOnClick(e, category) {
    e.preventDefault();
    this.setState({
      currentCat: category,
      items: this.getItemsOfCategory(category)
    });
  }

  getItemsOfCategory(category) {
    if (category === 'All') {
      return this.props.portfolioContent.sort((a, b) => a.order - b.order);
    }
    return this.props.portfolioContent.filter(a => a.categories.includes(category)).sort((a, b) => a.order - b.order);
  }

  handleItemOnClick(item) {
    this.setState({
      showModal: true,
      selectedItem: item
    });
  }

  handleModalOnHide() {
    this.setState({
      showModal: false,
      selectedItem: null
    });
  }

  getBackgroundImageStyle(item) {
    return `linear-gradient(-135deg, ${item.style.primaryColor}, ${item.style.secondaryColor})`;
  }

  getCategoryIcons(categories) {
    return categories.map((category, index) => {
      let icon, popover = (
        <Tooltip className="portfolio-modal-cat-icon-popover">
          {category}
        </Tooltip>
      );
      switch (category) {
        case 'Web':
          icon = webIcon;
          break;
        case 'Android':
          icon = androidIcon;
          break;
        case 'Design':
          icon = designIcon;
          break;
        case 'Backend':
          icon = serverIcon;
          break;
        default:
          icon = null;
      }
      return (
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
          <img key={index} alt={`${category} icon`} src={icon} />
        </OverlayTrigger>
      )
    })
  }

  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-title-banner banner-title">
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content container">
          <Row>
            <Col xs={12} sm={10} smOffset={1}>
              {/* Category Control */}
              <div className="portfolio-cat-control card">
                {
                  this.categories.map((item, index) => {
                    return (
                      <a className={`portfolio-cat-link ${this.state.currentCat === item ? 'portfolio-cat-link-active' : ''}`}
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
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  {
                    this.state.items.map((item, index) => {
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
          show={this.state.showModal}
          onHide={this.handleModalOnHide.bind(this)}
          bsStyle="lg">
          {this.state.selectedItem ?
            <div className="portfolio-modal card"
              style={{
                backgroundImage: this.getBackgroundImageStyle(this.state.selectedItem)
              }}>
              <Modal.Header closeButton>
                <Modal.Title />
              </Modal.Header>
              <Modal.Body className="portfolio-modal-body">
                <Row>
                  <Col className="portfolio-modal-body-col" xs={12} sm={4} md={3} mdOffset={1}>
                    <img alt="logo" src={this.state.selectedItem.logo} />
                    <div className="portfolio-modal-body-cat-icons">
                      {this.getCategoryIcons(this.state.selectedItem.categories)}
                    </div>
                  </Col>
                  <Col className="portfolio-modal-body-col" xs={12} sm={8} md={7}>
                    <h2>{this.state.selectedItem.title}</h2>
                    <h5>{this.state.selectedItem.time}</h5>
                    <div>
                      <p className="portfolio-modal-body-desc">{this.state.selectedItem.desc}</p>
                      <p>Keywords:</p>
                      <p>{this.state.selectedItem.keywords}</p>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
            </div>
            :
            null
          }
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolioContent: state.staticContent.portfolioContent
  }
}

export default connect(mapStateToProps)(Portfolio);
