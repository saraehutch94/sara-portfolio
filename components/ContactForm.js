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
        <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5 2xs:w-513 00xs:w-400 w-350">
                <input type="text" placeholder="Name" name="name" className="form-control bg-black font-sourceCodePro text-codeText p-2"/>
                <input type="email" placeholder="Email" name="email" className="form-control bg-black font-sourceCodePro text-codeText p-2"/>
                <input type="text" placeholder="Subject" name="subject" className="form-control bg-black font-sourceCodePro text-codeText p-2"/>
                <textarea className="form-control bg-black font-sourceCodePro text-codeText p-2" id="" cols="50" rows="8" placeholder="Your message" name="message"></textarea>
                <div className="flex justify-center">
                    <input type="submit" className="bg-navIconReg cursor-pointer hover:bg-navIconHover px-3 py-2 rounded font-sans" value="Send message"/>
                </div>
            </form>
        </div>
    )

}

export default ContactForm