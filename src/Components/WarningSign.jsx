import React from 'react'

import {Alert} from 'react-bootstrap'

function WarningSign() {
    
   
      return (
        <Alert variant="danger" >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Warning
          </p>
        </Alert>
      );
    }
 

 export default WarningSign;