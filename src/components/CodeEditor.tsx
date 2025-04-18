import React, { useState } from 'react'
import './CodeEditor.css'

interface CodeEditorProps {
  expectedSolution: string
  onClose: () => void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ expectedSolution, onClose }) => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleCheck = () => {
    if (code.trim() === expectedSolution.trim()) {
      setResult('✅ Правильное решение!')
    } else {
      setResult('❌ Неправильное решение.')
    }
  }

  return (
    <div className="code-editor-window">
      <div className="window-header">
        <span>Редактор кода</span>
        <button onClick={onClose}>×</button>
      </div>
      <textarea
        className="code-area"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Напишите ваш код здесь..."
      />
      <button className="check-button" onClick={handleCheck}>
        Проверить решение
      </button>
      {result && <div className="check-result">{result}</div>}
    </div>
  )
}

export default CodeEditor
