import { IField, FieldType, ValidatorFn, AsyncValidatorFn } from './interfaces'

export class FieldBuilder {

    private field: IField

    constructor(key: string, type: FieldType) {
        this.field = {
            key,
            type,
            name: '',
            isValid: false,
            questions: [],
            validators: [],
            asyncValidators: []
        }
    }

    addName(name: string) {
        this.field.name = name
        return this
    }

    addQuestions(...questions: string[]) {
        this.field.questions = [...this.field.questions, ...questions]
        return this
    }

    addValidators(...validators: ValidatorFn[]) {
        this.field.validators = [...this.field.validators, ...validators]
        return this
    }

    addAsyncValidators(...validators: AsyncValidatorFn[]) {
        this.field.asyncValidators = [...this.field.asyncValidators, ...validators]
        return this
    }

    create(): IField {
        return { ...this.field }
    }

}
