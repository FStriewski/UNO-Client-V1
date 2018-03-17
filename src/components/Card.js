import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLocation } from '../actions/updateLocation'
import '../style/Card.css'


 class Card extends PureComponent {

    handleClick = () => {
        this.props.updateLocation(this.props.id, this.props.location)
      }

    classNames() {
        const { color} = this.props
        let classnames = ['Card']
        classnames.push(`fill-${color}`)
        return classnames.join(' ')
    }

    cardNumber(){
            const { number, plus } = this.props
            if (number) return this.props.number
            if (plus) return `+${plus}`
    }
    
    render() {
        return (
            <div className={this.classNames()} id={this.props.id} onClick={this.handleClick}  >
                <p style={{fontSize: "20px"}}>{this.cardNumber()} </p>
            </div>
        )
    }
    }

// const mapStateToProps = ({  }) => ({  })
 export default connect(null, { updateLocation })(Card)

