import React from 'react'
import Header from './Header'
import clsx from 'clsx'


type WrapperProps = {
    children?: React.ReactNode,
    className?: string
}
export default function Wrapper({
    children,
    className
}: WrapperProps) {
    return (
        <div className="w-full">
            <Header />
            <div className={clsx('container mx-auto py-6', className)}>
                {children}
            </div>
        </div>
    )
}
