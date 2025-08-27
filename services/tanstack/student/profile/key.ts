export function getStudentProfileKey() {
  return ["profile"];
}

export function postStudentIdentityKey() {
  return ["student-identity"];
}

export function putStudentEducationKey() {
  return ["student-education"];
}

export function getOlympiadsKey() {
  return ["olympiads"];
}

export function getEducationKey() {
  return ["education"];
}

export function getLocationKey(id?: number | string) {
  return ["location", id];
}

export function getScrolTypeKey() {
  return ["scrool", "type"];
}

export function getEducationalLevelsKey() {
  return ["educational", "levels"];
}

export function getStudyBranchesKey(id?: number | string) {
  return ["study", "branches", id];
}

export function postLocationKey() {
  return ["location"];
}

export function postStudentParentKey() {
  return ["student-parent"];
}

export function putStudentProfileKey() {
  return ["profile"];
}

export function postAvatarProfileKey() {
  return ["avatar"];
}
