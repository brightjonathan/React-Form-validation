import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ContactForm from './ContactForm'

//testing for the h1 tag using render method

test("headerRenders", ()=>{
    const Compound = render(<ContactForm/>)
    const headerid = Compound.getByTestId("reg")

    expect(headerid.textContent).toBe("Registration")
})