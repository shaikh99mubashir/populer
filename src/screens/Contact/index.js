import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import fbicon from '../../assets/social_icons/fbicon.png'
import instaicon from '../../assets/social_icons/instaicon.png'

const Contact = () => {
    return (
        <div style={{ marginTop: 120 }}>
            <div style={{ margin: '30px 100px 30px 100px' }}>
                <Grid container sx={{ alignItems: "center", justifyContent: 'center', }}>
                    <Grid item lg={6} xs={8} sm={12}>
                        <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontSize: 35, fontWeight: "bold" }}>CONNECT WITH US</p>
                        <p style={{ color: 'black', margin: '0px', padding: 0, }}>Have queries? Discuss with us and we'll guide you the way forward.</p>
                        <Box sx={{ width: '90%', height: '90%', backgroundColor: '#eee' }}>
                            <Box style={{ marginTop: 15 }}>
                                <Box style={{ padding: '20px 30px 10px 30px' }}>
                                    <p style={{ color: 'black', margin: '0px', padding: 0, fontWeight: "bold" }} >Name:</p>
                                    <input placeholder='Enter Your Full Name' style={{ width: '100%', padding: 10, }} />
                                    <div style={{ display: 'flex', flexDirection: "row", gap: 30, marginTop: 20 }}>
                                        <div style={{ width: '90%' }}>
                                            <p style={{ color: 'black', margin: '0px', padding: 0, fontWeight: "bold" }} >Name:</p>
                                            <input placeholder='Enter Your Full Name' style={{ width: '100%', padding: 10 }} />
                                        </div>
                                        <div style={{ width: '90%' }}>
                                            <p style={{ color: 'black', margin: '0px', padding: 0, fontWeight: "bold" }} >Name:</p>
                                            <input placeholder='Enter Your Full Name' style={{ width: '100%', padding: 10 }} />
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <p style={{ color: 'black', margin: '0px', padding: 0, fontWeight: "bold" }} >Message:</p>
                                        <textarea rows="4" cols="40"></textarea>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <button style={{ backgroundColor: "#0772ba", color: 'white', border: 'none', padding: 10 }}>Submit</button>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={8} sm={12}>
                        <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontSize: 35, fontWeight: "bold" }}>GET IN TOUCH</p>
                        <p style={{ color: 'black', margin: '0px', padding: 0, }}>Our customer support team on the other side is swift, feel free to send your questions.</p>
                        <Box sx={{ width: '90%', height: '90%' }}>
                            <Box style={{ marginTop: 15 }}>
                                <Box style={{ padding: '20px 0px 10px 0px' }}>
                                    <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontWeight: "bold" }} >Phone:</p>
                                    <p style={{ color: 'black', margin: '0px', padding: 0, }} >(92-21) 111-117-117</p>


                                    <div style={{ marginTop: 20 }}>
                                        <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontWeight: "bold" }} >Address</p>
                                        <p style={{ color: 'black', margin: '0px', padding: 0, }} >311, Chapal Plaza, Hasrat Mohani Road, Off I. I. Chundrigar Road, Karachi - 74000, PAKISTAN</p>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontWeight: "bold" }} >Email</p>
                                        <p style={{ color: 'black', margin: '0px', padding: 0, }} >info@populargroup.com.pk</p>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <p style={{ color: '#0772ba', margin: '0px', padding: 0, fontWeight: "bold" }} >Let's Get Social</p>
                                        <div style={{ display: 'flex', flexDirection: "row", gap: 20, }}>
                                            <a target='blank' href='https://www.facebook.com/populargrouppgi'><img src={fbicon} style={{ width: 50, height: 50 }} /></a>
                                            <a target='blank' href='https://www.instagram.com/populargroupofindustries/?igshid=15ylpnolakihy'><img src={instaicon} style={{ width: 50, height: 50 }} /></a>
                                        </div>
                                    </div>


                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Contact