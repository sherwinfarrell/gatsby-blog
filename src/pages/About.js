import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout';

const about = ()=>{
    return (
        <div> 
        <Layout>
        <h1>
        This  is the About page 
        </h1>
        <p> Everythin about me that you need to know will come here!</p>
        <p>Need to Contact me? <Link to="/Contact">Click Here!</Link></p>
        </Layout>
        </div>
    )
}

export default about