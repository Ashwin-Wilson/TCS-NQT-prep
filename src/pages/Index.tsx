import { Link } from "react-router-dom";
import { MessageCircle, Clock, BookOpen, Calendar, ChevronRight, Timer, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbCCxpaEwEjx0pnZM229"; 
const PREP_KIT_URL = "https://forms.gle/BiYA8pw3h29a8freA"

const examSections = [
  { name: "Numerical Ability", questions: 20, marks: 26, time: "25 min", difficulty: "Moderate" },
  { name: "Verbal Ability", questions: 25, marks: 24, time: "25 min", difficulty: "Moderate" },
  { name: "Reasoning Ability", questions: 20, marks: 30, time: "25 min", difficulty: "Moderate" },
  { name: "Advanced Quantitative & Reasoning Ability", questions: "14-16", marks: 20, time: "25 min", difficulty: "Hard" },
  { name: "Advanced Coding", questions: 2, marks: 20, time: "90 min", difficulty: "Hard" },  
];

const scheduleItems = [
  { label: "Registration Opens", date: "18 February 2026", icon: BookOpen },
  { label: "Registration Deadline", date: "20 March 2026", icon: Calendar },
  { label: "Test Date", date: "10 March 2026 Onwards", icon: Clock },
  // { label: "Results Declaration", date: "June 2026", icon: ChevronRight },
];

const difficultyColor = (d: string) => {
  if (d.includes("Hard")) return "bg-destructive/10 text-destructive border-destructive/20";
  if (d.includes("Moderate")) return "bg-primary/10 text-primary border-primary/20";
  return "bg-muted text-muted-foreground";
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <span className="text-lg font-semibold text-foreground">TCS NQT 2026</span>
          <Link to="/practice">
            <Button size="sm" variant="outline" className="gap-1.5">
              <Timer className="h-4 w-4" />
              Practice Timer
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-4 py-8 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            National Qualifier Test
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            TCS NQT 2026
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your gateway to a career at Tata Consultancy Services. Get all exam details, 
            patterns, schedules, and practice tools in one place.
          </p>
        </section>

        {/* WhatsApp CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
          <Card className="border-2 border-whatsapp/30 bg-whatsapp/5 hover:bg-whatsapp/10 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">Join WhatsApp Channel for Preparation</h3>
                <p className="text-sm text-muted-foreground">Get daily updates, study materials & tips from toppers</p>
              </div>
              <ArrowRight className="h-5 w-5 text-whatsapp shrink-0" />
            </CardContent>
          </Card>
        </a>

        {/* Registration form */}
        <a href={PREP_KIT_URL} target="_blank" rel="noopener noreferrer" className="block">
          <Card className="border-2 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">Struggling with what to study for the upcoming TCS NQT? We've got you covered. </h3>
                <p className="text-sm text-muted-foreground">Grab the ultimate TCS NQT Prep Kit covering both Aptitude and Coding for just ₹99! 🚀</p>
              </div>
              <ArrowRight className="h-5 w-5 text-blue-500 shrink-0" />
            </CardContent>
          </Card>
        </a>

        {/* Exam Pattern */}
        <section id="pattern" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Exam Pattern</h2>
            <p className="text-muted-foreground">TCS NQT consists of 4 sections with a total of 82 questions</p>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Section</TableHead>
                    <TableHead className="text-center">Questions</TableHead>
                    <TableHead className="text-center">Time</TableHead>
                    <TableHead className="text-center">Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {examSections.map((s) => (
                    <TableRow key={s.name}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell className="text-center">{s.questions}</TableCell>
                      <TableCell className="text-center">{s.time}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={difficultyColor(s.difficulty)}>
                          {s.difficulty}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-semibold bg-muted/50">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-center">81-83</TableCell>
                    <TableCell className="text-center">190 min</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Schedule */}
        <section id="schedule" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Key Dates & Schedule</h2>
            <p className="text-muted-foreground">Important milestones for TCS NQT 2026</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {scheduleItems.map((item) => (
              <Card key={item.label}>
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timer Overview / CTA */}
        <section id="timer" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Section-wise Time Limits</h2>
            <p className="text-muted-foreground">Practice with real exam timers per section</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {examSections.map((s) => (
              <Card key={s.name} className="text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{s.time}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.questions} questions</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link to="/practice">
              <Button size="lg" className="gap-2">
                <Timer className="h-5 w-5" />
                Practice with Timer
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          TCS NQT 2026 — Unofficial preparation resource. Not affiliated with TCS.
        </div>
      </footer>
    </div>
  );
};

export default Index;
