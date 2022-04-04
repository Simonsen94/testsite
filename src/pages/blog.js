import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'gatsby';

const Blog = () => (
  <Layout>
    <section className="container mx-auto bg-gray-200 rounded-lg text-center">
      <div className="text-center lg:ml-8 lg:text-left lg:w-4/5"> 
        <h3 className="text-2xl lg:text-5xl font-semibold">Wow, cool, I did not know that - That is just what I needed!</h3>
        <p className="mt-6 text-xl font-light">
          If any of those thoughts appear in your mind after you have read one of my blog posts - then 
          I have succeeded. I dedicate my time to only provide you with the very best within eCommerce.
        </p>
        <div className="mt-6">
          <Button size="l">
            <Link to="/blog" style={{ color: "white" }}>
              Show me the blogs
            </Link>
          </Button>
        </div>
      </div>
    </section>
    <section className="pt-10 md:pt-30">
      <div className="container center mx-auto px-8">
        <Card>
        <h2 className="text-2xl font-bold center">
          Goodbye Universal Analytics
        </h2>
        <p>Google is sunsetting Universal Analytics Juli 1, 2023 😳<br></br><br></br>
          But why!?!? They cant get away with that!<br></br><br></br>
          Yes they can and their reasons are completely fair, in fact they would be crazy not to.<br></br><br></br>
          UA was build in another time, where website visitors primarily used their desktop to surf the internet.
          Furthermore, UA is far from meeting growing demands from customers and policians concerning online privacy.
          <br></br><br></br>
          The successor for UA is GA4. GA4 can track user journeys across devices, without being solely dependent on cookies. 
          Additionally, users of GA4 are able to get quick insight through Google's Machine Learning algorithms.
          <br></br><br></br>
          If your organization is still running on the obselete UA, its time to think about migrating. <br></br><br></br>In case your are interested in hearing more
          feel free to reach out to me by clicking the "Get in Contact" button in the navigation bar</p>
          </Card>
      </div>
    </section>
  </Layout>
);

export default Blog;
