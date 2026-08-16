import { useEditableTitle } from './useEditableTitle';

function HookTest() {
  const title = 'My title';
  const { 
    isEditing,
    workingTitle,
    startEditing,
    cancelEdit,
    updateTitle,
    finishEdit,
} = useEditableTitle(title);

}
