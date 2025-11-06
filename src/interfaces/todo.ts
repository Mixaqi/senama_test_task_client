export interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
  isEditing?: boolean;
  draftTitle?: string;
}
