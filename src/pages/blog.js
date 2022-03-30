import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';

const Blog = () => (
  <Layout>
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
