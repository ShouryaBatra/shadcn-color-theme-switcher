import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip"; // Import TooltipProvider
import { ModeToggle } from "./components/mode-toggle";
import { ColorThemeToggle } from "./components/color-theme-toggle";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Label,
  Pie,
  PieChart,
  YAxis,
  LabelList,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label as UILabel } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Toast, ToastProvider, ToastViewport } from "./components/ui/toast";
import { useToast } from "./hooks/use-toast";
import { Toaster } from "./components/ui/toaster";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./components/ui/chart";

export default function App() {
  const { toast } = useToast();

  const barChartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const horizontalBarChartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const pieChartData = [
    { browser: "chrome", visitors: 275 },
    { browser: "safari", visitors: 200 },
    { browser: "firefox", visitors: 287 },
    { browser: "edge", visitors: 173 },
    { browser: "other", visitors: 190 },
  ];

  const barChartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--primary))",
    },
  };

  const horizontalBarChartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--primary))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--secondary))",
    },
    label: {
      color: "hsl(var(--background))",
    },
  };

  const pieChartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--primary))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--secondary))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--accent))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--destructive))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--muted))",
    },
  };

  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Wrap the entire app (or at least the Tooltip component) with TooltipProvider */}
      <TooltipProvider>
        <div className="p-6 space-y-6">
          {/* Header with Theme Toggles */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Shadcn Component Showcase</h1>
            <div className="flex space-x-4">
              <ModeToggle />
              <ColorThemeToggle />
            </div>
          </div>

          {/* Grid Layout for Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Component */}
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is some content inside the card.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Card Footer Button</Button>
              </CardFooter>
            </Card>

            {/* Input Component */}
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <UILabel htmlFor="name">Name</UILabel>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <UILabel htmlFor="email">Email</UILabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Switch and Checkbox Components */}
            <Card>
              <CardHeader>
                <CardTitle>Toggle Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <UILabel htmlFor="airplane-mode">Airplane Mode</UILabel>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <UILabel htmlFor="terms">Accept terms and conditions</UILabel>
                </div>
              </CardContent>
            </Card>

            {/* Radio Group Component */}
            <Card>
              <CardHeader>
                <CardTitle>Radio Group</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <UILabel htmlFor="r1">Default</UILabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <UILabel htmlFor="r2">Comfortable</UILabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <UILabel htmlFor="r3">Compact</UILabel>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Progress and Slider Components */}
            <Card>
              <CardHeader>
                <CardTitle>Progress & Slider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={33} />
                <Slider defaultValue={[50]} max={100} step={1} />
              </CardContent>
            </Card>

            {/* Tabs Component */}
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">Account content.</TabsContent>
                  <TabsContent value="password">Password content.</TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Avatar Component */}
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
              </CardHeader>
              <CardContent>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>

            {/* Badge Component */}
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>Badge</Badge>
              </CardContent>
            </Card>

            {/* Alert Component */}
            <Card>
              <CardHeader>
                <CardTitle>Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Table Component */}
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Editor</TableCell>
                      <TableCell>Inactive</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Tooltip Component */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
              </CardHeader>
              <CardContent>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>

            {/* Popover Component */}
            <Card>
              <CardHeader>
                <CardTitle>Popover</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p>This is a popover content.</p>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Select Component */}
            <Card>
              <CardHeader>
                <CardTitle>Select</CardTitle>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Textarea Component */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Type your message here." />
              </CardContent>
            </Card>

            {/* Separator Component */}
            <Card>
              <CardHeader>
                <CardTitle>Separator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Above the separator</p>
                  <Separator />
                  <p>Below the separator</p>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Component */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Command Component */}
            <Card>
              <CardHeader>
                <CardTitle>Command Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>Profile</CommandItem>
                      <CommandItem>Settings</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>

            {/* Dialog Component */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Scroll Area Component */}
            <Card>
              <CardHeader>
                <CardTitle>Scroll Area</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="p-4 border rounded">
                        Scrollable content {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Skeleton Component */}
            <Card>
              <CardHeader>
                <CardTitle>Skeleton Loading</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 w-[180px]" />
              </CardContent>
            </Card>

            {/* Toast Component */}
            <Card>
              <CardHeader>
                <CardTitle>Toast</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => {
                    toast({
                      title: "Scheduled: Catch up",
                      description: "Friday, February 10, 2023 at 3:00 PM",
                    });
                  }}
                >
                  Show Toast
                </Button>
                <ToastProvider>
                  <ToastViewport />
                </ToastProvider>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={barChartConfig}>
                  <BarChart data={barChartData} width={400} height={300}>
                    <CartesianGrid
                      vertical={false}
                      stroke="hsl(var(--muted))"
                    />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar
                      dataKey="desktop"
                      fill="hsl(var(--primary))"
                      radius={8}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            {/* Pie Chart */}
            <Card className="flex flex-col h-full">
              <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Donut with Text</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center min-h-[400px]">
                <ChartContainer
                  config={pieChartConfig}
                  className="mx-auto aspect-square"
                >
                  <PieChart width={400} height={400}>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={pieChartData}
                      dataKey="visitors"
                      nameKey="browser"
                      innerRadius={80}
                      outerRadius={120}
                      strokeWidth={5}
                      fill="hsl(var(--primary))"
                      stroke="hsl(var(--background))"
                    >
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-3xl font-bold"
                                >
                                  {totalVisitors.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Visitors
                                </tspan>
                              </text>
                            );
                          }
                        }}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            {/* Horizontal Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart - Custom Label</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={horizontalBarChartConfig}>
                  <BarChart
                    accessibilityLayer
                    data={horizontalBarChartData}
                    layout="vertical"
                    width={400}
                    height={300}
                    margin={{
                      right: 16,
                      left: 16,
                      top: 16,
                      bottom: 16,
                    }}
                  >
                    <CartesianGrid
                      horizontal={false}
                      stroke="hsl(var(--muted))"
                    />
                    <YAxis
                      dataKey="month"
                      type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                      hide
                    />
                    <XAxis dataKey="desktop" type="number" hide />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Bar
                      dataKey="desktop"
                      layout="vertical"
                      fill="hsl(var(--primary))"
                      radius={4}
                    >
                      <LabelList
                        dataKey="month"
                        position="insideLeft"
                        offset={8}
                        className="fill-[hsl(var(--background))]"
                        fontSize={12}
                      />
                      <LabelList
                        dataKey="desktop"
                        position="right"
                        offset={8}
                        className="fill-foreground"
                        fontSize={12}
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
