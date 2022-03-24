import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => (
    <Layout>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

            <section className="mt-8 py-0 lg:pb-8 lg:pt-4">
            <h2 className="text-3xl lg:text-5xl font-semibold text-center">Fill out the form</h2>
            
            <Card className="mb-8 mt-8 md:mx-40">
            <p className="font-semibold text-xl">Name</p>
                <input type="text" placeholder="Enter here" name="name" id="name" />
            
            <p className="mt-10 font-semibold text-xl">Email</p>
                <input type="email" placeholder="Enter here" name="email" id="email" />

            <p className="mt-10 font-semibold text-xl">Subject</p>
                <textarea type="text" placeholder="Enter here" name="subject" id="subject" cols={25}/>
            
            <p className="mt-10 font-semibold text-xl">Add description</p>    
                <textarea name="message" border="#bbb" placeholder="Example text" maxLength={5000} id="message" cols={25}/>
            </Card>
            
            <section className="py-2 lg:pb-4 lg:pt-4 text-center">
                <Button className="mb-8">
                    <button className="text-center" type="submit">Send</button>
                </Button>
            </section>
        </section>
        </form>
    </Layout>
);
export default Contact;