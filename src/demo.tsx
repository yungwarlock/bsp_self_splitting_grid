import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { generateGrid } from "./GridGenerator";

import CollectionsIcon from "@mui/icons-material/Collections";

interface AppTextFieldProps {
  name: string;
  value: string;
  placeholder: string;
}

const AppTextField = ({
  name,
  value,
  placeholder
}: AppTextFieldProps): JSX.Element => {
  const [fadeOut, setFadeOut] = React.useState<boolean>(false);

  const styles = {
    transition: "opacity .5s",
    backgroundColor: "#afafaf9e",
    opacity: fadeOut ? "1" : "0"
  };

  const style = {
    backgroundImage: "url()",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <Grid>
      <Typography>Grid</Typography>
      <Grid
        container
        sx={style}
        direction="column"
        position="relative"
        onMouseOver={() => setFadeOut(true)}
        onMouseOut={() => setFadeOut(false)}
      >
        <Grid
          container
          position="absolute"
          sx={{
            zIndex: "200",
            height: "100%",
            width: "inherit"
          }}
        >
          {generateGrid(6)}
        </Grid>
        <Grid container sx={{ height: "13rem", zIndex: "200" }}>
          <Grid
            container
            gap={1}
            alignItems="center"
            justifyContent="center"
            sx={styles}
            direction="column"
          >
            <CollectionsIcon sx={{ fontSize: "2.75rem" }} />
            <Button>Upload Image</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppTextField;
