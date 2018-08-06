import React, { PureComponent } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

/**
* Handling icons specifically for Home page
*/
class HomeIcon extends PureComponent {
    getPopover(name) {
		return (
			<Tooltip id="hobbies" className="portfolio-modal-cat-icon-popover">
				{name}
			</Tooltip>
		)
    }
    
	render() {
        const { icon, name, link } = this.props
		return (
			<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.getPopover(name)}>
                {
                    icon ?
                        <img className="home-hobbies-icon" alt={name} src={icon} />
                    :
                        <a className={`home-landing-icon home-landing-icon-${name.toLowerCase()} icon-${name.toLowerCase()}`}
                            href={link}
                            target="_blank" rel="noopener noreferrer">
                            <p className="hidden">{name}</p>
                        </a>
                }
            </OverlayTrigger>
		)
	}
}

export default HomeIcon
