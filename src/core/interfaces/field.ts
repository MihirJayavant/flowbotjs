export enum FieldOptions {
    Text = 'text',
    Number = 'number',
    MultiSelect = 'multi-select',
    SingleSelect = 'single-select'
}

export interface IFieldType {
    readonly type: FieldOptions
}

export interface IFieldTextType extends IFieldType {
    readonly type: FieldOptions.Text
    value: string
}

export interface IFieldNumberType extends IFieldType {
    readonly type: FieldOptions.Number
    value: number
}

export interface IFieldMiltiSelectType extends IFieldType {
    readonly type: FieldOptions.MultiSelect
    value: string[]
    options: string[]
}

export interface IFieldSingleSelectType extends IFieldType {
    readonly type: FieldOptions.SingleSelect
    value: string
    options: string[]
}

export type FieldType = IFieldTextType | IFieldNumberType | IFieldMiltiSelectType | IFieldSingleSelectType

export type ValidatorFn = (value: string) => true | { message: string }
export type AsyncValidatorFn = (value: string) => Promise<true | { message: string }>

export interface IField {
    key: string
    type: FieldType
    name: string
    isValid: boolean
    questions: string[]
    validators: ValidatorFn[]
    asyncValidators: AsyncValidatorFn[]
}

export class A { }