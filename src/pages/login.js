import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Paper, TextField, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//import { loginRequest } from "../api/controllers/account-controller"
//import NiceInputPassword from 'react-nice-input-password';
import NumberFormat from 'react-number-format';
import { useEffect } from "react";


const Page = () => {

    const theme = useTheme()
    const history = useNavigate()
    const [rememberMe, setRememberMe] = useState(false)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <Box container sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url("/assets/login-background.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }} >
            <Paper
                component="form"
                sx={{
                    padding: 4,
                    width: {
                        xs: '90%',
                        sm: '500px',
                    },
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 4,
                }}
                onSubmit={handleSubmit}
                elevation={5}

            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography>Chat-App</Typography>
                </Box>

                <Divider style={{
                    margin: theme.spacing(2, 0)
                }} />


                <Grid
                    container
                    spacing={2}
                >

                    <Grid item xs={12} md={12}>
                        <NumberFormat

                            format="+90 (###) ### ## ##"
                            onValueChange={(values) => {
                                const { formattedValue, value } = values;
                                // formattedValue = $2,223
                                // value ie, 2223
                                setPhone(`+90${value}`)
                            }}
                            customInput={TextField}
                            variant="outlined"
                            style={{
                                width: "100%"
                            }}
                            label="Telefon Numaranız"
                            required
                            name="telefonNumarasi"
                            InputLabelProps={{ required: false }}
                        />

                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            name="parola"
                            value={password}
                            type="password"
                            style={{
                                width: "100%"
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Parolanız"

                        />
                    </Grid>

                  {/*   <Grid item xs={12} md={12}>
                        <FormControlLabel
                            control={<Checkbox
                                value={rememberMe}
                                onClick={() => setRememberMe(!rememberMe)}
                            />}
                            label="Beni Hatırla"
                            labelPlacement="end"
                        />
                    </Grid> */}

                    <Grid item xs={12} md={12}>
                        <Button
                            fullWidth
                            size='large'
                            variant="contained"
                            color="primary"
                            type="submit"
                            disableElevation
                        >
                            GİRİŞ YAP
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button
                            variant='outlined'
                            onClick={() => history.push('/register')}
                            fullWidth
                            size='large'
                            disableElevation
                        >Kayıt Ol</Button>
                    </Grid>

                   {/*  <Grid item xs={12} md={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Link to="/forgot-password">
                            <Typography sx={{
                                textAlign: "center"
                            }}>Parolamı unuttum</Typography>
                        </Link>
                    </Grid> */}

                </Grid>
            </Paper>

        </Box >


    )

}

export default Page