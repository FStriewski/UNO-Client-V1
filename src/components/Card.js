import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../style/Card.css'


class Card extends PureComponent {
  static propTypes = {
  }


  handleClick = () => {
      alert("clicked!")
    // if location === x, dispatch action y
 }

 style = () => {
    {backgroundColor: `${this.props.deck.color}`}
 }


 classNames() {
    const { number, color } = this.props
 
    let classnames = ['Card']
    classnames.push(`fill-${color || "black"}`)
    return classnames.join(' ')
  }
 

  render() {
    return (
        <div className={this.classNames()} id={this.props.deck.id}  onClick={this.handleClick} >
            Card
        </div>
    )
  }
}

const mapStateToProps = ({ deck }) => ({ deck })
export default connect(mapStateToProps, {})(Card)