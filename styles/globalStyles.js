import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
    color: colors.text,
  },
  taskDelete: {
    color: colors.deleteButton,
  },
});
