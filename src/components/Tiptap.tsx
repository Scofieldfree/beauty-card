"use client"

import { useState } from "react"
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// import Document from '@tiptap/extension-document'
import FontFamily from '@tiptap/extension-font-family'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

import './Tiptap.scss'
// console.log({ variables })

const Tiptap = (props: any) => {
  // const [activeMenu, setActiveMenu] = useState('')
  console.log({ props })
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, FontFamily],
    content: `
    <h1>👋 hi!</h1>
    <p> Sounds like a 🎨  Beauty Card is a great tool! By generating beautiful text cards, it can make your reading notes, memos, and reminders more visually appealing and easy to share.
</p>
<p>💡 You can try entering some text to see how it looks. Please feel free to share your needs and I can help you improve the content and make your card more attractive!</p>
`,
  })

  // const menuClick = (type: string) => {
  //   setActiveMenu(type)
  //   editor.chain().focus().toggleBold().run()
  // }

  if (!editor) {
    return null
  }


  return (
    <>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          {/* <button
            onClick={() => menuClick('bold')}
            className={`${activeMenu === 'bold' ? 'is-active' : ''} menuItem`}
          >
            Bold
          </button>
          <button
            onClick={() => menuClick('italic')}
            className={`${activeMenu === 'italic' ? 'is-active' : ''} menuItem`}
          >
            Italic
          </button>
          <button
            onClick={() => menuClick('strike')}
            className={`${activeMenu === 'strike' ? 'is-active' : ''} menuItem`}
          >
            Strike
          </button> */}
          <button
            onClick={() => editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}
            className={
              editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })
                ? 'is-active'
                : ''
            }
            data-test-id="comic-sans"
          >
            Comic Sans
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            Strike
          </button>
        </div>
      </BubbleMenu >
      <EditorContent editor={editor} className="card-tiptap" />
    </>
  )
}

export default Tiptap
