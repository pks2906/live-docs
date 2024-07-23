'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'

import Header from '@/components/Header'
import { Editor } from '@/components/ui/editor/Editor'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators'
import {  useRef, useState } from 'react';
import { Input } from './ui/input'


const CollaborativeRoom = ({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata?.title || 'Untitled');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  
  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">  
          <Header>
             <div ref={containerRef} className="flex w-fit items-center justify-center gap-2">
              {editing && !loading ? (
                <Input
                
                />
 
              ) : (
                <>
                  <p className="document-title">{documentTitle}</p>
                </>
              )}


        </div>
        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
          <ActiveCollaborators />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        </div>

      </Header>
        
      <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom