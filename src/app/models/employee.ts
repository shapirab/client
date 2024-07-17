export interface Employee{
  employeeID: number,
  firstName: string,
  lastName: string,
  departmentId: number,
  dateOfJoining: Date,
  profileImage: string | ArrayBuffer | null | undefined,
  fullName?: string
}
