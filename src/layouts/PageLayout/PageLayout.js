import React from 'react'
import { desktopNavMenuWidth, tabletBreakpoint } from 'constants/design'
import './PageLayout.scss'
import '../../styles/main.scss'

// TODO(blin): add in nav menu logic

class PageLayout extends React.Component {

  constructor () {
    super()
    this.handleResize = this.handleResize.bind(this)
    this.state = {width: window.innerWidth}
  }

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    this.setState({width: window.innerWidth})
  }

  mainContainerPadding () {
    return this.state.width <= tabletBreakpoint ? '0px' : `${desktopNavMenuWidth}%`
  }

  render () {
    return (
      <div>
        <div style={{'paddingLeft': this.mainContainerPadding()}}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default PageLayout
