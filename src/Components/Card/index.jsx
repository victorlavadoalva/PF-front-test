import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const SimpleCard = ({ image, title, city, address, id }) => {
  return (
    <Link to={`detail/${id}`} style={{textDecoration: 'none'}}>
      <Card sx={{ width: 345, height: 270 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Tooltip title={city}>
              <Typography variant="body2" color="text.secondary" >
                {city}
              </Typography>
            </Tooltip>
            <Tooltip title={address}>
              <Typography variant="body2" color="text.secondary" className={styles.address} >
                {address}
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}