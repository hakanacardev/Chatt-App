import { Box, Button, Divider, Grid, Paper, TextField, Typography, useTheme, Modal, Alert, MenuItem } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NumberFormat from 'react-number-format';



const Page = () => {

    const theme = useTheme()
    const history = useNavigate()
    const [rememberMe, setRememberMe] = useState(false)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [userName, setUserName] = useState("")
    const [phoneModalOpen, setPhoneModalOpen] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState("")

    const handleSubmit = async (e) => {
        e && e.preventDefault()
        setPhoneModalOpen(true)
    }


    const handlePhoneConfirm = async (e) => {
        e.preventDefault()
    }
    return (
        <Box container sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5'
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
                elevation={0}

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
                            name="userName"
                            value={userName}
                            type="text"
                            style={{
                                width: "100%"
                            }}
                            onChange={(e) => setUserName(e.target.value)}
                            label="Kulalnıcı Adı"

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
                    <Grid item xs={12} md={12}>
                        <TextField
                            name="parola"
                            value={rePassword}
                            type="password"
                            style={{
                                width: "100%"
                            }}
                            onChange={(e) => setRePassword(e.target.value)}
                            label="Parolanız Tekrar"

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
                            Kayıt Ol
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Button
                            variant='outlined'
                            onClick={() => history('/')}
                            fullWidth
                            size='large'
                            disableElevation
                        >Giriş Yap</Button>
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
            <Modal
                open={phoneModalOpen}
                onClose={() => setPhoneModalOpen(false)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <Paper sx={{
                    padding: theme.spacing(3),
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Typography sx={{ margin: theme.spacing(1) }} variant="h6" component="h2">
                        SMS İle Gelen Kodu Giriniz.
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="SMS Kodu"
                        sx={{
                            width: "100%",
                            margin: theme.spacing(1)
                        }}
                        onChange={(e) => setConfirmationCode(e.target.value)}
                        value={confirmationCode}
                    />
                    <Button sx={{ margin: theme.spacing(1) }} onClick={handlePhoneConfirm} variant="contained" color="secondary">
                        Onayla
                    </Button>
                </Paper>
            </Modal>
        </Box >



    )

}

export default Page