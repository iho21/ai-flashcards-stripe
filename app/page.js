'use client'
import getStripe from "../utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Toolbar,
    Typography,
    Paper
} from "@mui/material"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
    const HandleSubmit = async () => {
        const checkoutSession = await fetch('/api/checkout_session', {
            method: 'POST',
            headers: {
                origin: 'http://localhost:3000',
          },
        })

        const checkoutSessionJson = await checkoutSession.json()

        if (checkoutSession.statusCode === 500) {
            console.error(session_Id)
            return
        }

        const stripe = await getStripe()

        const {error} = await stripe.redirectToCheckout({
            sessionId: checkoutSessionJson.id,
        })

        if (error) {
            console.warn(error.message)
        }
    }
  return (
    <Container maxWidth="false" disableGutters>
        <Head>
            <title>Flashcard SaaS</title>
            <meta name = 'description' content="Create flashcard from your text" />
        </Head>

        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1}}>Flashcard SaaS</Typography>
                <SignedOut>
                    <Button color="inherit" href="/sign-in">
                            Login
                    </Button>
                    <Button color="inherit" href="/sign-up">
                            Sign up
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Toolbar>
        </AppBar>

        <Container sx={{paddingTop: "30px"}}>

        <Box
            textAlign="center"
        >
            <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
            <Typography variant="h5" gutterBottom>The easiest way to make flashcards from your text</Typography>
            <Button variant="contained" href="/generate" color="primary" sx={{mt: 2}}>Get Started</Button>
        </Box> 

        <Container>
                <Typography
                    variant="h4"
                    textAlign={"center"}
                    gutterBottom
                    color={"black"}
                    mt={10}
                >
                    Features
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={4} style={{ width: "100%" }}>
                        <Paper
                            elevation={3}
                            style={{
                                height: "150px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                alignItems: "center",
                                padding: "10px",
                                backgroundColor: "#1976d2",
                                color: "white",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                textAlign={"center"}
                                my={2.5}
                            >
                                Easy Text Input
                            </Typography>
                            Simply input your text and let our software do the
                            rest. It's simple!
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={{ width: "100%" }}>
                        <Paper
                            elevation={3}
                            style={{
                                height: "150px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                alignItems: "center",
                                padding: "10px",
                                backgroundColor: "#1976d2",
                                color: "white",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                textAlign={"center"}
                                my={2.5}
                            >
                                Customizable
                            </Typography> 
                            The software can adapt to different difficulty levels or focus on specific topics.
                        </Paper>
                    </Grid>
                    <Grid item xs={4} style={{ width: "100%" }}>
                        <Paper
                            elevation={3}
                            style={{
                                height: "150px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                alignItems: "center",
                                padding: "10px",
                                backgroundColor: "#1976d2",
                                color: "white",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                textAlign={"center"}
                                my={2.5}
                            >
                                Accesible
                            </Typography>
                            The software can rephrase complex concepts into simpler terms.
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        <Box sx={{my: 6, textAlign: 'center'}}>
            <Typography variant="h6" gutterBottom>Pricing</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            p: 3,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            borderRadius: 2,
                        }}
                    >
                    <Typography variant="h5" gutterBottom>
                        Basic
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        $0 / month
                    </Typography>
                    <Typography>Access to basic flashcard features and limited storage</Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}} href="/flashcards">
                        Choose Basic
                    </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            p: 3,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            borderRadius: 2,
                        }}
                    >
                    <Typography variant="h5" gutterBottom>
                        Pro
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        $5 / month
                    </Typography>
                    <Typography>Unlimited flashcards storage with priority support.</Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}} onClick={HandleSubmit}>
                        Choose Pro
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

        </Container>

    </Container>

  )
}