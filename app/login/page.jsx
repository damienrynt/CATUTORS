'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError(error.message)
      return
    }

    const { data: profile } = await supabase
      .from('users')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profile.role === 'admin') router.push('/admin')
    else if (profile.role === 'tutor') router.push('/tutor')
    else router.push('/client')
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <button type="submit" style={styles.button}>Login</button>
          {error && <p style={styles.error}>{error}</p>}
        </form>

        <p style={styles.bottomText}>New to CATUTORS?</p>
        <Link href="/signup">
          <button style={styles.buttonSecondary}>Sign Up</button>
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
    transition: 'all 0.2s ease',
    color: '#1a1a1a',         // darker text
    backgroundColor: '#fff',
    '::placeholder': {
      color: '#666'           // darker placeholder
    }
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
