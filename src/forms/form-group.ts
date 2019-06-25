import { IFormGroup, IField } from "./interfaces";

export class FormGroupBuilder {
  private formGroup: IFormGroup = {
    index: 0,
    children: [],
    isValid: false,
  }

  addMessage(message: string) {
    this.formGroup.message = message
    return this
  }

  addField(field: IField) {
    this.formGroup.children = [...this.formGroup.children, field]
    return this
  }

  addFormGroup(formGroup: IFormGroup) {
    this.formGroup.children = [...this.formGroup.children, formGroup]
    return this
  }

  create(): IFormGroup {
    return { ...this.formGroup }
  }

}
