import React from "react"
import {Link} from "gatsby"
import Layout from '../components/layout'

const index = ()=> {
    return(
        <div>
        <Layout>
        <h1>Sherwin Mascarenhas Personal Blog</h1>
        <p>Contact Info here<Link to="/Contact">Contact</Link></p>
        </Layout>
        </div>
    )
}
export default index
