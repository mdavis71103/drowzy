import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SleepChartProps {
    data: { date: string; score: number; average: number }[];
}

export function SleepChart ({ data }: SleepChartProps){
    return(
        <div className="w-full h-55">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>

                    <CartesianGrid 
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.15)"
                        vertical={false}
                        />
                    <XAxis 
                        dataKey="date"
                        stroke="rgba(255,255,255,0.5)"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        />
                    <YAxis 
                        stroke="rgba(255,255,255,0.5)"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                        />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: '#374151', //Soft slate
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '8px',
                            color: 'white'
                        }}
                        labelStyle={{ color: 'rgba(255,255,255,0.75)' }}
                        />
                    <Line 
                        type='monotone'
                        dataKey='score'
                        stroke='#3B5C8A' //Sleep score line
                        strokeWidth={2}
                        dot={{ fill: '#3B5C8A', r: 4 }}
                        activeDot={{ r: 6 }}
                        />
                    <Line 
                        type='monotone'
                        dataKey='average'
                        stroke='#8B93C9' //Sleep score line
                        strokeWidth={2.5}
                        strokeDasharray="5 5"
                        dot={false}
                        />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}