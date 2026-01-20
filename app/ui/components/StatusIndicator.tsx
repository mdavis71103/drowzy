import React from 'react';

import { Check, AlertTriangle } from 'lucide-react'

interface StatusIndicatorProps { 
    status: 'completed' | 'warning' | 'inactive';
    text: string;
}

export function StatusIndicator({ status, text }: StatusIndicatorProps) {
    const config = {
        completed: {
            color: '#6BBF9C',
            icon: Check,
            textColor: 'text-[#6BBF9C]'
        },
        warning: {
            color: '#F2B705',
            icon: AlertTriangle,
            textColor: 'text-[#F2B705]'
        },
        inactive: {
            color: '#C9CCD3',
            icon: null,
            textColor: 'text-[#C9CCD3]'
        },
    }


    const { color, icon: Icon, textColor } = config[status];

    return (
        <div className='flex items-center gap-2'>
            {Icon && <Icon size={16} color={color} strokeWidth={2} />}
            {!Icon && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color}} />}
            <span className={`text-sm ${textColor}`}>{text}</span>
        </div>
    )
};