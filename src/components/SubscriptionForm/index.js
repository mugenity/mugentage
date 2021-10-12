import React, { useState } from "react"
import { FormContainer, Form, Button } from "./styles"

const SubscriptionForm = ({ customBorder, customWidth }) => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")

  const FORM_URL = `https://app.convertkit.com/forms/2633825/subscriptions`

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })
      setEmail("")
      const json = await response.json()
      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }

  const handleInputChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <FormContainer customWidth={customWidth}>
      {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
      {status === "ERROR" && <p>Oops, Something went wrong! try again.</p>}

      <Form action={FORM_URL} method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          aria-label="Your email"
          name="mugenmugi33@gmail.com"
          placeholder="Your email address"
          onChange={handleInputChange}
          value={email}
          required
        />

        <Button customBorder={customBorder} type="submit">
          Subscribe
        </Button>
      </Form>

      <p>
        Join the newsletter if you'd like, you'll receive more articles straight
        to your inbox. <br />I won't send you spam and you can unsubscribe at
        any time.
      </p>
    </FormContainer>
  )
}

export default SubscriptionForm
