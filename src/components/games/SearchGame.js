import Proptypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function SearchGame({handleSEarch}) {
  return (
    <InputGroup>
      <FormControl 
        placeholder="Searc by game.." 
        onChange={ event => handleSEarch(event) }
      />
    </InputGroup>
  );
};

SearchGame.propTypes = {
    handleSEarch: Proptypes.func.isRequired
};