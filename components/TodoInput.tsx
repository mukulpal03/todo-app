import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { createHomeStyles } from '@/assets/styles/home.styles';

const TodoInput = () => {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors);

    const [todo, setTodo] = useState('');
    const addTodo = useMutation(api.todos.addTodo);

    const handleAddTodo = async () => {
        if (todo.trim()) {
            try {
                await addTodo({ text: todo.trim() });
                setTodo("");
            } catch (error) {
                console.log("Error adding a todo", error);
                Alert.alert("Error", "Failed to add todo");
            }
        }
    }

  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={todo}
          onChangeText={setTodo}
          onSubmitEditing={handleAddTodo}
          placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!todo.trim()}>
          <LinearGradient
            colors={todo.trim() ? colors.gradients.primary : colors.gradients.muted}
            style={[styles.addButton, !todo.trim() && styles.addButtonDisabled]}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoInput