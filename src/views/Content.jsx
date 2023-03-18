import { Grid, Typography } from '@mui/material'
import React from 'react'
import { SportCard } from '../components/SportCard'
import { sportData } from '../data/sportData'

export const Content = () => {
    return (
        <>

            <Typography variant='h2' style={{ textAlign: 'center'}}>
                Cards Deportivas
            </Typography>
            <Grid
                container
                justify="center" alignItems="center"
                spacing={{
                    xs: 2,
                    md: 3
                }}
                columns={{
                    xs: 4,
                    sm: 8,
                    md: 12
                }}
            >
                {
                    sportData.map((sport) => (
                        <SportCard key={sport.title} {...sport} />
                    ))
                }
            </Grid>

        </>
    )
}
