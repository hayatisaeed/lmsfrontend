export function getStudentClassesTestsKey(course_id: string) {
  return ["classes", "tests", course_id];
}

export function postStudentClassesTestsAttemptsKey() {
  return ["classes", "tests", "attempts"];
}

export function getExamsAttemptsKey(attempt_id: string) {
  return ["exams", "attempts", attempt_id];
}

export function putAutoSaveAnswerKey() {
  return ["AutoSave", "Answer"];
}

export function postSubmitExampKey() {
  return ["submit", "examp"];
}
