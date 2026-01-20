'use client'

import Image from "next/image";
import React, { useState } from 'react';
import { SleepCard } from "./ui/components/SleepCard";
import { StatusIndicator } from "./ui/components/StatusIndicator";
import { SleepScoreDisplay } from "./ui/components/SleepScoreDisplay";
import { PendulumIcon } from "./ui/components/PendulumIcon";
import { BottomNav } from "./ui/components/BottomNav";
import { Moon, Sun, Clock, BedDouble, Activity, Calendar } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showWelcome, setShowWelcome] = useState(true);
  const currentDate = new Date();

  //welcome Screen
  if(showWelcome) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
          <div className="flex w-full flex-col justify-center items-center">
            
            <PendulumIcon size={120} />
            <h1 className="text-3xl font-bold mt-8">Sleep</h1>
            <p className="mt-3 text-center max-w-80">Track, analyze, and improve your sleep quality with scientific insights</p>
            
            <button 
              className="bg-[#4F7CAC] w-80 p-4 mt-5 rounded-xl text-lg" 
              onClick={() => setShowWelcome(false)}>
              Login
            </button>

            <a href="" className="opacity-50">Sign Up</a>
          </div>
        </main>
      </div>
    );
  }

  return(
    <div className="min-h-screen bg-midnight-charcoal pb-20">
      {/* Home Screen */}
      {activeTab === 'home' && (
        <div className="p-5 space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="">Good Morning</h1>
              <p className="mt-4 font-small opacity-75">
                {currentDate.toDateString()}
              </p>
            </div>
            <PendulumIcon size={48} />
          </div>

           {/* Sleep Score Card */}
           <SleepCard>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold color-white text-m ">
                    Last Night
                  </h2>
                  <p>7h 32m</p>
                </div>
                <h1>Sleep Score = 85</h1>
              </div>

              <div className="mt-5 pt-5 border-t border-[rgba(255, 255, 255, 0.15)] grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Moon size={16} color="#8B93C9" strokeWidth={1.5} />
                    <span className="opacity-75 color-black text-m">
                      Bedtime
                    </span>
                  </div>
                  <div className="text-lg color-black font-semibold">
                    10:45 PM
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sun size={16} color="#F2B705" strokeWidth={1.5} />
                    <span className="opacity-75 color-black text-m">
                      Wake up
                    </span>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                    6:17 AM
                  </div>
                </div>
                  
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={16} color="#6BBF9C" strokeWidth={1.5} />
                    <span className="opacity-75 color-black text-m">
                      Quality
                    </span>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                    Good
                  </div>
                </div>
              </div>
           </SleepCard>

           {/* Sleep Stages Card */}
           <SleepCard>
            <h3 className="mb-2">
              Sleep Stages
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2 text-lg color-white">
                  <span>Deep Sleep</span>
                  <span className="font-semibold">2h 15m</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B5C8A] rounded-full w-3/10" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-lg color-white">
                  <span>REM Sleep</span>
                  <span className="font-semibold">1h 455m</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-[#8B93C9] rounded-full w-23/100" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-lg color-white">
                  <span>Light Sleep</span>
                  <span className="font-semibold">3h 32m</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-[#4F7CAC] rounded-full w-47/100" />
                </div>
              </div>
            </div>
           </SleepCard>

          {/* Quick Actions */}
          <SleepCard>
            <h3 className="mb-2">Today's Goals</h3>
            <div className="space-y-3">
              <StatusIndicator status="completed" text="8 hours of sleep" />
              <StatusIndicator status="warning" text="Consistant bedtime" />
              <StatusIndicator status="inactive" text="Pre-sleep routine" />
            </div>
          </SleepCard>
        </div>
      )}

      {/* Trends Screen */}
      {activeTab === 'trends' && (
        <div>
          <h1>Sleep Trends</h1>
          <SleepCard>
            <h3>7-Day Average</h3>
            <SleepScoreDisplay score={82} label={"Weekly Average"} />
          </SleepCard>

        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>


  )

}
