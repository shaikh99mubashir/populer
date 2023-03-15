import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogsDetail = (props) => {
    const location = useLocation()
    const data = props.location.state
    return (
        <div style={{ marginTop: 130, marginLeft: 80, marginRight: 80 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20, flexDirection: 'column' }}>

                <img src={data.imageUrl} style={{ width: '30%', height: "30%", }} />
                <div style={{ marginTop: 10 }}>
                    <h1>{data.tagLine}</h1>
                </div>
                <div style={{ marginTop: 10 }}>
                    <p style={{ fontFamily: "Gill Sans", fontSize: '1.3rem' }}>{data.blogDescription.replace(/(<([^>]+)>)/ig, '')}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsDetail