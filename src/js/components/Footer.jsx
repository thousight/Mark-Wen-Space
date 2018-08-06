import React, { PureComponent } from 'react'

import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

/**
* Footer that sticks to the bottom of the page
*/
class Footer extends PureComponent {
	render() {
		return (
			<div className="footer">
				<img alt="mw logo" src={WhiteLogoTransparentBG} />
				<p className="legal-text">Design & Develop by Mark Wen</p>
				<p className="legal-text">Copyright © {new Date().getFullYear()} Mark Wen. All rights reserved.</p>
			</div>
		)
	}
}

export default Footer
