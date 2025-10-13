import React from 'react';
import { CheckCircleIcon, ListTodoIcon, FolderKanbanIcon, UsersIcon } from 'lucide-react';
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
export function AuthLayout({
  children,
  title,
  subtitle
}: AuthLayoutProps) {
  return <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 p-12 flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">TaskFlow</h2>
        </div>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500 p-2 rounded-full">
              <CheckCircleIcon className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-lg">Track your tasks efficiently</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500 p-2 rounded-full">
              <ListTodoIcon className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-lg">Manage your to-do lists</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500 p-2 rounded-full">
              <FolderKanbanIcon className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-lg">Organize with kanban boards</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500 p-2 rounded-full">
              <UsersIcon className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-lg">Collaborate with your team</p>
          </div>
        </div>
        <div>
          <p className="text-indigo-200 text-sm">
            © 2023 TaskFlow. All rights reserved.
          </p>
        </div>
      </div>
      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-gray-600">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>;
}