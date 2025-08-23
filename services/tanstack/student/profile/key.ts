export function postStudentIdentityKey() {
  return ["student-identity"];
}

export function getStudentIdentityKey() {
  return ["student-identity"];
}

export function postStudentEducationKey() {
  return ["student-education"];
}

export function getStudentEducationKey() {
  return ["student-education"];
}

export function getStudentParentKey() {
  return ["student-parent"];
}

export function postStudentParentKey() {
  return ["student-parent"];
}

export function getLocationKey(id?: number) {
  return ["location", id];
}

export function getOlympiadsKey() {
  return ["olympiads"];
}

export function getScrolTypeKey() {
  return ["scrool", "type"];
}

export function getEducationalLevelsKey() {
  return ["educational", "levels"];
}

export function getStudyBranchesKey(id?: number) {
  return ["study", "branches", id];
}

export function postLocationKey() {
  return ["location"];
}
