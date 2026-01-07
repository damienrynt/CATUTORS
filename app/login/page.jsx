'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'  // ← added this line

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

    // Get user role
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
    <div style={{ maxWidth: 400, margin: '80px auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/><br/>
        <button>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <p>New to CAtutors?</p>
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  )
}
