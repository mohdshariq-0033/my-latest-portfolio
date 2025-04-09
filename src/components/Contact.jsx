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
          defaultValue="c12ee6e6-6ed5-4952-8e3c-395aa25541d0"
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
