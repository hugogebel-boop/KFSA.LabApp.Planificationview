import * as React from 'react'
export function Card({className='', children}:{className?:string,children:React.ReactNode}){
  return <div className={`card ${className}`}>{children}</div>
}
export function CardHeader({className='', children}:{className?:string,children:React.ReactNode}){
  return <div className={`card-header ${className}`}>{children}</div>
}
export function CardTitle({className='', children}:{className?:string,children:React.ReactNode}){
  return <div className={`card-title ${className}`}>{children}</div>
}
export function CardContent({className='', children}:{className?:string,children:React.ReactNode}){
  return <div className={`card-content ${className}`}>{children}</div>
}