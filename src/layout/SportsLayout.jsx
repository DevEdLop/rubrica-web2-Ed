import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"



export const SportsLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
