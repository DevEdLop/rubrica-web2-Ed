import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material"

export const SportCard = ({ title, description, categoria, img }) => {
    return (
        <Grid
            item
            xs={2} sm={4} md={4}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={img}
                    title="Sports"
                />
                <CardContent sx={{ maxHeight: 345 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Typography paragraph variant="h5" sx={{ ml: 2 }} color="lightseagreen">
                    {categoria}
                </Typography>
                <CardActions>
                    enlace
                </CardActions>
            </Card>
        </Grid>

    )
}
