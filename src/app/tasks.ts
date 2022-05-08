export interface Task {
  [x: string]: any;
  // Id set to optional using ? as id will be created on json server when implemented 
  id?: number;
  title: string;
  description: string;
  reminder: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: 'task 1',
    description: 'task 1 desc',
    reminder: true,
  },
  {
    id: 2,
    title: 'task 2',
    description: 'task 2 desc',
    reminder: true,
  },
  {
    id: 3,
    title: 'task 3',
    description: 'task 3 desc',
    reminder: false,
  }
]