import React, { useCallback, useState, useEffect } from 'react'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from "@tiptap/extension-underline";
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import Placeholder from '@tiptap/extension-placeholder'

import {BsTypeBold,BsTypeItalic,BsTypeH2,BsListOl,BsListUl,BsBlockquoteLeft,BsArrowCounterclockwise,BsArrowClockwise,BsTypeUnderline,BsTextCenter,BsTextLeft,BsTextRight,BsImages} from 'react-icons/bs'

import stylesWriting from './WritingTipTap.module.css';
import styles from '../common/toolTip/ToolTip.module.css';



const MenuBar = ({ editor }) => {
    const addImage = useCallback(() => {
      const url = window.prompt('Enter the image URL:')
  
      if (url) {
        editor.chain().focus().setImage({ src: url }).run()
      }
    }, [editor])
  
if (!editor) {
    return null
}

  return (
    <div>
     <div className={`${stylesWriting['menu-bar']} ${stylesWriting['fixed-writing-menu-bar']}`}>
          <div>

          
              {/* ..........Resim Ekle.......................................................... */}
          <button onClick={addImage}>
            <div className={styles['tooltip']}>
              <BsImages/>
              <span className={styles['tooltiptext']}>Add Image</span>
            </div>
            
          </button>

              
              {/* ...................................................................... */}
          <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={
              !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={`${stylesWriting[editor.isActive('bold') ? 'is-active' : '']}`}
          >
            <div className={styles['tooltip']}>
              <BsTypeBold/> 
              <span className={styles['tooltiptext']}>Bold</span>
            </div>
          </button>
          <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={
              !editor.can()
                  .chain()
                  .focus()
                  .toggleItalic()
                  .run()
              }
              
              className={`${stylesWriting[editor.isActive('italic') ? 'is-active' : '']}`}
          >
            <div className={styles['tooltip']}>
            <BsTypeItalic/>
              <span className={styles['tooltiptext']}>Italic</span>
            </div>
              
          </button>
          <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              disabled={
              !editor.can()
                  .chain()
                  .focus()
                  .toggleUnderline()
                  .run()
              }
              className={`${stylesWriting[editor.isActive('underline') ? 'is-active' : '']}`}
          >
            <div className={styles['tooltip']}>
              <BsTypeUnderline/>
              <span className={styles['tooltiptext']}>Underline</span>
            </div>
              
          </button>
              <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={`${stylesWriting[editor.isActive({ textAlign: 'left' }) ? 'is-active' : '']}`}
              
          >
            <div className={styles['tooltip']}>
              <BsTextLeft/>
              <span className={styles['tooltiptext']}>Align Left</span>
            </div>
              
          </button>
          <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={`${stylesWriting[editor.isActive({ textAlign: 'center' }) ? 'is-active' : '']}`}
              
          >
            <div className={styles['tooltip']}>
              <BsTextCenter/>
              <span className={styles['tooltiptext']}>Align Center</span>
            </div>
              
          </button>
          <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={`${stylesWriting[editor.isActive({ textAlign: 'right' }) ? 'is-active' : '']}`}
              
          >
            <div className={styles['tooltip']}>
              <BsTextRight/>
              <span className={styles['tooltiptext']}>Align Right</span>
            </div>
              
          </button>
          
          
          <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`${stylesWriting[editor.isActive('heading', { level: 2 }) ? 'is-active' : '']}`}
              
          >
            <div className={styles['tooltip']}>
              <BsTypeH2/>
              <span className={styles['tooltiptext']}>Header 2</span>
            </div>
             
          </button>
          
          <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`${stylesWriting[editor.isActive('bulletList') ? 'is-active' : '']}`}
              
          >
            <div className={styles['tooltip']}>
              <BsListUl/>
              <span className={styles['tooltiptext']}>Unorder List</span>
            </div>
              
          </button>
          <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
              
          >
            <div className={styles['tooltip']}>
              <BsListOl/>
              <span className={styles['tooltiptext']}>Order List</span>
            </div>
              
          </button>
          
          <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={stylesWriting[editor.isActive('blockquote') ? 'is-active' : '']}
             
          >
            <div className={styles['tooltip']}>
              <BsBlockquoteLeft/>
              <span className={styles['tooltiptext']}>Blockquote</span>
            </div>
              
          </button>
        </div>
        <div className={stylesWriting['writing-right-buttons-div']}>
          <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={
              !editor.can()
                  .chain()
                  .focus()
                  .undo()
                  .run()
              }
          >
            <div className={styles['tooltip']}>
              <BsArrowCounterclockwise/>
              <span className={styles['tooltiptext']}>Undo</span>
            </div>
              
          </button>
          <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={
              !editor.can()
                  .chain()
                  .focus()
                  .redo()
                  .run()
              }
          >
            <div className={styles['tooltip']}>
              <BsArrowClockwise/>
              <span className={styles['tooltiptext']}>Redo</span>
            </div>
              
          </button>
          
        </div>
      
      </div>
    </div>
  )
}

const TipTap = ({setDesc}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const my_content_props = content;
  
    const titleEditor = useEditor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          // Use a placeholder:
          placeholder: 'Title',
        }),
        CharacterCount.configure({
            limit:200,
          }),
      ],
      content: '',
      onUpdate: ({editor}) => {
        const html = editor.getHTML()
        setTitle(html)
      },
    })
  
    const editor = useEditor({
      extensions: [
        Placeholder.configure({
          // Use a placeholder:
          placeholder: 'Write Your Story...',}),
        Dropcursor,
        Document,
        Paragraph,
        Text,
        Image,
        Heading,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Underline,
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle.configure({ types: [ListItem.name] }),
        StarterKit.configure({
          bulletList: {
            keepMarks: true,
            keepAttributes: false,
          },
          orderedList: {
            keepMarks: true,
            keepAttributes: false,
          },
        }),
      ],
      content: ``,
      onUpdate: ({editor}) => {
        const html = editor.getHTML()
        setContent(html)
      },
    })
  
    useEffect(() => {
      setDesc(`<h2>${title}</h2>${content}`)
    }, [title, content])
  
    return (
      <div>
        <MenuBar editor={editor} />
        <div className={stylesWriting['editor-container']}>
            <EditorContent  editor={titleEditor} className={stylesWriting['title-content-container']}/>
            <EditorContent editor={editor} className={stylesWriting['writing-content-container']}/>
        </div>
      </div>
    )
  }

export default TipTap