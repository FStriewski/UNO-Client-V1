import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../style/Card.css'


class Card extends PureComponent {


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
            <div className={this.classNames()} id={this.props.id}   >
                <p style={{fontSize: "20px"}}>{this.cardNumber()} </p>
            </div>
        )
    }
    }

const mapStateToProps = ({  }) => ({  })
export default connect(mapStateToProps, { })(Card)

