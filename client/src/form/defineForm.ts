import { Field } from "./types";

type InferFieldValue<F> =
    F extends { type: "text" }
        ? string
        : F extends { type: "number"}