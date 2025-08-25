import { query, mutation } from "./_generated/server"
import { v, ConvexError } from "convex/values"

export const getTodos = query({
    handler: async ({ db }) => {
        return await db.query("todos").order("desc").collect()
    }
})

export const addTodo = mutation({
    args: {
        text: v.string(),
    },
    handler: async ({ db }, { text }) => {
        const todoId = await db.insert("todos", { text, isCompleted: false });

        return todoId;
    }
})

export const toggleTodo = mutation({
    args: {
        id: v.id("todos"),
    },
    handler: async ({ db }, { id }) => {
        const todo = await db.get(id);

        if (!todo) {
            throw new ConvexError("Todo not found");
        }

        await db.patch(id, { isCompleted: !todo.isCompleted });
    }
})

export const deleteTodo = mutation({
    args: {
        id: v.id("todos"),
    },
    handler: async ({ db }, { id }) => {
        await db.delete(id);
    }
})

export const updateTodo = mutation({
    args: {
        id: v.id("todos"),
        text: v.string(),
    },
    handler: async ({ db }, { id, text }) => {
        await db.patch(id, { text });
    }
})

export const deleteAllTodo = mutation({
    handler: async ({ db }) => {
        const todos = await db.query("todos").collect();

        for (const todo of todos) {
            await db.delete(todo._id);
        }

        return { deleted: todos.length }
    }
})
