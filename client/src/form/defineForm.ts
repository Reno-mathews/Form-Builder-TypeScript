import { Field } from "./types";

type InferFieldValue<F> =
    F extends { type: "text" }
        ? string
        : F extends { type: "number"}
        ? number
        : F extends { type: "select"; options: readonly (infer O)[] }
        ? O
        : never;

export type InferFormValues<T extends Record<string, Field>> = {
    [K in keyof T]: InferFieldValue<T[K]>;
};

export function defineForm<T extends Record<string, Field>>(form: T): T {
    return form;
}