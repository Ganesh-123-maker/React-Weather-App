import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=800&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1558409057-bbe679023136?w=800&auto=format&fit=crop";

  const COLD_URL =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ width: 450 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="weather image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="div">
              <p>Temperature = {info.temp}°C</p>
              <p>Feels Like = {info.feelsLike}°C</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Weather = {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
