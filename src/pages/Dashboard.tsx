
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Camera, 
  Users, 
  Award, 
  Play, 
  Calendar,
  TrendingUp,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-african-gold"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const userProgress = [
    { name: 'Film Production Basics', progress: 75, total: 12, completed: 9 },
    { name: 'Acting Fundamentals', progress: 45, total: 8, completed: 4 },
    { name: 'VFX Introduction', progress: 20, total: 10, completed: 2 },
  ];

  const recentActivities = [
    { type: 'course', title: 'Completed "Camera Angles" lesson', time: '2 hours ago' },
    { type: 'project', title: 'Uploaded project "My First Short"', time: '1 day ago' },
    { type: 'community', title: 'Joined "Aspiring Directors" group', time: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-african-gradient text-white py-12">
        <div className="container mx-auto section-padding">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {user.user_metadata?.first_name || 'Creative'}!
              </h1>
              <p className="text-african-gold/80">Continue your journey in African media creation</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">Level 3</div>
              <div className="text-sm opacity-80">Media Creator</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto section-padding py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Courses</p>
                      <p className="text-2xl font-bold text-african-gold">3</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-african-gold" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Projects</p>
                      <p className="text-2xl font-bold text-african-sunset">5</p>
                    </div>
                    <Camera className="h-8 w-8 text-african-sunset" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Certificates</p>
                      <p className="text-2xl font-bold text-african-sky">2</p>
                    </div>
                    <Award className="h-8 w-8 text-african-sky" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-african-gold" />
                  Your Progress
                </CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {userProgress.map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{course.name}</h4>
                      <Badge variant="outline">{course.completed}/{course.total} lessons</Badge>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{course.progress}% complete</span>
                      <Button size="sm" className="btn-primary">
                        <Play className="h-4 w-4 mr-1" />
                        Continue
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-african-sunset" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-african-gold mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-primary">
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Project
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-african-gold" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-african-gold/10">
                  <Award className="h-6 w-6 text-african-gold" />
                  <div>
                    <p className="font-medium text-sm">First Upload</p>
                    <p className="text-xs text-muted-foreground">Uploaded your first project</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-african-sunset/10">
                  <Users className="h-6 w-6 text-african-sunset" />
                  <div>
                    <p className="font-medium text-sm">Community Member</p>
                    <p className="text-xs text-muted-foreground">Joined the community</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border border-african-gold/20 bg-african-gold/5">
                  <p className="font-medium text-sm mb-1">Complete Acting Fundamentals</p>
                  <p className="text-xs text-muted-foreground mb-2">4 lessons remaining</p>
                  <Button size="sm" variant="outline" className="w-full">Continue Course</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
