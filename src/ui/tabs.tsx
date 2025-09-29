import * as React from 'react'
import cx from 'classnames'

type TabsContextType = { value: string, setValue: (v: string)=>void }
const Ctx = React.createContext<TabsContextType | null>(null)

export function Tabs({ defaultValue, className, children }:{defaultValue:string,className?:string,children:React.ReactNode}){
  const [value,setValue] = React.useState(defaultValue)
  return <Ctx.Provider value={{value,setValue}}><div className={className}>{children}</div></Ctx.Provider>
}
export function TabsList({className, children}:{className?:string,children:React.ReactNode}){
  return <div className={cx('inline-flex rounded-xl bg-white/60 p-1 shadow-sm', className)}>{children}</div>
}
export function TabsTrigger({value, className, children}:{value:string,className?:string,children:React.ReactNode}){
  const ctx = React.useContext(Ctx)!
  const active = ctx.value===value
  return <button onClick={()=>ctx.setValue(value)} className={cx('px-3 py-1.5 text-sm rounded-lg transition', active?'bg-emerald-600 text-white':'text-emerald-800 hover:bg-emerald-50', className)}>{children}</button>
}
export function TabsContent({value, children}:{value:string,children:React.ReactNode}){
  const ctx = React.useContext(Ctx)!
  if(ctx.value!==value) return null
  return <div className="mt-3">{children}</div>
}