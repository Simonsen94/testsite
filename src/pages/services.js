import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

const NotFound = () => (
  <Layout>
      <section id="services" className="py-20 lg:pb-20 lg:pt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Services</h2>
        <p className="mx-8 mt-8 text-left">Below is a list of my current areas of expertise. 
        Each area is fundamental to succeeding in todays digital economy, and I dedicate 
        my time towards mastering them, so I can help you. Having both a technical and commercial understanding 
        of each area can significantly increase your success. Therefore, I am providing you with this deep understanding
        so you can utilize each area to its fullest.</p>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Analytics</p>
              <p className="mt-4 text-left">
                Activate your customer data and monitor your website performance closely to ensure 
                it meets your KPI's. I help with everything from weekly reports to thorough commercial 
                analyses.
              </p>
              <Button className="mt-4">Read more</Button>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Usability testing</p>
              <p className="mt-4 text-left">
                Discover up to 80% of your websites usability errors. Understand why and where 
                your customers experience frictions and how to increase website satisfaction 
                and conversions. 
              </p>
              <Button className="mt-4">Read more</Button>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Optimize</p>
              <p className="mt-4 text-left">
                Tailormake your website to match your visitors unique preferences and increase 
                revenue. Understand how scientific methods secure valid A/B test results with
                significant uplift potential.
              </p>
              <Button className="mt-4">Read more</Button>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Data Studio</p>
              <p className="mt-4 text-left">
                Gather all your primary- and secondary data sources in one powerful dashboard
                tailored to your unique business needs. Never loose sight of important insights again.
              </p>
              <Button className="mt-4">Read more</Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;