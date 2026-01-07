'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter, usePathname } from 'next/navigation'

export default function ProtectedLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.replace('/login')
        return
      }

      const { data: user } = await supabase
        .from('users')
        .select('role')
        .eq('id', session.user.id)
        .single()

      if (!user) {
        await supabase.auth.signOut()
        router.replace('/login')
        return
      }

      if (pathname.startsWith('/client') && user.role !== 'client') {
        router.replace(`/${user.role}`)
      }

      if (pathname.startsWith('/tutor') && user.role !== 'tutor') {
        router.replace(`/${user.role}`)
      }

      if (pathname.startsWith('/admin') && user.role !== 'admin') {
        router.replace(`/${user.role}`)
      }

      setLoading(false)
    }

    check()
  }, [])

  if (loading) return <p>Loading...</p>

  return children
}
