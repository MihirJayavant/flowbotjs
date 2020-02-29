import { IField } from './field'

export interface IFormGroup {
  message?: string
  children: (IField | IFormGroup)[]
  isValid: boolean
  index: number
}
