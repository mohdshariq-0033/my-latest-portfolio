import React from 'react'

export default function Contact() {
  return (
   <>
   <section id="contact">
      <form action="https://api.web3forms.com/submit" method="POST">
        <h1 id="hire">Hire Me</h1>
        <input
          type="hidden"
          name="access_key"
          defaultValue="17f906be-2577-4311-81aa-ebf0606fa220"
        />
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Enter your Fullname*"
        />
        <input
          type="text"
          name="email"
          className="input"
          placeholder="Enter your email*"
        />
        <input
          type="text"
          name="number"
          className="input"
          placeholder="Enter your Number*"
        />
        <input
          type="text"
          name="subject"
          className="input"
          placeholder="Subject"
        />
        <textarea
          name="feedback"
          placeholder="Please enter feedback"
          defaultValue={""}
        />
        <button id='SubBtn'>submit</button>
      </form>

</section>

   </>
  )
}
