import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";

export function ContactPage() {
    return (
      <>
        <Heading content="Contact"/>
        <ContactForm></ContactForm>
      </>    
    );
}

export default ContactPage;