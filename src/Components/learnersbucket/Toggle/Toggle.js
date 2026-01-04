import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./styles.css";

const ToggleSwitch = ({
  checked,
  defaultChecked,
  name,
  onChange,
  rounded,
  checkedChildren,
  unCheckedChildren,
  className,
  variant,
  innerRef,
}) => {
  const [_checked, setChecked] = useState(defaultChecked || checked || false);
  const handleChange = (e) => {
    // console.log(e?.target);
    const { checked } = e?.target;
    setChecked(checked);
    onChange &&
      onChange({
        name,
        checked,
      });
  };

  const _className = cx("wrapper", className);
  const _slideClassName = cx("slider", variant, {
    ["round"]: rounded,
  });

  const _checkedChildrenClassName = cx("children", "checked", {
    ["visible"]: _checked,
  });

  const _uncheckedChildrenClassName = cx("children", "unchecked", {
    ["visible"]: !_checked,
  });

  return (
    <span className={_className}>
      <span className="switch">
        <input
          type="checkbox"
          checked={_checked}
          onChange={handleChange}
          name={name}
          ref={innerRef}
        />

        <span className={_slideClassName}>
          <span className={_checkedChildrenClassName}>
            {checkedChildren || null}
          </span>

          <span className={_uncheckedChildrenClassName}>
            {unCheckedChildren || null}
          </span>
        </span>
      </span>
    </span>
  );
};

ToggleSwitch.propTypes = {
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "success", "danger"]),
  checkedChildren: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
  ]),
  uncheckedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  innerRef: PropTypes.instanceOf(Element),
};


ToggleSwitch.defaultProps = {
    defaultChecked: false,
    checked: false,
    variant: "primary"
}

export default React.forwardRef((props, ref)=>{
    return <ToggleSwitch {...props} innerRef={ref} />
})