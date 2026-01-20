import React from 'react';

interface SleepScoreDisplayProps {
    score: number;
    label?: string;
}

export function SleepScoreDisplay({ score, label='Sleep Score'}: SleepScoreDisplayProps){
    //Determine color based on score
    const getScoreColor = (score: number) => {
        if (score >= 80) return '#6BBF9C'; //Sleep Green
        if (score >= 60) return '#F2B705'; //Soft Amber
        return '#C9CCD3'; //Silver Mist
    };

    return(
        <div className='text-center'>
            <div className="text-3xl font-bold"
                style={{color: getScoreColor(score)}}>
                {score}
            </div>
            <div className="mt-1 soft-black text-sm">
                {label}
            </div>
        </div>
    )
}