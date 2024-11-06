"use client"

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './Tiptap.scss'
// console.log({ variables })

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>👋 hi! Sounds like a 🎨  Beauty Card is a great tool! By generating beautiful text cards, it can make your reading notes, memos, and reminders more visually appealing and easy to share.
💡 You can try entering some text to see how it looks. Please feel free to share your needs and I can help you improve the content and make your card more attractive!</p>`,
  })
  console.log({ editor })

  return (
    <>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className='menuItem'

          >
            {/* className={editor.isActive('bold') ? 'is-active' : ''} */}
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className='menuItem'
          >
            {/* className={editor.isActive('italic') ? 'is-active' : ''} */}
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className='menuItem'
          >
            {/* className={editor.isActive('strike') ? 'is-active' : ''} */}
            Strike
          </button>
        </div>
      </BubbleMenu>
      <EditorContent editor={editor} className="card-tiptap" />
    </>
  )
}

export default Tiptap
