import React, { useState } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import * as Yup from "yup";
import "./contactMe.css";

export default function ContactMe() {
  const formik = useFormik({
    initialValues: { name: null, email: null, message: null },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().min(10, "Too short").required("Required"),
    }),
  });

  const nameError = formik.touched.name && formik.errors.name;
  const emailError = formik.touched.email && formik.errors.email;
  const messageError = formik.touched.message && formik.errors.message;

  return (
    <section
      className="contact-me gradient__background section__padding"
      id="contact-me"
    >
      <div className="contact-me__title">
        <h3>Contact Me</h3>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit} className="contact-me__form">
          <FormControl
            isInvalid={nameError}
            className={nameError ? "contact-me__form--error" : ""}
          >
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" {...formik.getFieldProps("name")} />
            <FormErrorMessage color="red">
              {formik.errors.name}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={emailError}
            className={emailError ? "contact-me__form--error" : ""}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" {...formik.getFieldProps("email")} />
            <FormErrorMessage color="red">
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={messageError}
            className={messageError ? "contact-me__form--error" : ""}
          >
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              {...formik.getFieldProps("message")}
            />
            <FormErrorMessage color="red">
              {formik.errors.message}
            </FormErrorMessage>
          </FormControl>
          <button type="submit">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </section>
  );
}
