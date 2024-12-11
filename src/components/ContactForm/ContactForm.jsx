import { useContext, useState, useEffect } from 'react'
import './ContactForm.css'
import Button from '../Button/Button'

import { AppContext } from '../../contexts/AppContext'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setFormSubmitLoading(true)
      try{
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...formData, access_key: "a3749bca-e2b2-4b02-b539-5af1d829263e"})
        })

        if (response.ok) {
            setFormSubmitted(true)
        } else {
            alert('Erro ao enviar formulário!')
        }
      } catch (e) {
          alert('Erro: ', e)
      } finally {
          setFormSubmitLoading(false)
      }
    }
  }

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email)
    }

    const isValid = formData.name.trim() && 
    formData.email.trim() && 
    isValidEmail(formData.email) && 
    formData.message.trim()

    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const appContext = useContext(AppContext)

  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>{appContext.languages[appContext.language].contact.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input 
            className="form-input" 
            type="text" 
            id="name" 
            name="name" 
            placeholder={appContext.languages[appContext.language].contact.pl1}
            onChange={handleChange}
          />
          <input 
            className="form-input" 
            type="email" 
            id="email" 
            name="email" 
            placeholder={appContext.languages[appContext.language].contact.pl2}
            onChange={handleChange} 
          />
        </div>
        <div className="d-flex form-group">
            <textarea
              className="form-input"
              id="message"
              name="message"
              placeholder={appContext.languages[appContext.language].contact.pl3}
              onChange={handleChange} 
              rows="4"
            ></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
            {formSubmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}
            <Button type="submit" buttonStyle="default" disabled={!isFormValid || formSubmitLoading}>
              {appContext.languages[appContext.language].general.send}
            </Button>
          </div>
      </form>
    </div>  
  )
}

export default ContactForm