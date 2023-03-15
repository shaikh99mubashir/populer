import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MediaCard from '../../component/Cards';
import { collection, getDocs } from 'firebase/firestore';
import db from "../.././database/firebase";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/1l.png'
import { Link } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Blogs = () => {
    const [blog, setBlog] = useState([])
    const getBlog = async () => {
        const data = await getDocs(collection(db, "blogs"));
        setBlog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    useEffect(() => {
        getBlog();
    }, [])

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    function handleFileInputChange(event) {
        const file = event.target.files[0];
        if (file && file.type === 'video/mp4') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    }

    console.log('selectedFile', selectedFile);

    function handleSubmit(event) {
        event.preventDefault();

        // Create a storage reference
        const storage = getStorage();
        const storageRef = ref(storage, 'videos/' + selectedFile.name);

        // Upload the file to Firebase Storage
        const uploadTask = uploadBytes(storageRef, selectedFile);
        console.log('upload', uploadTask);

        uploadTask.then((snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
            getDownloadURL(storageRef).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        })
        // Update upload progress
        // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         setUploadProgress(progress);
        //     },
        //     (error) => {
        //         console.error(error.code);
        //         console.error(error.Message);
        //     },
        //     () => {
        //         // Get the download URL once the file has been uploaded
        //         getDownloadURL(storageRef).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //         });
        //     }
        // );
    }

    return (
        <div style={{ marginTop: 130, marginLeft: 80, marginRight: 80 }}>
            <input type="file" accept="video/mp4" onChange={handleFileInputChange} />
            <button type="submit" onClick={handleSubmit} disabled={!selectedFile}>Upload</button>
            <div style={{ textAlign: 'center', fontSize: "24px", fontWeight: "bold", fontFamily: "Gill Sans" }}>BLOGS</div>
            <div style={{ display: "flex", flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
                {blog && blog.map((data, i) => {
                    return (
                        <div key={i}>
                            { }
                            <Card sx={{ width: 345, height: 300 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={data.imageUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Gill Sans" }}>
                                        {data.tagLine.replace(/(<([^>]+)>)/ig, '')}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Gill Sans" }}>
                                        {data.blogDescription.length > 60 ? data.blogDescription.replace(/(<([^>]+)>)/ig, '').slice(0, 60) : data.blogDescription.replace(/(<([^>]+)>)/ig, '')}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={{
                                        pathname: "/BlogsDetail",
                                        state: data
                                    }}>
                                        <Button size="small" sx={{ fontFamily: "Gill Sans", justifyContent: "flex-end" }}>Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Blogs