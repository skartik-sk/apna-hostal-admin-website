'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { stat } from 'fs'
import { v4 as uuidv4 } from 'uuid'
export default function FinesPage({ params }: { params: { id: string } }){


  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('fine')
      .insert([{

       

        id: uuidv4(),
        updated_at:new   Date().toISOString(), student: params.id, amount: parseFloat(amount), title : reason, status: 'pending'}])
    
    if (error) {
      console.error('Error imposing fine:', error)
      setMessage('Error imposing fine. Please try again.')
    } else {
      setMessage('Fine imposed successfully.')

      setAmount('')
      setReason('')

    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Impose Fine</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason</Label>
          <Textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            rows={3}
          />
        </div>
        <Button type="submit" className="w-full">Impose Fine</Button>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-600">{message}</p>
      )}
    </div>
  )
}