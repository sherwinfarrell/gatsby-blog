import React from 'react'
import Layout from '../components/layout';
import {Link, graphql,useStaticQuery} from 'gatsby'
import blogStyles from './Blog.module.scss'


const blog = () => {
    const data = useStaticQuery(graphql `query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                date
                title
              }
              fields{
                slug
              }
            }
          }
        }
      }`)
  
            
    return (
        <div>
        <Layout>
            <ol className = {blogStyles.posts}>
                {
                    data.allMarkdownRemark.edges.map((edge)=>
                    {
                        return (<li className= {blogStyles.post}>
                                    <Link to = {`/blog/${edge.node.fields.slug}`}>
                                     <h1>{edge.node.frontmatter.title}</h1>    
                                     <p>{edge.node.frontmatter.date}</p>          
                                     </Link>                                     
                            </li>)
                    })
                }
            </ol>
        </Layout>
        </div>
    )
}

export default blog