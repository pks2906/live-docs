'use client';

import { createDocument } from '@/lib/actions/room.actions';

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });

      if(room) router.push(`/documents/${room.id}`);
      console.log('working')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button type="submit" onClick={addDocumentHandler} className="gradient-blue flex gap-1 shadow-md">
      <Image 
        src="/assets/icons/add.svg" alt="add" width={24} height={24}
      />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  )
}

export default AddDocumentBtn