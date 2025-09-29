import * as React from 'react'
import cx from 'classnames'
export function Badge({className, children}:{className?:string, children:React.ReactNode}){
  return <span className={cx('inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs', className)}>{children}</span>
}