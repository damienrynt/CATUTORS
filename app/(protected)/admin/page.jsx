'use client'
import { supabase } from '@/lib/supabaseClient'

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome — Dashboard Loaded</h1>
      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  )
}

