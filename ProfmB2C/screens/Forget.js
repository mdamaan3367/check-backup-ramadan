import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const PlaceholderAnimationTextInput = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState('');
  const placeholderRef = useRef();
  const animationIntervalRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    if (!typing && !text) {
      animatePlaceholder();
    }

    return () => {
      clearInterval(animationIntervalRef.current);
      clearTimeout(animationTimeoutRef.current);
    };
  }, [typing, text]);

  const animatePlaceholder = () => {
    const text = "Search what you need";
    let i = 0;
    animationIntervalRef.current = setInterval(() => {
      setPlaceholder((prevPlaceholder) => prevPlaceholder + text[i]);
      i++;
      if (i === text.length) {
        clearInterval(animationIntervalRef.current);
        animationTimeoutRef.current = setTimeout(resetPlaceholder, 1000);
      }
    }, 100);
  };

  const resetPlaceholder = () => {
    if (placeholderRef.current) {
      const text = placeholderRef.current.props.text;
      let i = text.length - 1;
      animationIntervalRef.current = setInterval(() => {
        setPlaceholder((prevPlaceholder) => prevPlaceholder.slice(0, -1));
        i--;
        if (i === -1) {
          clearInterval(animationIntervalRef.current);
          animatePlaceholder();
        }
      }, 100);
    }
  };

  const onChangeText = (text) => {
    setTyping(text.length > 0);
    setText(text);
  };

  return (
    <View style={styles.container}>
      <Animatable.Text
        ref={placeholderRef}
        animation={typing || text ? null : "fadeIn"}
        iterationCount="infinite"
        duration={1500}
        style={styles.placeholder}
        text={placeholder}
      />
      <TextInput
        placeholder={typing || text ? '' : placeholder}
        placeholderTextColor="#D3D3D3"
        maxLength={40}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    color: '#006daa',
    padding: 10,
    marginTop: '2%',
  },
  placeholder: {
    color: '#D3D3D3',
  },
});

export default PlaceholderAnimationTextInput;