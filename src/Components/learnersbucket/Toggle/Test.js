import React from "react";
import ToggleSwitch from "./Toggle";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Test = () => {
  return <>
    <ToggleSwitch name="abc" rounded={true} checked={true}/>
    <ToggleSwitch name="abc" variant="success" />
    <ToggleSwitch
      name="abc"
      rounded={true}
      variant="danger"
      defaultChecked={true}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
    />
    <ToggleSwitch
      name="abc"
      defaultChecked={true}
      variant="danger"
      checkedChildren={<CheckOutlined />}
      uncheckedChildren={<CloseOutlined />}
    />
  </>
};

export default Test;
