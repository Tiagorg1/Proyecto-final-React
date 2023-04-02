import styles from "./Item.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";



const Item = ({ element }) => {
  
  return (

    <div className={styles.container}>
      
      <Card sx={{ width: 345, height: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={element.img}
          title="green iguana"
        />
        <CardContent>
          <Typography style={{color: "#004953"}} gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography style={{color: "#6C7C59"}} variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/ItemDetail/${element.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
