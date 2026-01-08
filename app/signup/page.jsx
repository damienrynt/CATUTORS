'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')

    try {
      // 1️⃣ Create Auth account
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password
      })
      if (signUpError) throw signUpError

      // 2️⃣ Insert into users table
      const { error: insertError } = await supabase.from('users').insert([{
        id: data.user.id, // Must match auth.uid()
        email: data.user.email,
        name,
        role: 'client',
        schedule: null,
        bio: null,
        subjects: null,
        grade: null
      }])
      if (insertError) throw insertError

      setSuccess(true)
    } catch (err) {
      console.error('Signup failed:', err)
      setError(err.message || 'Could not create profile. Contact admin.')
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Create Account</h1>

        {success ? (
          <p style={styles.successText}>Account created! Check your email to confirm.</p>
        ) : (
          <form onSubmit={handleSignup} style={styles.form}>
            <input 
              placeholder="Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              style={styles.input} 
            />
            <input 
              placeholder="Email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              style={styles.input} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              style={styles.input} 
            />
            <button type="submit" style={styles.button}>Create Account</button>
            {error && <p style={styles.error}>{error}</p>}
          </form>
        )}

        <p style={styles.bottomText}>Already have an account?</p>
        <Link href="/login">
          <button style={styles.buttonSecondary}>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ffffff 0%, #fef7f7 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  container: {
    width: '100%',
    maxWidth: 400,
    padding: '48px 32px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#1a1a1a',
  },
  successText: {
    color: '#28a745',
    fontWeight: 600,
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '14px 16px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    color: '#1a1a1a', // dark text
    backgroundColor: '#fff',
    transition: 'all 0.2s ease',
  },
  button: {
    padding: '16px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(220,53,69,0.2)',
    marginBottom: '16px',
    transition: 'all 0.2s ease',
  },
  buttonSecondary: {
    padding: '14px 0',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    border: '2px solid #dc3545',
    background: 'white',
    color: '#dc3545',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    width: '100%',
  },
  error: {
    color: 'red',
    marginTop: '12px',
  },
  bottomText: {
    marginBottom: '12px',
    color: '#666',
  }
}
