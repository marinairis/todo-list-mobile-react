import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons
        name="format-list-checkbox"
        style={styles.icon}
        size={80}
      />
      <Text style={styles.textBold}>Você não tem tarefas cadastradas</Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefenas e organize sua vida rapá!
      </Text>
    </View>
  );
}
