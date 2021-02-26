import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
const NewsLetter = () => {
  return (
    <Layout>
      <SEO title={`Newsletter`}/>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>
            I write to my friends every once in a while. I won't overwhelm you
            inbox.
          </h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="form-control"
            />
            <input
              type="email"
              name="name"
              placeholder="your email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
