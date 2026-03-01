import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Pause, RotateCcw, Timer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    id: "verbal",
    name: "Verbal Ability",
    time: 30 * 60,
    questions: 24,
    tips: [
      "Focus on reading comprehension — practice skimming passages quickly.",
      "Revise common grammar rules and sentence correction patterns.",
      "Build vocabulary through daily word lists.",
      "Practice para-jumble and cloze test regularly.",
    ],
  },
  {
    id: "reasoning",
    name: "Reasoning Ability",
    time: 40 * 60,
    questions: 30,
    tips: [
      "Master puzzles, seating arrangements, and syllogisms.",
      "Practice blood relations and coding-decoding daily.",
      "Learn shortcut techniques for series and pattern recognition.",
      "Time yourself — skip questions that take more than 90 seconds.",
    ],
  },
  {
    id: "numerical",
    name: "Numerical Ability",
    time: 40 * 60,
    questions: 26,
    tips: [
      "Focus on percentages, profit/loss, time & work, and averages.",
      "Memorize tables up to 30 and squares up to 25.",
      "Practice mental math to improve speed.",
      "Solve previous year TCS NQT quant questions.",
    ],
  },
  {
    id: "coding",
    name: "Coding",
    time: 30 * 60,
    questions: 2,
    tips: [
      "Practice in C, C++, Java, or Python — pick one and master it.",
      "Focus on arrays, strings, sorting, and basic data structures.",
      "Solve medium-level problems on coding platforms daily.",
      "Always handle edge cases and write clean, optimized code.",
    ],
  },
];

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

const PracticeTimer = () => {
  const [selectedId, setSelectedId] = useState("verbal");
  const [timeLeft, setTimeLeft] = useState(sections[0].time);
  const [isRunning, setIsRunning] = useState(false);

  const section = sections.find((s) => s.id === selectedId)!;

  const selectSection = useCallback((id: string) => {
    const sec = sections.find((s) => s.id === id)!;
    setSelectedId(id);
    setTimeLeft(sec.time);
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTimeLeft(section.time);
    setIsRunning(false);
  }, [section.time]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) setIsRunning(false);
  }, [timeLeft]);

  const progress = ((section.time - timeLeft) / section.time) * 100;

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <span className="text-lg font-semibold text-foreground">Practice Timer</span>
          <div className="w-24" />
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-4 py-8 space-y-8">
        {/* Section Selector */}
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((s) => (
            <Button
              key={s.id}
              variant={selectedId === s.id ? "default" : "outline"}
              onClick={() => selectSection(s.id)}
              className="gap-1.5"
            >
              <Timer className="h-4 w-4" />
              {s.name}
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-xl">{section.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{section.questions} questions · {section.time / 60} minutes</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className={`text-7xl md:text-8xl font-mono font-bold tracking-tighter ${timeLeft === 0 ? "text-destructive" : "text-foreground"}`}>
                {formatTime(timeLeft)}
              </p>
              {timeLeft === 0 && (
                <Badge variant="destructive" className="text-sm">Time's up!</Badge>
              )}
            </div>

            <Progress value={progress} className="h-3" />

            <div className="flex items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => setIsRunning(!isRunning)}
                disabled={timeLeft === 0}
                className="gap-2 min-w-[140px]"
              >
                {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isRunning ? "Pause" : "Start"}
              </Button>
              <Button size="lg" variant="outline" onClick={reset} className="gap-2">
                <RotateCcw className="h-5 w-5" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tips for {section.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {section.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PracticeTimer;
