'use client'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login') // or '/' if you have a landing page
  }

  return (
    <div>
      <h1>Yashar si tu vois ca dm moi SHLAG514</h1>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
