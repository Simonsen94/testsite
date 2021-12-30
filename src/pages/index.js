import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none">
            From data to actionable insights.
          </h2>
          <p className="text-lg lg:text-xl mt-6 font-light text-justify">
            SMEs face a unique set of challenges in becoming data-driven.
            The SME Analyst, solve these <em>and</em> rapidly grows your digital business.
          <br/><br/>
            I am an experienced analytics specialist, with a specialty in helping SMEs scale on
            both the B2B and B2C market. I provide eCommerce Manager Knowledge and a scientifically
            proven process, Lean CRO, to make your SME <em>data-driven</em>, <em>customer-centric</em> 
            and <em>profitable</em> in the short, medium and long term.
          <br/><br/>
            I help SMEs in any stage of their digital transformation, and within the following areas:
            <br/><br/>
            <ul class="list-disc mb-6">
              <li>Digital strategy formulation</li>
              <li>Data layer foundation and tracking</li>
              <li>Optimization program</li>
              <li>Data reporting</li>
              <li>Website auditing and pain point analysis</li>
              <li>Dashboard building.</li>
            </ul>
          </p>
          <p className="mt-8 md:mt-6">
            <Button size="lg">Get in contact</Button>
          </p>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">My services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Analytics</p>
              <p className="mt-4 text-left">
                Activate your customer data and monitor your website performance closely to ensure 
                it meets your KPI's. We help with everything from weekly reports to thorough commercial 
                analyses.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Usability testing</p>
              <p className="mt-4 text-left">
                Discover up to 80% of your websites usability errors, and understand 
                why your customers act as they do and how to increase website satisfaction
                and conversions. 
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Optimize</p>
              <p className="mt-4 text-left">
                Tailormake your website to match your visitors unique preferences and increase 
                revenue. Understand how scientific methods can secure valid A/B test results with
                significant uplift potential.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Google Data Studio</p>
              <p className="mt-4 text-left">
                Gather your primary- and secondary data sources in one powerful dashboard
                tailored to your unique business needs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="blog"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Blog Backlog</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          One library full of all the best knowledge pills related to eBusiness and Analytics.
          Each blog is concise, to the point, and offers actionable insights to grow your business.
          This is my way of giving back to the analytics community.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
