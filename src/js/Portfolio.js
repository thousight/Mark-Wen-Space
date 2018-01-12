import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

/**
* Portfolio page rendering data dynamically
*/
class Portfolio extends Component {
	categories = ['All', 'Web', 'Android', 'Design', 'Backend'];
	state = {
		currentCat: 'All'
	}

	handleCategoryOnClick(e, category) {
		e.preventDefault();
		this.setState({currentCat: category});
	}

	getItemsOfCategory(category) {
		if (category === 'All') {
			return this.props.portfolioContent.sort((a, b) => a.order - b.order);
		}
		return this.props.portfolioContent.filter(a => a.categories.includes(category)).sort((a, b) => a.order - b.order);
	}

	render() {
		return (
			<div className="portfolio">
				<div className="portfolio-title-banner">
					<h1 className="portfolio-title">Portfolio</h1>
				</div>

				<div className="portfolio-content container">
					<Row>
						<Col xs={12} sm={10} smOffset={1}>
							{/* Category Control */}
							<div className="portfolio-cat-control card clickable-card">
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
							<Grid className="portfolio-items">

							</Grid>

						</Col>
					</Row>
				</div>
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
