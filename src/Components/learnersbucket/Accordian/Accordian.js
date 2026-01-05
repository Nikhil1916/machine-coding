import React from 'react'
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.css"

const AccordianLearnersBucket = ({
    children,
    onChange,
    label,
    isOpen
}) => {

  const handleChange = () => {
    onChange && onChange(!isOpen)
  }
  return (
    <div className='wrapperAccordian'>
    <button onClick={handleChange} className={cx("toggler",{["active"]:isOpen})}>{label}</button>
    <div className={cx("panel",{["active"]:isOpen})}>
        {/* <div className='contentWrapper'> */}
            {children}
        {/* </div> */}
    </div>
    </div>
  )
}

AccordianLearnersBucket.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    children: PropTypes.node,
    label: PropTypes.string
}

AccordianLearnersBucket.defaultProps = {
    isOpen: false,
    children: null,
    label: "Accordian"
}

export default AccordianLearnersBucket