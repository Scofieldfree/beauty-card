'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>👋 hi! Sounds like a 🎨  Beauty Card is a great tool! By generating beautiful text cards, it can make your reading notes, memos, and reminders more visually appealing and easy to share.
💡 You can try entering some text to see how it looks. Please feel free to share your needs and I can help you improve the content and make your card more attractive!</p>`,
  })

  return <EditorContent editor={editor} className="card-tiptap" />
}

export default Tiptap
