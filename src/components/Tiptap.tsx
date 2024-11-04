'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>👋 hi 你好
🎨 Memo Card 可以帮你生成精美的文字卡片，可应用于你日常书摘、笔记、备忘等内容的分享。
💡 你可以在这里输入文字尝试一下，支持 Markdown 语法，实时生效。</p>`,
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
