import React from 'react';


interface SleepCardProps {
    children: React.ReactNode;
    className?: string;
}


export function SleepCard({ children, className=''} : SleepCardProps){
    return(
        <div 
            className={`bg-[#374151] rounded-[16px] p-5 shadow-[0_6px_20px_rgba(0,0,0,0.2)] ${className}`}
            style={{ transition: 'all 0.2s ease-out' }}>
                {children}

        </div>
    )
}


