export type BaseField = {
    label: string;
    required?: boolean;
};

export type TextField = BaseField & {
    type: "text";
};

export type NumberField = BaseField & {
    type: "number";
    min?: number;
};

export type SelectField<T extends readonly string[]> BaseField & {
    type: "select";
    options: T;
};

export type Field =
    | TextField
    | NumberField
    | SelectField<readonly string[]>;