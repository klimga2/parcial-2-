import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardsInfo({
  hp,
  ataque,
  defensa,
  special_attack,
  special_defense,
  speed,
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Hp: {hp}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ataque: {ataque}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          defensa: {defensa}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          special-attack: {special_attack}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          special-defense: {special_defense}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          speed: {speed}
        </Typography>
      </CardContent>
    </Card>
  );
}
