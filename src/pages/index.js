import * as React from "react";
import Layout from '../components/layout/Layout';
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
      <>
          <Layout pageTitle='Home Page'>
              <p>Hi there, my name is Gedalya!</p>
              <StaticImage
                  src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=medium"
                  alt='Dog lying down'
              />
          </Layout>

      </>
  )
}

export default IndexPage
