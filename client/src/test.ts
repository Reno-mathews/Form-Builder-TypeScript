import { defineForm, InferFormValues } from "./form/defineForm";

const userForm = defineForm({
    name: {
        type: "text",
        label: "Full Name",
        required: true,
    },
    age: {
        type: "number",
        label: "Age",
        min: 18,
    },
    role: {
        type: "select",
        label: "Role",
        options: ["admin", "editor", "viewer"] as const,
    },
});

type UserFormValues = InferFormValues<typeof userForm>;

const example: UserFormValues = {
    name: "Alice",
    age: 25,
    role: "superuser",
};