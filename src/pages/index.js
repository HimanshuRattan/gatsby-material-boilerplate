import React from "react"
// import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
//import { withStyles } from '@material-ui/core/styles';
 import { TextField } from "@material-ui/core"

import "../style/index.css"


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const IndexPage = () => (
  <div className="index-form">
  <TextField
  id="standard-with-placeholder"
  label="First Name"
  placeholder="First Name"
  margin="normal"
/><br/>
  <TextField
  id="standard-with-placeholder"
  label="Last Name"
  placeholder="Last Name"
  margin="normal"
/>
<br/>
  <TextField
  id="standard-with-placeholder"
  label="Registration Number"
  placeholder="Registration Number"
  margin="normal"
/><br/>
<Button variant="outlined" size="medium" color="primary">
          Medium
        </Button>
<Button size="medium" variant="contained" color="primary">
        Submit
      </Button>
</div>


)

export default IndexPage
