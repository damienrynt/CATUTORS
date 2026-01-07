'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

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
        id: data.user.id,   // Must match auth.uid()
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
    <div style={{ maxWidth: 400, margin: '80px auto', textAlign: 'center' }}>
      <h1>Create Account</h1>
      {success ? (
        <p>Account created! Check your email to confirm.</p>
      ) : (
        <form onSubmit={handleSignup}>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/><br/>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/><br/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/><br/>
          <button>Create Account</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  )
}
