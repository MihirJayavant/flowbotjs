import { IField } from './field.ts'

export interface IFormGroup {
  message?: string
  children: (IField | IFormGroup)[]
  isValid: boolean
  index: number
}
