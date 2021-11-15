import type { Todo } from '$lib/types/Todo';
import { writable } from 'svelte/store';

export const todoStore = writable<Todo[]>([]);
