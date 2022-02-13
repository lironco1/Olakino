import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import React, { useState } from "react";

const SearchBarInput = (props) => {
  const [, setValue] = useState("");
  const [inputFocus, setInputFocus] = React.useState(false);

  return (
    <InputGroup className={inputFocus ? "input-group-focus" : ""}>
      <Input
        placeholder="Filter recipe name:"
        className="bg-white"
        onChange={(e) => setValue(props.onSearch(e.target.value))}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <InputGroupAddon addonType="append">
        <InputGroupText>
          <i className="now-ui-icons ui-1_zoom-bold ml-1" />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchBarInput;
