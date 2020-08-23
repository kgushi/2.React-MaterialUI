import React from "react";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>This is where the header will be</Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}></Grid>
        <Grid item xs={2} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
