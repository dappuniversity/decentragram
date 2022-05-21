import React from 'react';
import transformContext from 'react-context-toolbox/transformContext';
var FormContext = React.createContext({
  controlId: undefined
});
FormContext.Transform = transformContext(FormContext);
export default FormContext;