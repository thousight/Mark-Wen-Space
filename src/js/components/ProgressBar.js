import React, { PureComponent } from 'react';

/**
* Progress bar that shows only percentage
*/
class ProgressBar extends PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<div className="progress-bar-wrapper">
        <div className="progress-bar-progress" style={{width: this.props.percentage + '%', backgroundColor: this.props.color}}/>
				<div className="progress-bar-total" style={{backgroundColor: this.props.color}} />
			</div>
		);
	}
}

export default ProgressBar;
