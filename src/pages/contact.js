import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => (
    <Layout>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

            <section className="py-0 lg:pb-40 lg:pt-48">
            <h2 className="text-3xl lg:text-5xl font-semibold text-center">Fill out the form</h2>
            
            <Card className="mb-8">
            <p className="font-semibold text-xl">Name</p>
                <input type="text" name="name" id="name" />
            </Card>

            <Card className="mb-8">
            <p className="font-semibold text-xl">Email</p>
                <input type="email" name="email" id="email" />
            </Card>

            <Card className="mb-8">
            <p className="font-semibold text-xl">Subject</p>
                <input type="text" name="subject" id="subject" />
            </Card>

            <Card className="mb-8">
            <p className="font-semibold text-xl">Add description</p>    
                <textarea name="message" placeholder="Example text" maxLength={5000} id="message" rows="5" />
            </Card>
            
            <section className="py-2 lg:pb-40 lg:pt-48 text-center">
                <Button className="mb-8">
                    <button className="text-center" type="submit">Send</button>
                </Button>
            </section>
        </section>
        </form>
    </Layout>
);
export default Contact;