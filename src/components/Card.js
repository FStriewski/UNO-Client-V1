import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../style/Card.css'


class Card extends PureComponent {
  static propTypes = {
  }


  handleClick = () => {
      alert("clicked!" )
    // if location === x, dispatch action y
 }


 classNames() {
    const { number, color } = this.props
 
    let classnames = ['Card']
    classnames.push(`fill-${color}`)
    classnames.push(number)
    return classnames.join(' ')
  }
 

  render() {
    return (
        <div className={this.classNames()} id={this.props.cards.id}  onClick={this.handleClick} >
            <p style={{fontSize: "20px"}}>{this.props.number} </p>
        </div>
    )
  }
}

const mapStateToProps = ({ cards }) => ({ cards })
export default connect(mapStateToProps, {})(Card)

