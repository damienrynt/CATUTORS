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

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      setError(error.message)
      return
    }

    await supabase.from('users').insert({
      id: data.user.id,
      email: data.user.email,
      name,
      role: 'client'
    })

    setSuccess(true)
  }

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', textAlign: 'center' }}>
      <h1>Create Account</h1>

      {success ? (
        <p>Account created! Check your email to confirm.</p>
      ) : (
        <form onSubmit={handleSignup}>
          <input placeholder="Name" onChange={e => setName(e.target.value)} /><br/><br/>
          <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/><br/>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/><br/>
          <button>Create Account</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  )
}
