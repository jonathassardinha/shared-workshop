import React from "react";
import { CheckCircle, Clock, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "../../lib/cn";

export interface ProgressIndicatorProps {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  progress?: number; // 0-100
  showIcon?: boolean;
  className?: string;
}

export function ProgressIndicator({
  status,
  message,
  progress,
  showIcon = true,
  className,
}: ProgressIndicatorProps) {
  const getIcon = () => {
    if (!showIcon) return null;

    switch (status) {
      case "loading":
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "text-blue-500";
      case "success":
        return "text-green-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {getIcon()}
      <span className={cn("text-sm", getStatusColor())}>{message}</span>
      {progress !== undefined && status === "loading" && (
        <div className="max-w-xs flex-1">
          <div className="h-1 w-full rounded-full bg-gray-200">
            <div
              className="h-1 rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export interface AutoSaveIndicatorProps {
  state: {
    isSaving: boolean;
    hasUnsavedChanges: boolean;
    lastSaved: number | null;
    error: string | null;
  };
  className?: string;
}

export function AutoSaveIndicator({
  state,
  className,
}: AutoSaveIndicatorProps) {
  const getStatus = () => {
    if (state.error) {
      return { status: "error" as const, message: state.error };
    }
    if (state.isSaving) {
      return { status: "loading" as const, message: "Saving..." };
    }
    if (state.hasUnsavedChanges) {
      return { status: "idle" as const, message: "Unsaved changes" };
    }
    if (state.lastSaved) {
      const timeAgo = formatTimeAgo(state.lastSaved);
      return { status: "success" as const, message: `Last saved ${timeAgo}` };
    }
    return { status: "idle" as const, message: "No changes" };
  };

  const { status, message } = getStatus();

  return (
    <ProgressIndicator
      status={status}
      message={message}
      className={cn("text-xs", className)}
    />
  );
}

function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  if (diff < 60000) return "just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
}

export interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
  className?: string;
}

export function StepProgress({
  currentStep,
  totalSteps,
  stepNames,
  className,
}: StepProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm text-gray-500">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm font-medium text-gray-700">
        {stepNames[currentStep - 1]}
      </div>
    </div>
  );
}

export interface FileUploadProgressProps {
  filename: string;
  progress: number;
  status: "uploading" | "processing" | "complete" | "error";
  error?: string;
  className?: string;
}

export function FileUploadProgress({
  filename,
  progress,
  status,
  error,
  className,
}: FileUploadProgressProps) {
  const getStatusMessage = () => {
    switch (status) {
      case "uploading":
        return "Uploading...";
      case "processing":
        return "Processing...";
      case "complete":
        return "Complete";
      case "error":
        return error ?? "Upload failed";
    }
  };

  const getStatusType = () => {
    switch (status) {
      case "uploading":
      case "processing":
        return "loading" as const;
      case "complete":
        return "success" as const;
      case "error":
        return "error" as const;
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="truncate text-sm font-medium">{filename}</span>
        <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full rounded-full bg-gray-200">
        <div
          className={cn(
            "h-1 rounded-full transition-all duration-300",
            status === "error" ? "bg-red-500" : "bg-blue-500",
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
      <ProgressIndicator
        status={getStatusType()}
        message={getStatusMessage()}
        showIcon={false}
        className="text-xs"
      />
    </div>
  );
}
