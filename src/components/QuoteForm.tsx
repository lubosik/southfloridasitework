'use client'

import { useState, FormEvent } from 'react'
import { siteConfig } from '@/lib/site-config'
import styles from './QuoteForm.module.css'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    budgetRange: '',
    timeline: '',
    description: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceTypes = [
    { value: '', label: 'Choose a service' },
    { value: 'site-work', label: 'Site Work and Site Development' },
    { value: 'land-grading', label: 'Land Grading and Site Grading' },
    { value: 'excavation', label: 'Excavation and Earthwork' },
    { value: 'drainage', label: 'Drainage and Stormwater Solutions' },
    { value: 'land-clearing', label: 'Land Clearing and Lot Preparation' },
    { value: 'other', label: 'Other / Multiple Services' },
  ]

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '2-4-weeks', label: '2-4 weeks' },
    { value: '1-2-months', label: '1-2 months' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-months-plus', label: '3+ months' },
    { value: 'planning', label: 'Planning phase' },
  ]

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Project address or city is required'
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In production, this would be:
      // const response = await fetch('/api/quote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        budgetRange: '',
        timeline: '',
        description: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <div className={styles.formContainer} id="quote-form">
      <h2 className={styles.formTitle}>Free Fast Quote</h2>
      <p className={styles.formIntro}>
        Please fill out this form to request a free quote on your upcoming project and we will
        respond to you right away!
      </p>

      {submitStatus === 'success' && (
        <div className={styles.successMessage} role="alert">
          <strong>Thank you!</strong> We&apos;ve received your request and will contact you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage} role="alert">
          There was an error submitting your request. Please call us at{' '}
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a> or try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
              First Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
              aria-required="true"
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
            {errors.firstName && (
              <span id="firstName-error" className={styles.errorText} role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
              aria-required="true"
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <span id="lastName-error" className={styles.errorText} role="alert">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.errorText} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            aria-required="true"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.errorText} role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>
            Address or city of project <span className={styles.required}>*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={2}
            className={`${styles.textarea} ${errors.address ? styles.textareaError : ''}`}
            aria-required="true"
            aria-invalid={errors.address ? 'true' : 'false'}
            aria-describedby={errors.address ? 'address-error' : undefined}
          />
          {errors.address && (
            <span id="address-error" className={styles.errorText} role="alert">
              {errors.address}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="serviceType" className={styles.label}>
            What Services Do You Need? <span className={styles.required}>*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`${styles.select} ${errors.serviceType ? styles.selectError : ''}`}
            aria-required="true"
            aria-invalid={errors.serviceType ? 'true' : 'false'}
            aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
          >
            {serviceTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <span id="serviceType-error" className={styles.errorText} role="alert">
              {errors.serviceType}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="budgetRange" className={styles.label}>
            Approximate Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select budget range (optional)</option>
            {siteConfig.projectInfo.budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <p className={styles.budgetNote}>
            Typical projects start around $25,000. Smaller projects may be referred to a partner.
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="timeline" className={styles.label}>Desired Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={styles.select}
          >
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Briefly tell us more about what you need done! <span className={styles.required}>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className={`${styles.textarea} ${errors.description ? styles.textareaError : ''}`}
            aria-required="true"
            aria-invalid={errors.description ? 'true' : 'false'}
            aria-describedby={errors.description ? 'description-error' : undefined}
          />
          {errors.description && (
            <span id="description-error" className={styles.errorText} role="alert">
              {errors.description}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'GET MY QUOTE'}
        </button>
      </form>
    </div>
  )
}

