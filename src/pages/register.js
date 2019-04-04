import React from "react"


import { TextField } from "@material-ui/core"

import "../style/index.css"
const IndexPage = () => (
  <React.Fragment>
  <h1>LOLWA</h1>
  <TextField  id="standard-name"
          label="Name"
         
          onChange={(event)=>{console.log(event.target.value)}}
          margin="normal"/>
  </React.Fragment>
)

export default IndexPage
