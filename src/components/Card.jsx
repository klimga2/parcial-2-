import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardsInfo from "./infodata";
import Pelea from "./Pelea";
export default function Cards({ img, nombre, Stats }) {
  console.log(Stats);
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "black",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "#fff",
      }}
    >
      <CardMedia sx={{ height: 240 }} image={img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pokemon: {nombre}
        </Typography>
      </CardContent>
      <div>
        <CardsInfo
          hp={Stats[0].base_stat}
          ataque={Stats[1].base_stat}
          defensa={Stats[2].base_stat}
          special_attack={Stats[3].base_stat}
          special_defense={Stats[4].base_stat}
          speed={Stats[5].base_stat}
        />
      </div>
    </Card>
  );
}
