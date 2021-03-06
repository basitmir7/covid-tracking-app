import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import CountUp from "react-countup";

const Cards = ({ data }) => {
  const confirmed = data.confirmed;
  const lastUpdate = data.lastUpdate;
  const recovered = data.recovered;
  const deaths = data.deaths;

  if (!data.confirmed) return "loading...";
  else {
    return (
      <div className="container-card">
        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            component={Card}
            style={{
              margin: "20px",
              borderBottom: "10px solid rgba(0,0,255,0.5)",
            }}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>

              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Number of active cases </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            style={{
              margin: "20px",
              borderBottom: "10px solid rgba(0,255,0,0.5)",
            }}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recoverd
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(lastUpdate).toDateString()}
              </Typography>

              <Typography variant="body2"> No. of recovered cases </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            style={{
              margin: "20px",
              borderBottom: "10px solid rgba(255,0,0,0.5)",
            }}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                {" "}
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Number of deaths</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
