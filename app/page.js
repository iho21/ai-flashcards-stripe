import getStripe from "@/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material"
import Head from "next/head"

export default function Home() {
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
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Sign up</Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Toolbar>
        </AppBar>

        <Box
            textAlign="center"
        >
            <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
            <Typography variant="h5" gutterBottom>The easiest way to make flashcards from your text</Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>Get Started</Button>
        </Box> 

        <Box sx={{my: 6}}>
            <Typography variant="h4" gutterBottom>Features</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Easy Text Input
                    </Typography>
                    <Typography variant="h6">
                        Simply input your text and let our software do the rest. It's simple!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Easy Text Input
                    </Typography>
                    <Typography variant="h6">
                        Simply input your text and let our software do the rest. It's simple!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Easy Text Input
                    </Typography>
                    <Typography variant="h6">
                        Simply input your text and let our software do the rest. It's simple!
                    </Typography>
                </Grid>
            </Grid>
        </Box>

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
                        $5 / month
                    </Typography>
                    <Typography>Access to basic flashcard features and limited storage</Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}}>
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
                        $10 / month
                    </Typography>
                    <Typography>Unlimited flashcards storage with priority support.</Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}}>
                        Choose Pro
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </Container>

  )
}
