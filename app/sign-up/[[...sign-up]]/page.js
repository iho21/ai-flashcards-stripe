import { SignUp } from '@clerk/nextjs'
import {Box, 
        Container, 
        Typography, 
        AppBar, 
        Toolbar, 
        Button, 
        Link} from '@mui/material'

export default function SignInPage() {
    return <Container maxWidth= "false" disableGutters>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' sx={{
                    flexGrow: 1
                }}>
                Flashcard SaaS
                </Typography>
                <Button color="inherit">
                    <Link href = "/sign-in" passHref>
                        Login
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link href = "/sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h4">
                Sign Up
            </Typography>
            <SignUp />
        </Box>
    </Container> 
}