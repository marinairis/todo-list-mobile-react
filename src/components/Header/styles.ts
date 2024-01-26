import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    position: 'relative',
  },
  textContainer: {
    backgroundColor: theme.colors.base.gray700,
    color: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.lgxd,
  },
  textContainer2: {
    backgroundColor: theme.colors.base.gray700,
    color: theme.colors.brand.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.lgxd,
  },
  form: {
    position: 'absolute',
    bottom: -54 / 2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '75%',
    color: theme.colors.base.gray100,
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 5,
    padding: 16,
    fontSize: theme.font_size.md,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
    marginRight: 4,
  },
  inputBorder: {
    borderColor: theme.colors.brand.yellow,
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
