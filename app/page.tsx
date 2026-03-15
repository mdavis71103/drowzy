"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SleepCard } from "./ui/components/SleepCard";
import { StatusIndicator } from "./ui/components/StatusIndicator";
import { SleepScoreDisplay } from "./ui/components/SleepScoreDisplay";
import { SleepChart } from "./ui/components/SleepChart";
import { SleepButton } from "./ui/SleepButton";
import { PendulumIcon } from "./ui/components/PendulumIcon";
import { BottomNav } from "./ui/components/BottomNav";
import { Moon, Sun, Clock, BedDouble, Activity, Calendar } from "lucide-react";

// Mock data for the chart
const sleepData = [
  { date: "Mon", score: 85, average: 78 },
  { date: "Tue", score: 72, average: 78 },
  { date: "Wed", score: 90, average: 80 },
  { date: "Thu", score: 68, average: 79 },
  { date: "Fri", score: 82, average: 79 },
  { date: "Sat", score: 88, average: 81 },
  { date: "Sun", score: 92, average: 82 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true);
  const currentDate = new Date();

  //welcome Screen
  if (showWelcome) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
          <div className="flex w-full flex-col justify-center items-center">
            <PendulumIcon size={120} />
            <h1 className="text-3xl font-bold mt-8">Sleep</h1>
            <p className="mt-3 text-center max-w-80">
              Track, analyze, and improve your sleep quality with scientific
              insights
            </p>

            <button
              className="bg-[#4F7CAC] w-80 p-4 mt-5 rounded-xl text-lg"
              onClick={() => setShowWelcome(false)}
            >
              Login
            </button>

            <a href="" className="opacity-50">
              Sign Up
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-charcoal pb-20">
      {/* Home Screen */}
      {activeTab === "home" && (
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
                  <span className="opacity-75 color-black text-m">Bedtime</span>
                </div>
                <div className="text-lg color-black font-semibold">
                  10:45 PM
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sun size={16} color="#F2B705" strokeWidth={1.5} />
                  <span className="opacity-75 color-black text-m">Wake up</span>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  6:17 AM
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Activity size={16} color="#6BBF9C" strokeWidth={1.5} />
                  <span className="opacity-75 color-black text-m">Quality</span>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Good
                </div>
              </div>
            </div>
          </SleepCard>

          {/* Sleep Stages Card */}
          <SleepCard>
            <h3 className="mb-2">Sleep Stages</h3>

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
      {activeTab === "trends" && (
        <div>
          <h1>Sleep Trends</h1>
          <SleepCard>
            <h3 className="mb-4">7-Day Average</h3>
            <SleepScoreDisplay score={82} label={"Weekly Average"} />
          </SleepCard>

          <SleepCard>
            <h3 className="mb-2">Sleep Score Trend</h3>
            <p className="soft-white">Last 7 Days</p>
            <SleepChart data={sleepData} />
          </SleepCard>

          <SleepCard>
            <h3 className="mb-4">Insights</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1 bg-var(--sleep-green) rounded-full flex-0" />
                <div>
                  <p className="text-lg color-white mb-1">Great Progress!</p>
                  <p className="text-sm soft-white">
                    Your sleep quality improved by 12% this week
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-var(--sleep-green) rounded-full flex-0" />
                <div>
                  <p className="text-lg color-white mb-1">Keep it consistant</p>
                  <p className="text-sm soft-white">
                    Try going to bed at the same time each night
                  </p>
                </div>
              </div>
            </div>
          </SleepCard>
        </div>
      )}

      {/* Log Screen */}
      {activeTab === "log" && (
        <div className="p-5 space-y-5">
          <h1 className="text-white mb-6 font-semibold text-2xl">Sleep Log</h1>

          <button
            className="flex justify-center w-full bg-[#4F7CAC] p-4 mt-5 rounded-xl text-lg"
            onClick={() => alert("This feature is not yet avilable")}
          >
            <div className="flex items-center justify-aroundcenter gap-2">
              <BedDouble size={20} strokeWidth={0.5} />
              Log Sleep Manually
            </div>
          </button>

          <SleepCard>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Calendar size={20} color="#4F7CAC" strokeWidth={1.5} />
                <span className="font-semibold color-white">Jan 7, 2026</span>
              </div>
              <span className="soft-white font-sm ">Last Night</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm soft-white block mb-1">Duration</span>
                <span className=" color-white font-semibold">8h 15m</span>
              </div>
              <div>
                <span className="text-sm soft-white block mb-1">Score</span>
                <span className="font-semibold color-[#6BBF9C]">85</span>
              </div>
            </div>
          </SleepCard>

          <SleepCard>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Calendar size={20} color="#4F7CAC" strokeWidth={1.5} />
                <span className="font-semibold color-white">Jan 6, 2026</span>
              </div>
              <span className="soft-white font-sm ">Yesterday</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm soft-white block mb-1">Duration</span>
                <span className=" color-white font-semibold">6h 45m</span>
              </div>
              <div>
                <span className="text-sm soft-white block mb-1">Score</span>
                <span className="font-semibold color-[#6BBF9C]">72</span>
              </div>
            </div>
          </SleepCard>
        </div>
      )}

      {/* Profile Screen */}
      {activeTab === "profile" && (
        <div className="p-5 space-y-5">
          <h1 className="text-white mb-6 text-2xl font-semibold">Profile</h1>

          <SleepCard>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#4F7CAC] flex item-center justify-center">
                <span className="text-2xl font-semibold text-white">A</span>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Alex Chen</p>
                <p className="text-sm soft-white">alex.chen@email.com</p>
              </div>
            </div>
            <div className="pt-4 border-t border-[rgba(255,255,255,0.15)] space-y-3">
              <div className="flex justify-between">
                <span className="soft-white">Member since</span>
                <span className="font-semibold text-white">Dec 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="soft-white">Total sleep tracked</span>
                <span className="font-semibold text-white"> 38 nights</span>
              </div>
            </div>
          </SleepCard>

          <SleepCard>
            <h3 className="text-xl font-semibold text-white mb-4">
              Sleep Goals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Target Sleep</span>
                  <span className="font-semibold text-white">8 hours</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Target Bedtime</span>
                  <span className="font-semibold text-white">10:30 PM</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Target Wake Time</span>
                  <span className="font-semibold text-white">6:30 AM</span>
                </div>
              </div>
            </div>
          </SleepCard>
          <SleepButton variant="secondary" className="w-full">
            Edit Settings
          </SleepButton>
          <SleepButton variant="secondary" className="w-full">
            About Sleep App
          </SleepButton>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
