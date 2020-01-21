import React from "react";
//CSS
import "./Tip.scss";
// Material IU components
import { Avatar, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Tip = ({ tipState: { avatar, media, title } }) => (
  <Card square className="card" elevation={0}>
    <Avatar alt="" src={avatar} />
    <CardMedia className="media" component="img" image={media} title="" />
    <CardContent className="cardText">
      <Typography className="title" component="h2" variant="subtitle2">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

// TODO: Add alt to avatar and title to image. Create in mockdata.

export default Tip;
