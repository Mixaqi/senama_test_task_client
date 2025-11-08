import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 232, 232, 0.5)',
  },
  todoText: {
    flexWrap: 'wrap',
    marginBottom: 10,
    fontSize: 16,
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: 6,
  },
  button: {
    minWidth: 60,
    height: 36,
    borderRadius: 15,
    borderColor: '#bdb5b5ff',
  },
  undoButton: {
    backgroundColor: 'green',
    borderColor: '#ccb7b7ff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(181, 225, 240, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 0.8,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
