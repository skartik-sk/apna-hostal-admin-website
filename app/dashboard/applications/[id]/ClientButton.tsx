// components/ClientButton.tsx

"use client"; // Add this at the top of the file

import React from 'react';
import { Button } from '@/components/ui/button';

const ClientButton = ({ id }: { id: string }) => {
  const handleSubmit = async () => {
    const response = await fetch('/api/updateStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });



    if (response.ok) {

    
    } else {
      console.error('Error updating status');
    }
  };

  return (
    <Button onClick={handleSubmit} variant={'approve'}>
      Approve
    </Button>
  );
};

export default ClientButton;