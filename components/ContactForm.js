import emailjs from 'emailjs-com';
import { useRef } from 'react'

function ContactForm() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hru54sh', 'template_sffhs3q', form.current, '34E4CfUC-yTO3dpQb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" className="form-control"/>
            <input type="email" placeholder="Email" name="email" className="form-control"/>
            <input type="text" placeholder="Subject" name="subject" className="form-control"/>
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            <input type="submit" value="Send message"/>
        </form>
    )

}

export default ContactForm