// import { useRef, useEffect } from 'react'
// import { run, isFunction } from '@cjy0208/tools'
import * as monaco from 'monaco-editor'
// import { editor } from 'monaco-editor'
import 'monaco-editor/esm/vs/language/json/monaco.contribution'
import MonacoEditor from 'react-monaco-editor'
// @ts-ignore
import monokaiTheme from 'monaco-themes/themes/Monokai.json'
monaco.editor.defineTheme('monokai', monokaiTheme as any)

export default MonacoEditor

// interface MonacoEditorProps extends editor.IStandaloneEditorConstructionOptions {
//   width?: number | string
//   height?: number | string
//   onChange?: any
// }

// export default function MonacoEditor({
//   width = '100%',
//   height = '100%',
//   language,
//   value,
//   onChange,
//   theme = 'vs-dark',
//   ...options
// }: MonacoEditorProps) {
//   const ref = useRef<HTMLDivElement>(null)
//   const monacoInstance = useRef<any>()

//   useEffect(() => {
//     monaco.editor.remeasureFonts()
//     monacoInstance.current = monaco.editor.create(ref.current!, {
//       value: language === 'json' ? `${JSON.stringify(JSON.parse(value ?? ''), null, '  ')}\n` : value,
//       language,
//       automaticLayout: true,
//       folding: true,
//       foldingHighlight: true,
//       foldingStrategy: 'indentation',
//       tabSize: 2,
//       theme,
//       ...options,
//     })

//     if (isFunction(onChange)) {
//       monacoInstance.current.onDidChangeModelContent(() => {
//         const value = monacoInstance.current.getValue()
//         onChange(value)
//       })
//     }

//     return () => {
//       run(monacoInstance.current, 'dispose')
//     }
//   }, [])

//   return <div ref={ref} style={{ width, height }} />
// }
