export function getCoursesKey() {
  return ["courses"];
}

export function getCourseItemKey(course_id: string) {
  return ["course", course_id];
}

export function postEnrollInCourseKey() {
  return ["enroll", "course"];
}
