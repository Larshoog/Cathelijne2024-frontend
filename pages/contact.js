import utilStyles from '../styles/utils.module.css'
import Layout from '../components/Layout'
import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => (
    <Layout pagetype={'contact'}>
        <div className={utilStyles.formcontainer}>
            <ContactForm />
        </div>
    </Layout>
)

export default Contact
