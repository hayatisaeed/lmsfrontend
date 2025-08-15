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

export function postStudentParentKey() {
  return ["student-parent"];
}

export function getStatesKey() {
  return ["states"];
}

export function getCitiesKey(id?: number) {
  return ["cities", id];
}
