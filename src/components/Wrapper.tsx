import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { cn } from '../lib/utils'


type WrapperProps = {
    children?: React.ReactNode,
    className?: string
}
export default function Wrapper({
    children,
    className
}: WrapperProps) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className={cn('container mx-auto py-6 text-justify flex-1', className)}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
