import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: '100%' },
                ml: { sm: '240px' }
            }}>

            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>


                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    > Sports App
                    </Typography>
                    <Grid
                        item
                    >
                        <Button color="inherit" component={Link} to="/">Cards</Button>
                    </Grid>
                    <Grid>
                        <Button color="inherit" component={Link} to="/create">Create</Button>
                    </Grid>
                    <IconButton
                        // onClick={onLogout}
                        color="error"
                    >

                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}
