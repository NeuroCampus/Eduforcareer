import { createFileRoute } from "@tanstack/react-router";
import RecentCourses from "@/components/RecentCourses";

export const Route = createFileRoute("/RecentCourses")({
  component: () => (
    <div>
      <RecentCourses />
    </div>
  ),
});
