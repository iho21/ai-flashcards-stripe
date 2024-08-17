"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import {db} from "../../firebase"

import { useSearchParams } from "next/navigation"
import { Box, Button, Card, CardActionArea, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography, AppBar, Toolbar } from "@mui/material"
import { Grid } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


export default function Flashcard() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    
    const searcParams = useSearchParams()
    const search = searcParams.get('id')

    useEffect(()=>{
        async function getFlashcard() {
            if (!search || !user) return
            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const flashcards = []
            
            docs.forEach((doc) => {
                flashcards.push({id: doc.id, ...doc.data()})
            })
            setFlashcards(flashcards)
        }
        getFlashcard()
    }, [user])

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    if (!isLoaded || !isSignedIn) {
        return <></>
    }

    return (
        <Container maxWidth = 'false' disableGutters>
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
            <Typography variant="h2"> Flashcards</Typography>
            <Grid container spacing={3} sx={{mt: 4}}>

                        {flashcards.map((flashcard, index) =>(
                            <Grid item xs={12} sm={6} md={4} key={index}>                              
                                <Card>
                                    <CardActionArea
                                        onClick={()=>{
                                            handleCardClick(index)
                                        }}
                                    >
                                        <CardContent>
                                            <Box sx={{
                                                perspective: '1000px',
                                                '& > div': {
                                                    transition: 'transform 0.6s',
                                                    transformStyle: 'preserve-3d',
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '200px',
                                                    boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                                                    transform: flipped[index]
                                                        ? 'rotateY(180deg)'
                                                        : 'rotateY(0deg)',
                                                },
                                                '& > div > div': {
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    backfaceVisibility: 'hidden',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: 2,
                                                    boxSizing: 'border-box',
                                                                      
                                                },
                                                '& > div > div:nth-of-type(2)': {
                                                    transform: 'rotateY(180deg)',
                                                }
    
                                            }}>
                                                <div>
                                                    <div>
                                                        <Typography 
                                                            variant="h5"
                                                            component="div"
                                                        >
                                                            {flashcard.front}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography 
                                                            variant="h5"
                                                            component="div"
                                                        >
                                                            {flashcard.back}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >

                    </Box>
                    </Container>

        </Container>
    )

}