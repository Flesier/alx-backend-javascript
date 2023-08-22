export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, i) => accumulator + i.id, 0);
}
