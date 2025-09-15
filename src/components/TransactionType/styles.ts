import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors' 

export const styles = StyleSheet.create({
 form: {
    justifyContent: "center",
    alignItems: "center",
 },
 
    container: {
    height: 40,
    width: 360,
    flexDirection: 'row',
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    overflow: 'hidden',

  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    gap: 7,
  },
  title: {
    fontSize: 14,
    color: colors.gray[500],
  },
})
