# Getting Started with Just using the already designed react button components

## Usage
```javascript
import { ButtonFancy } from 'react-fancy-bootstrap-button'

 <ButtonFancy
          id="222"
          type="submit"
          name="test"
          value="Test"
          disabled={false}
          handleClick={() => {
            alert('CHECK')
          }}
          label="TEST LABEL"
        />
```
## PROPS
PROP | TYPE
------------ | -------------
id | STRING
name | STRING
type | 'submit' or 'reset'
value | String
disabled | Boolean
label | String
handleClick | callback Function 
